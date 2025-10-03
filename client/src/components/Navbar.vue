<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-bg  p-0">
    <div class="container-fluid navbar-color py-2">
      <section class="row justify-content-evenly">
        <div class="col-md-3">
          <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center">
            <img class="navbar-brand" alt="logo" src="\src\assets\img\game_site_logo.png" height="55" />
            <b class="fs-2 navbar-text">My Game List</b>
          </RouterLink>
        </div>
        <div class="col-md-4">
          <!-- collapse button -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="mdi mdi-menu text-light"></span>
          </button>
          <!-- collapsing menu -->
          <div class="collapse navbar-collapse pt-3" id="navbar-links">
            <ul class="navbar-nav">
              <li>
                <RouterLink :to="{ name: 'Home' }" class="btn nav-links selectable">
                  <h4>
                    Home
                  </h4>
                </RouterLink>
                <RouterLink :to="{ name: 'About' }" class="btn nav-links selectable">
                  <h4>
                    Profile
                  </h4>
                </RouterLink>
                <RouterLink :to="{ name: 'About' }" class="btn nav-links selectable">
                  <h4>
                    About
                  </h4>
                </RouterLink>
              </li>
            </ul>
          </div>
          <!-- LOGIN COMPONENT HERE -->
        </div>
        <div class="col-md-4 pt-3">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div class="col-md-1 pt-3">
          <Login />
        </div>
      </section>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.navbar {
  box-shadow: 2px 2px 4px black;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-bg {
  background-image: url(../assets/img/nav-bar-img.jpg);
  background-position: center;
  background-size: cover;
}

.navbar-color {
  background-color: rgba($color: #A6A2B3, $alpha: .7);
  display: unset;
}

.navbar-text {
  color: black;
  font-family: "Jaro";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.nav-links {
  color: black;
  font-family: "Jaro";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
