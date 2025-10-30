<script setup>
import { AppState } from '@/AppState.js';
import Quill from '@/components/Quill.vue';
import { accountService } from '@/services/AccountService.js';
import { gamesService } from '@/services/GamesService.js';
import { reviewsService } from '@/services/ReviewsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';




const activeGame = computed(() => AppState.activeGame)
const account = computed(() => AppState.account)
const reviews = computed(() => AppState.reviews)

const route = useRoute()

const reviewData = ref({
    gameId: '',
    story: 0,
    graphics: 0,
    gameplay: 0,
    replayAbility: 0,
    body: '',

})

let totalScore = reviewData.value.gameplay + reviewData.value.graphics + reviewData.value.story + reviewData.value.replayAbility / 4


const accountData = ref({
    name: '',
    picture: '',
    bio: '',
    bannerImg: 'https://www.altavia.hu/wp-content/uploads/2020/11/Hero-Banner-Placeholder-Light-1024x480-1.png',
    favGameImg: '',
    favGameArt: '',
    favGameName: '',

})

watch(account, () => {
    accountData.value = { ...account.value }

}, { immediate: true })

onMounted(() => {
    getActiveGame()
    getReviews()
})

async function getReviews() {
    try {
        await reviewsService.getReviews(route.params.gameId)
    }
    catch (error) {
        Pop.error('failed to load reviews', error);
        logger.log('failed to load reviews', error)
    }
}

async function getActiveGame() {
    try {
        await gamesService.getActiveGame(route.params.gameId)
    }
    catch (error) {
        Pop.error('Failed to Load Game!', error);
        logger.log('Failed to Load Game!', error)
    }
}
async function favoriteGame() {
    try {
        accountData.value.favGameName = activeGame.value.title
        accountData.value.favGameImg = activeGame.value.coverArt
        accountData.value.favGameArt = activeGame.value.artwork
        await accountService.updateAccount(accountData.value)
    }
    catch (error) {
        Pop.error(error);
        logger.log('Failed to Favorite Game!', error)
    }
}

async function createReview() {
    try {
        reviewData.value.gameId = activeGame.value.id
        await reviewsService.createReview(reviewData.value)
        reviewData.value = {
            gameId: '',
            story: 0,
            graphics: 0,
            gameplay: 0,
            replayAbility: 0,
            body: '',

        }
        Pop.success('Successfully created a review!')

    }
    catch (error) {
        Pop.error('Failed to save review', error);
        logger.log('Failed to save review', error)
    }
}

async function unFavoriteGame() {
    try {
        accountData.value.favGameName = ''
        accountData.value.favGameImg = ''
        accountData.value.favGameArt = ''
        await accountService.updateAccount(accountData.value)
    }
    catch (error) {
        Pop.error(error);
        logger.log('Failed to Favorite Game!', error)
    }
}

async function deleteReview(reviewId) {
    try {
        await reviewsService.deleteReview(reviewId)
    }
    catch (error) {
        Pop.error(error);
    }
}


const likeData = ref({
    _id: '',
    liked: false
})


async function like(reviewId) {
    try {
        likeData.value._id = reviewId
        likeData.value.liked = true
        await reviewsService.like(likeData.value)
    }
    catch (error) {
        Pop.error(error);
    }
}


async function disLike(reviewId) {
    try {
        likeData.value._id = reviewId
        likeData.value.liked = false
        await reviewsService.like(likeData.value)
    }
    catch (error) {
        Pop.error(error);
    }
}

</script>


