<script setup>
import { AppState } from '@/AppState.js';
import { gamesService } from '@/services/GamesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const activeGame = computed(() => AppState.activeGame)
const account = computed(() => AppState.account)

const route = useRoute()

onMounted(() =>
    getActiveGame()
)

async function getActiveGame() {
    try {
        await gamesService.getActiveGame(route.params.gameId)
    }
    catch (error) {
        Pop.error('Failed to Load Game!', error);
        logger.log('Failed to Load Game!', error)
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
                <img class="cover-art" :src="activeGame.coverArt" alt="game cover art">
            </div>
            <div class="col-md-3 text-white d-flex pill-buttons justify-content-end">
                <span class="d-flex justify-content-between text-box mb-2">
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
                    <img v-if="activeGame.ageRating.name == null"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ESRB_2013_Rating_Pending.svg/120px-ESRB_2013_Rating_Pending.svg.png"
                        alt="Rating Pending">
                    <img v-if="activeGame.ageRating.name == 'Rating Pending'"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ESRB_2013_Rating_Pending.svg/120px-ESRB_2013_Rating_Pending.svg.png"
                        alt="Rating Pending">
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
                <h5>{{ activeGame.ageRating.name }}</h5>
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
                </div>
                <div class="bg-white w-50" v-else>
                    <p><i class="mdi mdi-star"></i></p>
                    <img v-if="account" :src="account.picture" alt="">
                    <img v-else src="../assets/img/blank-profile-pic.png" alt="user rating" class="score-pic">
                    <p class="mt-2">Your Score goes here</p>
                </div>
            </div>
            <div class="col-md-4 text-center text-black d-flex justify-content-center">
                <div class="bg-white w-50 ">
                    <p>{{ activeGame.siteRating }}/5</p>
                    <img src="../assets/img/game_site_logo.png" alt="MGL rating" class="MGL score-pic">
                    <h5 class="mt-2">MGL Score</h5>
                </div>
            </div>
            <div class="col-md-4 text-center text-black d-flex justify-content-center">
                <div class="bg-white w-50 ">
                    <p>{{ activeGame.metaCritic }}</p>
                    <img src="" alt="MetaCritic rating" class="score-pic">
                    <h5 class="mt-2">MGL Score</h5>
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
    width: 350px;
    height: 200px;
    object-fit: cover;
    object-position: center;
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
</style>