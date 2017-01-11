<template>
  <button v-on:click="increment">{{ counter }}</button>
</template>

<script>
module.exports= {
  name:'botton-counter',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
