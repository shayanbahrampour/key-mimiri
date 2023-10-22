<template>
  <v-sheet
    width="100vw"
    class="position-relative pt-10 px-4 mx-auto home-slider overflow-hidden d-flex flex-column justify-center align-center"
    color="transparent"
    style="position: absolute; top: -200px"
  >
    <v-sheet
      color="white"
      class="position-relative mb-4 px-4 pr-6 mx-auto rounded home-slider overflow-hidden d-flex flex-column justify-start align-center"
    >
      <div class="grid-container d-flex flex-column align-center justify-center my-6" id="contentPDF">
        <div class="row d-flex align-center" v-for="row in 80" :key="row">
          <span :class="['f-10', row > 9 ? 'mr-2' : 'mr-3']" style="font-family: Gabarito; line-height: 1.4">{{
            row
          }}</span>
          <div
            class="square"
            v-for="week in 52"
            :key="week"
            :class="{ filled: (row - 1) * 52 + week <= weeksLived }"
          ></div>
        </div>
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    weeksLived() {
      return this.date ? -this.$dayjs(this.date).diff(this.$dayjs(), 'week') : 0;
    }
  }
};
</script>

<style lang="scss">
.home-slider {
  .square {
    width: 8px;
    height: 8px;
    margin: 2px;
    border: 1px solid #000;
  }

  .filled {
    background-color: #000;
  }
}
</style>
