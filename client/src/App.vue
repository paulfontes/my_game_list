<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <header class="bg-black">
    <Navbar />
  </header>
  <main class="">
    <RouterView />
  </main>
  <footer class=" text-center">

  </footer>
</template>

<style lang="scss">
main {
  background-color: rgb(50, 50, 50);
}
</style>
