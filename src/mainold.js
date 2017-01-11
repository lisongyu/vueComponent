// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// 注册
var Child = {
  props: ['message'],
  template: '<span>{{ message }}</span>'

}

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {'my-component': Child}
//
// })
  window.vm=new Vue({
  el: '#app',
  components: {'my-component': Child},
  template: '<my-component :message="message"/>',
  data: function () {
    return {
      message: 2
    }
  }

})

// new Vue({
//   el: '#app',
//   components: {'my-component': Child}
//
// })
