<template>
  <div >
    <img src="./assets/logo.png">
    <table>
      <tbody>
            <my-row></my-row>
      </tbody>

    </table>
  </div>
</template>

<script>
import trContent from './components/trContent'

export default {
  name: 'app',
    components: {'my-row': trContent}
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
