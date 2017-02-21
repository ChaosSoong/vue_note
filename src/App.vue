<template>
  <div id="app">
    <div class="">
      <router-link to="/Hello">Hello</router-link>
    </div>
    <div class="">
      <router-link to="/Hello0">Hello0</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Hello0 from './components/Hello0'
export default {
  name: 'app',
  components: {
    Hello0,
    Hello
  }
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
