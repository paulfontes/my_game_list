<script setup>
import { AppState } from '@/AppState.js';
import GameCard from '@/components/GameCard.vue';
import { gamesService } from '@/services/GamesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';



const games = computed(() => AppState.games)
const nextPage = computed(() => AppState.nextPage)
const previousPage = computed(() => AppState.previousPage)
const totalPages = computed(() => AppState.totalPages)
const currentPage = computed(() => AppState.currentPage)

onMounted(() =>
  getGames()
)

async function getGames() {
  try {
    await gamesService.getGames()
    logger.log(AppState.games)
  }
  catch (error) {
    Pop.error(error);
    logger.log('Failed to get games!', error)
  }
}

async function changePage(pageNumber, num) {
  try {
    await gamesService.changePage(pageNumber, num)
  }
  catch (error) {
    Pop.error(error);
  }
}


</script>

<template>
  <main class="container-fluid bg-black  position-relative ">
    <section class="row position-relative back-img">
      <div class="col-12 text-center text-white mt-5 text-shadow">
        <h1 class="height mb-0">ALL GAMES</h1>
      </div>
      <div class="col-12 text-center text-white filter-shadow filter-position">
        <span><i class="mdi mdi-filter-variant"></i></span>
      </div>
      <div class="col-12 text-center text-white d-flex justify-content-center align-items-center top-page-buttons ">
        <span class="mobile-view-page-buttons gap-5">
          <button :disabled="currentPage == 1" class="btn page-button-disabled">
            <img @click="changePage(-10000)" type="button" class="page-button-left img-fluid"
              src="../assets/img/page button.png" alt="first page button">
          </button>
          <button :disabled="previousPage == null" class="btn page-button-disabled">
            <img @click="changePage(previousPage, -1)" type="button" class="page-button-left img-fluid"
              src="../assets/img/page button.png" alt="previous page button">
          </button>
          <p class="mt-2">Page {{ currentPage }} of {{ totalPages }} </p>
          <button :disabled="currentPage == totalPages" class="btn page-button-disabled">
            <img @click="changePage(nextPage, 1)" type="button" class="page-button-right img-fluid"
              src="../assets/img/page button.png" alt="next page button">
          </button>
          <button :disabled="currentPage == totalPages" class="btn page-button-disabled">
            <img @click="changePage(nextPage, 10000)" type="button" class="page-button-right img-fluid"
              src="../assets/img/page button.png" alt="last page button">
          </button>
        </span>
      </div>
    </section>
    <section class="row game-card">
      <div v-for="game in games" :key="game.id" class="col-xl-3 col-lg-4 g-5 game-card-col">
        <RouterLink :to="{ name: 'GameDetails', params: { gameId: game.id } }">
          <GameCard :gameProp="game" />
        </RouterLink>
      </div>
    </section>
    <section class="row background-color page-button-disabled">
      <div class="col-12 text-center text-white d-flex justify-content-center align-items-center top-page-buttons">
        <button :disabled="currentPage == 1" class="btn page-button-disabled">
          <img @click="changePage(-10000)" type="button" class="page-button-left img-fluid"
            src="../assets/img/page button.png" alt="first page button">
        </button>
        <button :disabled="previousPage == null" class="btn page-button-disabled">
          <img @click="changePage(previousPage, -1)" type="button" class="page-button-left img-fluid"
            src="../assets/img/page button.png" alt="previous page button">
        </button>
        <p class="mt-2">Page {{ currentPage }} of {{ totalPages }} </p>
        <button :disabled="currentPage == totalPages" class="btn page-button-disabled">
          <img @click="changePage(nextPage, 1)" type="button" class="page-button-right img-fluid"
            src="../assets/img/page button.png" alt="next page button">
        </button>
        <button :disabled="currentPage == totalPages" class="btn page-button-disabled">
          <img @click="changePage(nextPage, 10000)" type="button" class="page-button-right img-fluid"
            src="../assets/img/page button.png" alt="last page button">
        </button>
      </div>
    </section>
  </main>
</template>


<style scoped lang="scss">
.game-card-col {}

.page-button-disabled {
  border: none;
}

.background-color {
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-grow: 1;
}

main {
  min-height: 100vh;
}

.back-img {
  min-height: 500px;
  background-image: linear-gradient(to bottom, rgba(2, 2, 2, 0.3)55%, rgb(0, 0, 0)), url(../assets/img/midnight-blue-light-abstract-dzy61lzyxpdczdbm_1.png);


}

.text-shadow {
  text-shadow: 4px 4px 1px black;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.height {
  font-size: 70px;
}

.filter-shadow {
  font-size: 60px;
  text-shadow: 4px 4px 1px rgb(0, 0, 0);

}

.filter-shadow:hover {
  cursor: pointer;
}

.page-button-left {
  rotate: 270deg;
  max-height: 40px;
}

.page-button-right {
  rotate: 90deg;
  max-height: 40px;
}

.top-page-buttons {
  top: 100px;
  font-family: "Inknut Antiqua", serif;
  font-weight: 300;
  font-style: normal;
}

a {
  text-decoration: unset;
}

@media(max-width:584px) {
  .page-button-left {
    margin: 20px 40px;
  }

  .page-button-right {
    margin: 20px 40px;
  }
}

@media(min-width: 584px) {
  .game-card {
    padding: 0px 100px;
  }

  .mobile-view-page-buttons {
    display: flex;
  }

  .filter-position {
    position: absolute;
    top: 150px;
  }
}

@media(min-width:592px) {
  .game-card {}

}
</style>
