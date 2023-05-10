<template>
  <div class="d-flex flex-column align-center text-center" style="background-color: #f3911f">
    <h1 :class="['bel mt-16 white--text text--darken-3 font-weight-regular', isMobile ? 'f-40' : 'f-80']">
      Psychological Health
    </h1>
    <p class="bel mt-6 f-20 white--text text--darken-3">
      Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation
    </p>
    <v-img class="mt-16" contain src="/images/video_content/psychological.png" />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16']">
      <h4 class="bel mt-16 f-40 white--text text--darken-3 font-weight-regular">
        32 Million people in need of 2 Billion doses of iron supplement; less than 800 Million doses is consumed
      </h4>
      <p class="bel mt-6 f-20 white--text text--darken-3">
        WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
        consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
        will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
        have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
      </p>
      <v-spacer></v-spacer>
      <div v-if="isMobile" class="d-flex justify-space-between">
        <div class="right-circle mb-16"></div>
        <div class="left-circle mb-16"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pageTitles.psychological-health')
    };
  }
};
</script>

<style lang="scss">
.psy-screen {
  height: 100vh !important;
}

.right-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #00a59b;
  margin-left: -70px;
}

.left-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a01e64;
  margin-right: -70px;
}
</style>
