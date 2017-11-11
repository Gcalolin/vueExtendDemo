<template>
  <transition name="fade">
    <div class="toast bottom" v-show="visiable">
      <i>{{message}}</i>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        visiable: false,
        message: '',
        position: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    word-wrap: break-word;
    padding: 10px 20px;
    text-align: center;
    z-index: 9999;
    font-size: px2rem(13);
    max-width: 80%;
    color: #fff;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
  .toast.middle {
    top: 50%;
  }
  .toast.top {
    top: 10%;
  }
  .toast.bottom {
    top: 90%;
  }
  .fade-enter-active,
  .fade-leave-active {
    opacity: 0
    /*transition: transform .5s*/
  }
  .fade-enter,
  .fade-leave-active {
    transition: opacity .5s
    /*opacity: 0;*/
    /*transition: opacity(0);*/
    /*<!--transform: translate(-50%, -50%) scale(0);-->*/
  }
</style>
