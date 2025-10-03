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
            hello
        </div>
    </div>
</template>


<style lang="scss" scoped>
.cover-img {}

.card-bg {
    background-color: #222b59;
    opacity: 63%;
    color: white;
}
</style>