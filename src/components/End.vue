<template>
<div class="end">
  <h1 v-cloak>{{msg}}</h1>
  <h1 v-cloak>{{msg}}</h1>
  <h1 v-cloak>{{msg}}</h1>
  <h1 v-cloak>{{msg}}</h1>
  <h1 v-cloak>{{msg}}</h1>
</div>
</template>

<script>
export default {
  name: 'end',
  data() {
    return {
      msg: 'end',
    }
  },

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
