<template>
  <div id="app">
    <h1>VUE markdown demo</h1>
    <p>based on vue vue-resouse</p>
    <markDown/>
  </div>
</template>

<script>
import markDown from './components/markDown'

export default {
  name: 'App',
  components: {
    markDown
  }
}
</script>

<style>
#app {
  height:100%;
}
</style>
