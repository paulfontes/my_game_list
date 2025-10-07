<script setup>
import { computed, ref } from 'vue';
import { AppState } from '../AppState.js';

const account = computed(() => AppState.account)


const formData = ref({

  name: account.value.name,
  picture: account.value.picture,
  bio: account.value.bio,
  bannerImg: account.value.bannerImg

})








</script>

<template>
  <main class="container-fluid back-img">
    <section class="row justify-content-center pt-5">
      <div class="col-4 text-white">
        <h1>{{ account.name }}'s Account</h1>
      </div>
      <div class="col-4">
        <img :src="account.picture" class="profile-pic" alt="">
      </div>
      <div class="col-8 mt-4 text-white">
        <form action="">
          <span class="d-flex gap-5">
            <div class="w-50">
              <label for="account-name">Username:</label>
              <input id="account-name" name="account-name" v-model="formData.name" type="text" class="form-control">
            </div>
            <div class="w-50">
              <label for="account-picture"><span class="mdi mdi-arrow-up-bold-outline"></span> Profile Picture:</label>
              <input id="account-picture" name="account-picture" v-model="formData.picture" type="text"
                class="form-control">
            </div>
          </span>
          <div class="mt-4">
            <label for="account-bio">Profile Bio:</label>
            <textarea id="account-bio" name="account-bio" v-model="formData.bio"
              class="form-control bio-box"></textarea>
          </div>
          <div class="mt-4">
            <label for="account-banner">Profile Banner:</label>
            <input id="account-banner" name="account-banner" v-model="formData.bannerImg" type="text"
              class="form-control">
          </div>
          <div class="text-end">
            <button @submit.prevent="" class="btn btn-success mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
      <section class="row">
        <div class="col text-center text-white">
          <h5><span class="mdi mdi-arrow-down-bold-outline"></span> Banner Preview <span
              class="mdi mdi-arrow-down-bold-outline"></span></h5>
          <img class="banner-img my-4"
            src="https://www.altavia.hu/wp-content/uploads/2020/11/Hero-Banner-Placeholder-Light-1024x480-1.png" alt="">
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped lang="scss">
.profile-pic {
  border-radius: 50%;
}

.back-img {
  min-height: 500px;
  background-image: linear-gradient(to bottom, rgba(2, 2, 2, 0.3)55%, rgb(0, 0, 0)), url(../assets/img/green-background.png);
  background-position: top;
  background-size: cover;
}

.bio-box {
  height: 200px;
}

.banner-img {
  border-radius: 20px;
  height: 200px;
  width: 67%;
  object-fit: cover;
}
</style>
