// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import buttonCounter from './components/button'
// 注册



/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {'my-component': Child}
//
// })
  window.vm=new Vue({
  el: '#app',
  components: {'button-counter': buttonCounter},
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }

})

// new Vue({
//   el: '#app',
//   components: {'my-component': Child}
//
// })
