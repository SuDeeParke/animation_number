<template>
  <section class="box" :style="{ width: width + '%' }">
    <div class="title">{{ title }}</div>
    <div class="number">{{ anim_num }}</div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch, toRefs } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 48
    },
    title: {
      type: String,
      default: "科目"
    },
    num: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const { num } = toRefs(props)
    const anim_num = ref(0);
    onMounted(() => {
      transNum(props.num, 0)
    })
    watch(num, (newVal, oldVal) => {
      transNum(newVal, oldVal)
    })

    function transNum(newVal: number, oldVal: number) {
      let step: number = newVal / (newVal / 2);
      let timer;
      if (newVal > oldVal) {
        let timer = setInterval(() => {
          if (anim_num.value + step < newVal) {
            anim_num.value += step
            if (anim_num.value > newVal / 2 && step > 1) {
              step++
            }
          }
          else {
            anim_num.value = newVal
            clearInterval(timer)
          }
        }, 20)
      }
      else if (newVal < oldVal) {
        step = -step
        let timer = setInterval(() => {
          if (anim_num.value + step > newVal) {
            anim_num.value += step
            if (anim_num.value < oldVal / 2) {
              step -= 1
            }
          }
          else {
            anim_num.value = newVal
            clearInterval(timer)
          }
        }, 20)
      }

    }
    return {
      anim_num
    }
  }
})
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  padding: 0;
}
.box {
  padding: 10px;
  border-radius: 15px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    background: transparent;
    top: 50%; //设置宽高仅仅设置上下左右边距是为了让系统自动定位。
    bottom: 1px;
    left: 10px;
    right: 10px;
    z-index: -1; //将副阴影置于主阴影下
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    border-radius: 26%;
  }

  .title {
    color: rgb(143, 180, 248);
    font-size: 5vw;
    text-align: left;
    margin-bottom: 10%;
    font-weight: normal;
  }
  .number {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 23vw;
    font-weight: bolder;
    font-family: "CJGaoDeGuo-MH";
  }
}
</style>