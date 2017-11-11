<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="AlertToast">点击弹出toast</button>
  </div>
</template>

<script>
import Toast from './components/Toast/toast.vue'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {
    AlertToast() {
      // this.toast({message: '看到我了吧'})
      // this.toast('看到我了吧')
      this.toast({message:'看到我了吧', duration: 2000})
    }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