<template>
    <main class="container-fluid position-relative">
        <section v-if="activeGame" :style="{ backgroundImage: `url(${activeGame.artwork})` }"
            class="row background-art ">
        </section>
        <section v-if="activeGame" class="row positioned-row w-100 justify-content-evenly">
            <div class="col-md-3 pill-buttons d-flex justify-content-end ">
                <div class="cover-art" :style="{ backgroundImage: `url(${activeGame.coverArt})` }">
                    <div v-if="account" class="col-2 text-white fav-button-pos">
                        <h1 class="text-yellow " v-if="account.favGameName == activeGame.title"
                            @click="unFavoriteGame()"><i class="mdi mdi-star"></i></h1>
                        <h1 class="text-white fav-button" v-else @click="favoriteGame()"><i class="mdi mdi-star"></i>
                        </h1>

                    </div>
                </div>
            </div>
            <div class="col-md-3 text-white d-flex pill-buttons justify-content-end">
                <span type="button" onclick="document.getElementById('reviewSection').scrollIntoView()"
                    class="d-flex justify-content-between text-box mb-2">
                    <h5 class="m-0">Write A Review </h5>
                    <h5 class="m-0"><i class="mdi mdi-pen"></i></h5>
                </span>
                <span class="d-flex justify-content-between text-box mb-2">
                    <h5 class="m-0">Wishlist</h5>
                    <i class="mdi mdi-plus"></i>
                </span>
                <span class="d-flex justify-content-between text-box mb-2">
                    <h5 class="m-0">Mark as Played </h5>
                    <i class="mdi mdi-controller "></i>
                </span>
                <span class="d-flex justify-content-between text-box mb-2">
                    <h5 class="m-0">Like</h5>
                    <i class="mdi mdi-heart"></i>
                </span>
            </div>
            <div class="col-md-4 text-white game-details-box">
                <span class="d-flex justify-content-between">
                    <h4 class="w-75">{{ activeGame.title }}</h4>
                    <span>
                        <h5 class="genre-pill mt-1">{{ activeGame.genre[0].name }}</h5>
                    </span>
                </span>
                <span class="d-flex justify-content-between">
                    <span class="align-items-center">
                        <h4 class="my-4">{{ activeGame.siteRating }} / 5 <i class="mdi mdi-star text-yellow"></i></h4>
                        <h4 class="mb-4" v-if="activeGame.userRating">{{ activeGame.userRating }}</h4>
                        <h4 class="mb-4" v-else>Rate This Game!</h4>
                        <h4 class="mt-4">Release Date: {{ activeGame.releaseDate }}</h4>
                    </span>
                    <img v-if="activeGame.ageRating == null"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ESRB_2013_Rating_Pending.svg/120px-ESRB_2013_Rating_Pending.svg.png"
                        alt="Rating Pending">
                    <div v-else>
                        <img v-if="activeGame.ageRating.name == 'Mature'"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ESRB_2013_Mature.svg/120px-ESRB_2013_Mature.svg.png"
                            alt="Mature" class="pb-2">
                        <img v-if="activeGame.ageRating.name == 'Everyone'"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/ESRB_2013_Everyone.svg/120px-ESRB_2013_Everyone.svg.png"
                            alt="Everyone">
                        <img v-if="activeGame.ageRating.name == 'Teen'"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/ESRB_2013_Teen.svg/120px-ESRB_2013_Teen.svg.png"
                            alt="Teen">
                        <img v-if="activeGame.ageRating.name == 'Everyone 10+'"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/ESRB_2013_Everyone_10%2B.svg/120px-ESRB_2013_Everyone_10%2B.svg.png"
                            alt=" E 10+" class="mb-2">
                        <img v-if="activeGame.ageRating.name == 'Adult Only'"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/ESRB_2013_Adults_Only_18%2B.svg/120px-ESRB_2013_Adults_Only_18%2B.svg.png"
                            alt="Adult">
                        <img v-if="activeGame.ageRating.name == 'Rating Pending'"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ESRB_2013_Rating_Pending.svg/120px-ESRB_2013_Rating_Pending.svg.png"
                            alt="Rating Pending">
                    </div>
                </span>
            </div>
        </section>
    </main>
    <article v-if="activeGame" class="container-fluid">
        <section class="row mt-5 mt-5 text-white justify-content-evenly">

            <span class="col-5 mt-5">
                <h1 class="fw-bold mt-4">{{ activeGame.title }}</h1>
            </span>
            <span class="text-end mt-5 col-5 box-width ">
                <h5>{{ activeGame.releaseDate }}</h5>
                <h5>{{ activeGame.siteRating }}</h5>
                <h5 v-if="activeGame.ageRating != null">{{ activeGame.ageRating.name }}</h5>
            </span>
        </section>
    </article>
    <main v-if="activeGame" class="container text-white">
        <section class="row  g-3">
            <h3>Description:</h3>
            <div v-html="activeGame.description" class=""></div>
        </section>
        <section class="row">
            <div class="col-md-12 mt-4">
                <h3>Genre: {{ activeGame.genre[0].name }}</h3>
                <h3 class="my-4">Tags:</h3>
            </div>
            <div v-for="tag in activeGame.tags" :key="tag.name" class=" col-lg-3 col-md-4 col-sm-6  my-1">
                <span class="bg-success rounded-pill p-1">{{ tag.name }}</span>
            </div>
        </section>
        <section class="row">
            <div class="col-12 my-4">
                <h3>Scores:</h3>
            </div>
            <div class="col-md-4 text-center text-black d-flex justify-content-center">
                <div class="bg-white" v-if="activeGame.userRating">
                    <p>{{ activeGame.userRating }}/5</p>
                    <img v-if="account" :src="account.picture" alt="profile picture" class="profile-pic">
                    <p>Your Score</p>
                </div>
                <div class="bg-white w-50" v-else>
                    <p><i class="mdi mdi-star"></i></p>
                    <img v-if="account" :src="account.picture" alt="profile picture" class="profile-pic">
                    <img v-else src="../assets/img/blank-profile-pic.png" alt="user rating" class="score-pic">
                    <p class="mt-2">Your Score goes here</p>
                </div>
            </div>
            <div class="col-md-4 text-center text-black d-flex justify-content-center">
                <div class="bg-white w-50 ">
                    <p>{{ activeGame.siteRating }}/5</p>
                    <img src="../assets/img/game_site_logo.png" alt="MGL rating" class=" score-pic">
                    <h5 class="mt-2">MGL Score</h5>
                </div>
            </div>
            <div class="col-md-4 text-center text-black d-flex justify-content-center">
                <div class="bg-white w-50 ">
                    <p>{{ activeGame.metaCritic }}</p>
                    <img src="../assets/img/Metacritic_M_1.png" alt="MetaCritic rating" class="score-pic">
                    <h5 class="mt-2">MetaCritic Score</h5>
                </div>
            </div>
        </section>
        <section class="row mt-4">
            <div class="col-6">
                <h3>Stores:</h3>
                <div v-for="Store in activeGame.stores" :key="Store.store.id">
                    {{ Store.store.name }}
                </div>
            </div>
            <div class="col-6">
                <h3>Platforms: </h3>
                <div v-for="platform in activeGame.platforms" :key="platform.platform.id">
                    {{ platform.platform.name }}
                </div>
            </div>
        </section>
        <section class="row">
            <div class="col-12">
                <h3>
                    Requirements:
                </h3>
            </div>
            <div class="col-12">
                <p v-for="requirements in activeGame.platforms" class="text-white">{{ requirements.requirements.minimum
                }}</p>
            </div>
        </section>
        <section class="row ">
            <div id="reviewSection" class="col-md-12">
                <h3>Write A Review</h3>
            </div>
        </section>
        <form @submit.prevent="createReview()" class="row d-flex justify-content-evenly" action="">
            <div class="col-md-2">
                <label for="story">Story</label>
                <span class="d-flex">
                    <input class="form-control" id="story" name="story" v-model="reviewData.story" type="number" min="0"
                        max="5">
                    <h4 class="mb-0 mt-1 ps-1">/5</h4>
                </span>
            </div>
            <div class="col-md-2">
                <label for="gameplay">Gameplay</label>
                <span class="d-flex">
                    <input class="form-control" id="gameplay" name="gameplay" v-model="reviewData.gameplay"
                        type="number" min="0" max="5">
                    <h4 class="mb-0 mt-1 ps-1">/5</h4>
                </span>
            </div>
            <div class="col-md-2">
                <label for="graphics">Graphics</label>
                <span class="d-flex">
                    <input class="form-control" id="graphics" name="graphics" v-model="reviewData.graphics"
                        type="number" min="0" max="5">
                    <h4 class="mb-0 mt-1 ps-1">/5</h4>
                </span>
            </div>
            <div class="col-md-2">
                <label for="replay-ability">Replay-ability</label>
                <span class="d-flex">
                    <input class="form-control" id="replay-ability" name="replay-ability"
                        v-model="reviewData.replayAbility" type="number" min="0" max="5">
                    <h4 class="mb-0 mt-1 ps-1">/5</h4>
                </span>
            </div>
            <div class="col-md-2">
                <h5>
                    Total Score
                </h5>
                <h5>{{ totalScore }}/5</h5>
            </div>
            <div class="col-12">
                <!-- <quill v-model="reviewData.body" /> -->
                <textarea class="form-control w-100 mt-4" v-model="reviewData.body" name="review-body"
                    id="review-body"></textarea>
            </div>
            <div class="col-12 text-end">
                <button type="submit" class="btn btn-success mt-5">
                    Submit
                </button>
            </div>
        </form>
        <section class="row">
            <div class="col-12">
                <h3>
                    Reviews
                </h3>
                <div v-for="review in reviews" class="col-12">
                    <div class="bg-white text-black review-box mb-4">
                        <span class="d-flex">
                            <img class="review-image mt-3 ms-3" :src="review.creator.picture" alt="profile image">
                            <H3 class="mt-3">{{ review.creator.name }}'s Review:</H3>
                        </span>
                        <span class="d-flex justify-content-evenly">
                            <span class="text-center">
                                <h5>Story</h5>
                                <h5>{{ review.story }}/5</h5>
                            </span>
                            <span class="text-center">
                                <h5>Gameplay</h5>
                                <h5>{{ review.gameplay }}/5</h5>
                            </span>
                            <span class="text-center">
                                <h5>Graphics</h5>
                                <h5>{{ review.graphics }}/5</h5>
                            </span>
                            <span class="text-center">
                                <h5>Replay-ability</h5>
                                <h5>{{ review.replayAbility }}/5</h5>
                            </span>
                            <span class="text-center">
                                <h5>Total Score</h5>
                                <h5>{{ (review.story + review.gameplay + review.graphics + review.replayAbility) / 4
                                }}/5
                                </h5>
                            </span>
                        </span>
                        <p class="text-black ms-5 p-3">{{ review.body }}</p>
                        <div v-if="account" class="d-flex justify-content-between">
                            <span>
                                <button @click="like(review.id)" class="btn">
                                    <i class="mdi mdi-thumb-up"></i> {{ review.likes.length }}
                                </button>
                                <button @click="disLike(review.id)" class="btn">
                                    <i class="mdi mdi-thumb-down"></i> {{ review.dislikes.length }}
                                </button>
                            </span>
                            <button v-if="account.id == review.creatorId" @click="deleteReview(review.id)"
                                class="btn btn-outline-danger me-3 mb-3"><i class="mdi mdi-trash-can"></i>
                                DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<style lang="scss" scoped>
