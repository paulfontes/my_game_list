<script setup>
import { gamesService } from '@/services/GamesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

onMounted(() =>
  getGames()
)

async function getGames() {
  try {
    await gamesService.getGames()
  }
  catch (error) {
    Pop.error(error);
    logger.log('Failed to get games!', error)
  }
}


</script>

<template>
  <main class="container-fluid bg-black ">
    <section class="row position-relative back-img">
      <div class="col-12 text-center text-white mt-5 text-shadow">
        <h1 class="height mb-0">ALL GAMES</h1>
      </div>
      <div class="col-12 text-center text-white filter-shadow position-absolute">
        <span><i class="mdi mdi-filter-variant"></i></span>
      </div>
      <div class="col-12 text-center text-white d-flex justify-content-center top-page-buttons">
        <span class="d-flex gap-5">
          <img class="page-button-left img-fluid" src="../assets/img/page button.png" alt="first page button">
          <img class="page-button-left img-fluid" src="../assets/img/page button.png" alt="previous page button">
          <p class="mt-2">Page 1 of 99</p>
          <img class="page-button-right img-fluid" src="../assets/img/page button.png" alt="next page button">
          <img class="page-button-right img-fluid" src="../assets/img/page button.png" alt="last page button">
        </span>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
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
  top: 150px;
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
</style>
