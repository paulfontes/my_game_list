<script setup>
import { AppState } from '@/AppState.js';
import { gamesService } from '@/services/GamesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const activeGame = computed(() => AppState.activeGame)

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
        <section class="row positioned-row">
            <div class="col-md-5">
                <img class="cover-art" :src="activeGame.coverArt" alt="game cover art">
            </div>
            <div class="col-md-3 text-white">
                <span class="d-flex justify-content-between text-box">
                    <h5 class="m-0">Write A Review </h5>
                    <h5 class="m-0"><i class="mdi mdi-pen"></i></h5>
                </span>
                <span class="d-flex justify-content-between text-box">
                    <h5>Wishlist</h5>
                    <i class="mdi mdi-plus"></i>
                </span>
                <span class="d-flex justify-content-between text-box">
                    <h5>Mark as Played </h5>
                    <i class="mdi mdi-controller fs-4"></i>
                </span>
                <h5>Like <i class="mdi mdi-heart"></i></h5>
            </div>
            <div class="col-md-4 text-white game-details-box">
                <span class="d-flex justify-content-between">
                    <h4>{{ activeGame.title }}</h4>
                    <h5>{{ activeGame.genre[0].name }}</h5>
                </span>
                <span class="d-flex justify-content-between">
                    <h4>{{ activeGame.siteRating }}</h4>
                    <p>rating here</p>
                    <!-- <img :src="" alt=""> -->
                </span>
                <h4>{{ activeGame.userRating }}</h4>
                <h4>{{ activeGame.releaseDate }}</h4>
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

}

.positioned-row {
    position: absolute;
    bottom: -100px;
}

.game-details-box {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 25px;
}

main {
    background-color: rgb(50, 50, 50);
}

.text-box {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 25px;
    padding: 5px;

}
</style>