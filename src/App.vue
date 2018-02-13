<template>
  <div id="app">
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
