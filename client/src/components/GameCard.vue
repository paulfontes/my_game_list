<script setup>
import { Game } from '@/models/Game.js';


const props = defineProps({
    gameProp: { type: Game, required: true }
})

</script>


<template>
    <div class="card card-bg p-2">
        <div class="img-top-card">
            <img :src="gameProp.coverArt" alt="" class="img-fluid cover-img">
        </div>
        <div class="card-body">
            <h5>{{ gameProp.title }}</h5>
            <div v-for="platform in gameProp.platforms" :key="platform.id" class="d-flex justify-content-apart">
                <p>{{ platform.platform.name }}</p>
            </div>
            <p><i class="mdi mdi-star text-yellow"></i> {{ gameProp.siteRating }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.cover-img {}

.card-bg {
    background-color: rgba(#222b59, 0.63);
    color: white;
}
</style>