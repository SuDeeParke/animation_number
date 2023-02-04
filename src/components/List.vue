<template>
  <div>
    <ul class="items">
      <li class="item">
        <div class="title"></div>
        <div class="info"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.items {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: rgba($color: #000000, $alpha: 0);
  transition: all 0.4s;
}
.item > div {
  color: #fff;
}
.item:hover {
  background-color: rgba($color: #ffffff, $alpha: 0.2);
  border-radius: 10px;
}
</style>