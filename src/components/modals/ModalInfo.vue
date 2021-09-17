<template>
  <div class="modal-info">
    <div class="modal-info__window">
      <h1> {{ playerQuarterFinalsAvg.nick }}</h1>
      <div class="modal-info__wrap">
        <div class="modal-info__block"><h3 class="modal-info__block-title">чвертьфиналы</h3>
          <div class="modal-info__total-games"><span>{{ playerQuarterFinalsAvg.totalGames }}</span> игр</div>
          <div class="modal-info__total-games">среднее место - <span>{{ playerQuarterFinalsAvg.avg }}</span></div>
        </div>
        <div class="modal-info__block"><h3 class="modal-info__block-title">полуфиналы</h3>
          <div class="modal-info__total-games"><span>{{ playerSemifinalAvg.totalGames }}</span> игр</div>
          <div class="modal-info__total-games">среднее место - <span>{{ playerSemifinalAvg.avg }}</span></div>
        </div>
        <div class="modal-info__block"><h3 class="modal-info__block-title">финалы</h3>
          <div class="modal-info__total-games"><span>{{ playerFinalAvg.totalGames }}</span> игр</div>
          <div class="modal-info__total-games">среднее место - <span>{{ playerFinalAvg.avg }}</span></div>
        </div>
      </div>
      <button
          class="modal-info__close primary-button"
          @click="closeModal"
      >close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalInfo",
  props: {
    playerFinalAvg: Object,
    playerSemifinalAvg: Object,
    playerQuarterFinalsAvg: Object
  },
  methods: {
    closeModal() {
      this.$emit("closeModal")
    }
  }
}
</script>

<style scoped lang="scss">
.modal-info {
  width: 99.4%;
  height: 99%;
  padding: 5px;
  background: rgba(91, 117, 143, 0.7);
  z-index: 100;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 10px;
  &__window {
    width: 800px;
    height: 400px;
    background: aliceblue;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span {
    font-weight: bold;
  }

  &__wrap {
    display: flex;
    justify-content: space-around;
    padding: 40px 0;
  }
  &__block {
    text-align: center;
    flex-basis: 30%;
  }

  &__close {
    margin: 0 auto;
  }
}
</style>
