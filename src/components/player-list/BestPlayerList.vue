<template>
  <div class="bp-list">
    <img class="bp-list-bg" src="@/assets/img/bg-best-players.png" alt="bg">
    <ul>
      <li class="bp-list__head">
        <span>место</span>
        <span class="bp-list__nick"></span>
        <span class="bp-list__sumOfTournaments">турниров</span>
        <span class="bp-list__top-eight">топ 8</span>
        <span class="bp-list__win">топ 1</span>
        <span class="bp-list__points">Очки</span>
      </li>
      <BestPlayerItem
          v-for="(player,index) in getPart"
          :player="player"
          :index="index"
          :key="player.id"
          @openStatistic="openStatisticModal"
      />
    </ul>
    <ModalInfo
        v-show="modalStatistic"
        :playerFinalAvg="playerFinalAvg"
        :playerSemifinalAvg="playerSemifinalAvg"
        :playerQuarterFinalsAvg="playerQuarterFinalsAvg"
        @closeModal="closeModal"
    />
  </div>
</template>

<script>
import BestPlayerItem from "./BestPlayerItem";
import ModalInfo from "../modals/ModalInfo";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "BestPlayerList",
  components: {BestPlayerItem, ModalInfo},
  data() {
    return {
      player : {},
      playerFinalAvg : {},
      playerSemifinalAvg : {},
      playerQuarterFinalsAvg : {},
      modalStatistic: false
    }
  },
  props: {
    allParticipants: Array,
  },
  computed: {
    ...mapGetters(['getPart', 'getAvg','getAvgFinal','getAvgSemifinal','getAvgQuarterFinals'])
  },
  methods: {
    ...mapActions(['fetchParticipants']),
    openStatisticModal(id) {
      this.playerFinalAvg = this.getAvgFinal(id)
      this.playerSemifinalAvg = this.getAvgSemifinal(id)
      this.playerQuarterFinalsAvg = this.getAvgQuarterFinals(id)
      this.modalStatistic = true
    },
    closeModal(){
      this.modalStatistic = false
    }
  },
  async mounted() {
    await this.fetchParticipants()
  },
}
</script>

<style scoped lang="scss">
li {
  list-style: none;
  padding: 22px 28px;
  margin-bottom: 10px;
  color: #EBF2FA;
}

.bp-list {
  opacity: 99%;

  &-bg {
    position: absolute;
    z-index: -1;
  }

  &__head {
    display: flex;
    justify-content: space-between;
  }

  &__nick {
    flex-basis: 58%;
  }
}

</style>
