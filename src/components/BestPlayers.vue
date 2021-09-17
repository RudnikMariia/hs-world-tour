<template>
  <div class="best-players wrapper">
    <BestPlayerList />
  </div>
</template>
<script>
import BestPlayerList from "./player-list/BestPlayerList";
export default {
name: "BestPlayers",
  components: {BestPlayerList}
}
</script>

<style scoped lang="scss">
.best-players {
  background: #957FEF;
}
</style>
