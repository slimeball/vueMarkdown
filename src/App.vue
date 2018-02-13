<template>
  <div id="app">
    <div class="css-top">
      <h1>VUE markdown demo</h1>
      <p>based on vue vue-resouse</p>
    </div>
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
.css-top{
  margin: 0 10px;
}
</style>
