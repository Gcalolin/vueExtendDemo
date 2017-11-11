import Vue from 'vue'
import Toast from './toast.vue'

const ToastConstructor = Vue.extend(Toast)

/*移除dom节点*/
let removeDom = exent => {
  event.target.parentNode.removeChild(event.target)
}

/*在ToastConstructor的原型上添加close方法*/
ToastConstructor.prototype.close = function() {
  /* 这里的this对象指的是ToastConstructor */
  this.visiable = false
  /*transition 在CSS完成过渡后触发*/
  /*this.$el Vue实例挂载的元素节点*/
  this.$el.addEventListener('transitioned', removeDom)
}

const toast = (options = {}) => {
  /*创建实例 并挂在到动态生成的div元素上*/
  let instance = new ToastConstructor().$mount(document.createElement('div'))
  let duration = options.duration || 1500
  instance.message = typeof options==='string'? options : options.message
  /*在文档流中添加该元素dom节点*/
  document.body.appendChild(instance.$el)
  instance.visiable = true

  /*在duration秒后移除dom节点*/
  Vue.nextTick(() => {
    instance.timer = setTimeout(() => {
      instance.close()
    }, duration)
  })
  return instance
}

export default toast