<template>
<div class="hello">
  <h1 v-cloak>{{msg}}</h1>
  <h2 v-cloak>{{items}}</h1>
</div>
</template>

<script>
export default {
  name: 'hello0',
  data() {
    return {
      msg: 'hello0',
      items: "aaaaaaa"
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
