// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Slick from 'vue-slick';
// 注册



/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {'my-component': Child}
//
// })
  window.vm=new Vue({
  el: '#app',
  components: { Slick },

    data() {
        return {
            slickOptions: {
              infinite: true

                // Any other options that can be got from plugin documentation
            },
        };
    },

    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },
    },


})

// new Vue({
//   el: '#app',
//   components: {'my-component': Child}
//
// })
