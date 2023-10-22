<template>
  <v-sheet
    height="100vh"
    width="100vw"
    class="position-relative px-4 mx-auto home-slider overflow-hidden d-flex flex-column justify-center align-center"
    color="transparent"
  >
    <h1
      :class="[
        'white--text text-center text--darken-2 font-weight-regular',
        isMobile ? 'f-40' : 'f-40',
        isRTL && isMobile && 'text-center'
      ]"
      style="font-family: Gabarito; line-height: 1.4"
    >
      Time is an illusion; it's the moments that matter<br />
      -Albert Einstein
    </h1>
    <v-sheet
      class="rounded px-4 py-2 mt-4 custom-input d-flex justify-center align-center"
      width="300"
      height="50"
      style="border: solid 1px white; background-color: transparent; cursor: pointer"
    >
      <span class="white--text" style="font-family: Gabarito; line-height: 1.4">{{
        date ? $dayjs(date).format('YYYY/MM/DD') : 'Enter Your Age'
      }}</span>
    </v-sheet>
    <date-picker
      v-model="date"
      simple
      :disable="checkDate"
      format="YYYY-MM-DD"
      display-format="jYYYY-jMM-jDD"
      custom-input=".custom-input"
      color="#232d3f"
    />
  </v-sheet>
</template>

<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
export default {
  components: { datePicker: VuePersianDatetimePicker },
  data() {
    return {
      dialog: false,
      date: null,
      screenHeight: 1080,
      flag: {
        showFullscreen: false,
        video: false
      }
    };
  },
  watch: {
    date() {
      if (this.date) this.$emit('input', this.date);
    }
  },
  methods: {
    checkDate(formatted, dateMoment, checkingFor) {
      return formatted > this.$dayjs().calendar('gregory').format('YYYY-MM-DD');
    }
  }
};
</script>

<style lang="scss"></style>
