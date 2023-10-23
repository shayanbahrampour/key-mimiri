<template>
  <v-sheet
    width="100vw"
    class="position-relative pt-10 px-4 mx-auto home-slider overflow-hidden d-flex flex-column justify-center align-center"
    color="transparent"
    elevation="0"
    style="position: absolute; top: -200px"
  >
    <v-sheet
      color="white"
      class="position-relative rounded-lg mb-4 px-4 pr-6 sheet-cal mx-auto rounded-0 home-slider overflow-hidden d-flex flex-column justify-start align-center"
    >
      <span class="my-6 f-20" style="font-family: Gabarito; line-height: 1.4"
        >Weeks Lived, Weeks Left: Seize the Moment</span
      >
      <div class="grid-container d-flex flex-column align-center justify-center mb-6">
        <div class="row d-flex align-center" v-for="row in 80" :key="row">
          <span :class="['f-10 text-center mx-2']" style="font-family: Gabarito; line-height: 1.4; width: 6px">{{
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
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin: 2px;
    border: 1px solid #232d3f;
  }

  .square:hover {
    background-color: #546480;
    cursor: pointer;
  }

  .filled {
    background-color: #232d3f;
  }
}
</style>
