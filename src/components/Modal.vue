<template>
  <div class="modal">
    <button @click="modalOpen = true">
      <span>{{ name }}</span>
    </button>
  </div>
  <teleport to="body">
    <transition name="modal">
      <div class="mask" v-show="modalOpen">
        <div class="modal-content" :class="{ 'modal-content-active': modalOpen }">
          <button @click="modalOpen = false">
            <span>X</span>
          </button>
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: "打开模态框"
    }
  },
  setup() {
    const modalOpen = ref(false)
    watch(modalOpen, (newVal) => {
      if (newVal) {
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
      }
      else {
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
      }
    })
    return {
      modalOpen
    }
  }
})
</script>

<style  lang="scss">
@mixin buttonStyle {
  padding: 2px 8px;
  border: none;
  background-color: #fff;
  font-size: 13px;
  line-height: 16px;
  transition: all 0.3s;
  border-radius: 5px;
  transition: all 0.2s;
  > span {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 4px;
  }
  &:hover {
    background-color: #eee;
  }
}
.modal {
  box-sizing: border-box;
  > button {
    @include buttonStyle;
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #666, $alpha: 0.3);

  .modal-content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba($color: #333, $alpha: 0.2);
    width: 80%;
    height: 20%;
    overflow: hidden;
    transition: all 0.1s;
    > button {
      position: absolute;
      right: 10px;
      top: 10px;
      @include buttonStyle();
      font-family: "CJGaoDeGuo-MH";
    }
  }
  .modal-content-active {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes modalMaskAnim {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal-enter-active {
  animation: modalMaskAnim 0.2s;
}
.modal-leave-active {
  animation: modalMaskAnim 0.2s reverse;
}
</style>