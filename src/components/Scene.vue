<template>
  <div id="scene"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {

    onMounted(() => {
      const THING = window.THING;
      const scene = new THING.App({
        container: 'scene',
        url: "/campus/sport",
        complete() {
          console.log('campus loaded.')
        }
      })
    })
    return {}
  }
})
</script>

<style lang="scss">
#scene {
  width: 100%;
  min-height: 500px;
  canvas {
    left: 0;
  }
}
</style>