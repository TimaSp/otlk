<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      info: null,
      contNum: '',
      checked: []
    }
  },
  mounted() { 

  },

  methods: {
  }
}
</script>

<style>
  body {
    height: 100vh;
  }
  #app {
    font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>
