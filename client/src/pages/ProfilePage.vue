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
                    <div class="profile-box mt-5 row">
                        <div class="col-12">
                            <img class="profile-img mt-3" :src="account.picture" alt="profile pic">
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
                        <div class="col-12 text-start">
                            <h6>Bio:</h6>
                            <p>{{ account.bio }}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-md-7">
                <section class="row justify-content-between">
                    <div class="col-12">
                        <img class="banner-img mt-5" :src="account.bannerImg" alt="banner pic">
                    </div>
                    <div class="col-md-3">
                        <h3 class="text-center mt-3">Fav Game</h3>
                        <div class="fav-game-box">
                            <img v-if="account.favGameImg" :src="account.favGameImg" alt="game img">
                        </div>
                    </div>
                    <div class="col-md-7 mt-4">
                        <div class="fav-game-artwork">
                            <img v-if="account.favGameName" :src="account.favGameArtwork" alt="game art">
                        </div>
                    </div>
                </section>

            </div>
        </section>
        <section class="row bg-black text-white justify-content-evenly">
            <div class="col-md-3 friends-list-box ">
                <h5>Friends List</h5>

            </div>
            <div class="col-md-7">
                <h4>Interacted Games:</h4>
                <div class="fav">

                </div>
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

.profile-box {
    background-color: rgba(2, 2, 2, 0.8);
    border-radius: 20px;
}

.fav-game-box {
    background-color: rgba(255, 253, 253, 0.8);
    height: 250px;
}

.fav-game-artwork {
    background-color: rgba(250, 249, 249, 0.8);
    height: 300px;
    border-radius: 10px;
}

.friends-list-box {
    background-color: rgba(78, 78, 78, 0.8);
    border-radius: 20px;
}
</style>