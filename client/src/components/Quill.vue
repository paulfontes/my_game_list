<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from 'vue';


const data = ref('')

</script>


<template>


    <QuillEditor v-model:content="data" theme="snow" />
</template>


<style lang="scss" scoped></style>