.background-art {
    min-height: 500px;
    background-position: center;
    background-size: cover;

}

.cover-art {
    position: relative;
    width: 350px;
    height: 200px;
    background-size: cover;
    background-position: center;
    aspect-ratio: 1/1;
    border: solid 3px black;
    box-shadow: -5px -5px 10px black;
}

.positioned-row {
    position: absolute;
    bottom: -100px;
}

.pill-buttons {
    flex-direction: column;
}

.game-details-box {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 25px;
}

.genre-pill {
    background-color: #1500B4;
    border-radius: 10px;
    padding: 0px 4px;
}

main {
    background-color: rgb(50, 50, 50);
}

.text-box {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 25px;
    padding: 5px;

}

.box-width {
    width: 46%;
}

.score-pic {
    height: 75px;
    object-fit: cover;
    object-position: center;


}

.profile-pic {
    height: 75px;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1/1;
    border-radius: 50%;
}

.fav-button-pos {
    position: absolute;
    top: -27px;
    left: -23px;
    text-shadow: 2px 2px 5px black;
}

.fav-button:hover {
    color: #ffc107 !important;
}

.form-control {
    width: 50px;
}

textarea {
    height: 200px;
}

.review-image {
    aspect-ratio: 1/1;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

.review-box {
    border-radius: var(--bs-border-radius);
}
</style>