<template>
  <div class="d-flex flex-column align-center h-full text-center" style="background-color: #00a59b">
    <h1 class="bel mt-16 f-80 white--text text--darken-3 font-weight-regular">Physical Health</h1>
    <p class="bel mt-6 f-20 white--text text--darken-3">
      Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation
    </p>
    <v-img class="mt-16" contain src="/images/video_content/physical.png" />
    <div class="ma-16 h-full text-center">
      <h4 class="bel mt-16 f-40 white--text text--darken-3 font-weight-regular">
        32 Million people in need of 2 Billion doses of iron supplement; less than 800 Million doses is consumed
      </h4>
      <p class="bel mt-6 f-20 white--text text--darken-3">
        WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
        consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
        will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
        have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pageTitles.physical')
    };
  }
};
</script>

<style lang="scss" scoped></style>
