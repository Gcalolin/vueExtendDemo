# vue-extend-demo

> 全局弹出框
> 利用Vue.extend(options)
> 使用基础Vue构造器 创建一个“子类”，参数是一个包含组件选项的对象
> 
> 这里写了一个Toast组件，
> 然后再在components/Toast/index.js中将弹窗封装成一个方法,输出
> 在main.js中将方法挂在在Vue上
> 在文件中调用 this.toast('toast message')
> 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
