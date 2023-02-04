<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, reactive } from 'vue'
import Box from './layout/Box.vue';
import Search from './components/Search.vue';
import GradeCard from './view/GradeCard.vue';
import Modal from './components/Modal.vue';

const grade = reactive({
  Chinese: 96,
  Math: 98,
  English: 77,
})

function getSearchResult(e: any) {
  console.log(e)
}
</script>

<template>
  <div class="row">
    <Search @search="getSearchResult" data-status="start" @double-click="console.log(1)"></Search>
  </div>
  <div class="row">
    <GradeCard></GradeCard>
    <Modal></Modal>
  </div>
</template>

<style lang="scss">
@import "./assets/fonts/font.scss";
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px;
  box-sizing: border-box;
}
.row {
  // position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 4vw;
}
</style>
