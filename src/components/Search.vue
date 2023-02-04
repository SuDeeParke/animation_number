<template>
  <div class="search" :class="{ actived: active }">
    <input type="text" v-model="inpulVal" @focus="active = 1" @blur="active = 0" />
    <button @click="$emit('search', inpulVal)">
      <span class="iconfont icon-sousuo"></span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    disable: {
      type: Boolean
    }
  },
  emits: {
    'search': (d: any) => {
      if (d !== '') {
        return true
      } else {
        console.error('error')
        return false
      }
    }
  },
  setup(props, context) {
    const active = ref(0);
    const inpulVal = ref('');
    onMounted(() => {
      // console.log(context.attrs)
    })
    return {
      inpulVal,
      active
    }
  }
})
</script>

<style scoped lang="scss">
@import "../assets/fonts/font.scss";
.search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 2rem;
  border: 2px solid #eee;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1.1rem;
    line-height: 1.3rem;
    padding: 0 15px;
    color: #232323;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  button {
    width: 2.5rem;
    height: 100%;

    border: 0;
    background-color: #fff;
    cursor: pointer;
  }
}

.actived {
  border: 2px solid #6d6d6d;
  box-shadow: 0 2px 10px rgba($color: #323232, $alpha: 0.2);
}
</style>