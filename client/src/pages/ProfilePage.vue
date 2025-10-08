<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';



const account = computed(() => AppState.account)



</script>


<template>
    <main class="container-fluid bg-black">
        <section v-if="account" class="row redish-pic justify-content-evenly text-white">
            <div class="col-md-3 text-center">
                <section class="row">
                    <div class="col-12">
                        <img class="profile-img mt-5" :src="account.picture" alt="profile pic">
                    </div>
                    <div class="col-12">
                        <button class="btn btn-info mt-2">Add Friend <i class="mdi mdi-plus"></i></button>
                    </div>
                    <div class="col-12">
                        <h4>{{ account.name }}</h4>
                    </div>
                    <div v-if="account.favGameName" class="">
                        <p>Favorite Game: {{ account.favGameName }}</p>
                    </div>
                    <div v-else>
                        <p>No Favorite Game</p>
                    </div>
                    <div class="col-12 text-start">
                        <h5>Game Stats:</h5>
                    </div>
                    <div class="col-6">
                        <p>Liked:</p>
                    </div>
                    <div class="col-6">
                        Reviewed:
                    </div>
                    <div class="col-6">
                        <p>PLayed:</p>
                    </div>
                    <div class="col-6">
                        Wishlisted:
                    </div>
                </section>
            </div>
            <div class="col-md-7">
                <img class="banner-img mt-5" :src="account.bannerImg" alt="banner pic">
            </div>
        </section>
    </main>
</template>


<style lang="scss" scoped>
.redish-pic {
    background-image: linear-gradient(to bottom, rgba(2, 2, 2, 0.3)55%, rgb(0, 0, 0)), url(../assets/img/red-bg.png);
    height: 600px;
    background-position: center;
    background-size: cover;
}

.profile-img {
    border-radius: 50%;
    aspect-ratio: 1/1;
    height: 100px;
}

.banner-img {
    border-radius: 20px;
    height: 200px;
    width: 100%;
    object-fit: cover;
}
</style>