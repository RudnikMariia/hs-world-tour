<template>
  <div id="app">
    <BestPlayers />
  </div>
</template>

<script>

import BestPlayers from "./components/BestPlayers";
export default {
  name: 'App',
  components: {
    BestPlayers
  },
}
</script>

<style lang="scss">
h1 {
  margin: 0 auto;
  text-align: center;
}
#app {
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
</style>
