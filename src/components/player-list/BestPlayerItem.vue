<template>
<li class="bp-item">
  <span>{{index + 1}}</span>
  <span class="bp-item__nick">
    {{player.nick}}
    <button
        class="bp-item__statistic"
        @click="openStatistic(player.id)"
    >статистика</button>
  </span>
  <span class="bp-item__sumOfTournaments">{{player.sumOfTournaments}}</span>
  <span class="bp-item__top-eight">{{player.sumOfTop8}}</span>
  <span class="bp-item__win">{{player.win}}</span>
  <span class="bp-item__points">{{player.points}}</span>
</li>
</template>

<script>
export default {
name: "BestPlayerItem",
  props: {
    player : Object,
    index: Number
  },
  methods : {
    openStatistic(id){
      this.$emit("openStatistic", id)
    }
  }
}
</script>

<style scoped lang="scss">
.bp-item {
  display: flex;
  justify-content: space-between;
  background: #EBF2FA;
  padding: 22px 28px;
  margin-bottom: 40px;
  color: #413178;
  border-radius: 20px;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  &:hover {
    -webkit-box-shadow: 2px 13px 29px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 2px 13px 29px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 2px 13px 29px 0px rgba(34, 60, 80, 0.2);
  }
  &__statistic {
    background: #a7d4fc;
    color: #2c3e50;
    font-family: $main-font;
    font-weight: bold;
    border: #2c3e50 1px solid;
    border-radius: 10px;
    &:hover {
      background: #56a5f6;
    }
  }
  &__nick {
    flex-basis: 60%;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  &__points {
    font-weight: bold;
  }
}
</style>

