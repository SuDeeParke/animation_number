<template>
  <Box :width="48" :title="'最高分'" :num="temp.grade[0].chinese"></Box>
  <Box :width="48" :title="'最低分'" :num="temp.grade[0].math"></Box>
  <Box :width="100" :title="'平均分'" :num="temp.grade[0].english"></Box>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { getStudentInfo } from '../api/api'
import Box from '../layout/Box.vue';
let temp = reactive({
  address: "华北",
  avatar: "http://dummyimage.com/720x300",
  birthday: "1983-02-28",
  email: "h.wkifc@eegw.ba",
  grade: [{
    biology: 25,
    chemistry: 50,
    chinese: 34,
    english: 36,
    math: 75,
    physics: 96,
    polity: 48
  }],
  name: "Jose Young",
});
async function getData() {
  temp = await getStudentInfo().then((res) => {
    return res.data
  })
}
getData()

</script>

<style scoped>
</style>