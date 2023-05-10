<template>
  <div class="d-flex flex-column align-center text-center" style="background-color: #a01e64">
    <h1 :class="['bel mt-16 white--text text--darken-3 font-weight-regular', isMobile ? 'f-40' : 'f-80']">
      Social Health
    </h1>
    <p class="bel mt-6 f-20 white--text text--darken-3">
      Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation
    </p>
    <v-img class="mt-16" contain src="/images/video_content/social.png" />
    <div :class="[isMobile ? 'text-start px-6' : 'text-center ma-16']">
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
    <div v-if="isMobile" class="w-full d-flex flex-column align-center px-6 mb-16">
      <h1 class="bel f-40 mt-16 white--text text--darken-3 font-weight-regularl">Tell us your exprience</h1>
      <v-btn
        class="rounded-xl d-flex justify-center white--text f-20 mt-4"
        outlined
        color="white"
        height="50"
        elevation="0"
        min-width="100%"
      >
        Click here
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pageTitles.social-health')
    };
  }
};
</script>

<style lang="scss" scoped></style>
