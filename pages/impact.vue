<template>
  <v-row align="center" no-gutters>
    <v-col cols="12" md="6">
      <v-sheet class="global-radius overflow-hidden" max-width="700">
        <v-img contain src="/images/impact_story/cover.png" />

        <v-sheet class="pa-8 extra-space white--text" color="hoki">
          <h2 class="f-22 mb-2">Woman empowerment future enrichment</h2>
          <p class="f-18 font-weight-light">
            Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women, and
            causes enormous social and financial burden on the societies. -Economic burden of Anemia has reverse
            association with sociodemographic factors, including nutrition, access to health solutions and education.
            Iran has a high prevalence of Anemia. We responded to this challenge with a comprehensive package of health
            solutions, aiming for all dimensions of health-related quality of life (HRQoL).
          </p>
        </v-sheet>
      </v-sheet>
    </v-col>
    <v-col cols="12" md="6">
      <div class="pa-16">
        <h1 class="bel f-80 grey--text text--darken-3 font-weight-regular">
          Woman
          <br />
          empowerment
          <br />
          future
          <br />
          enrichment
        </h1>

        <v-divider class="mb-4" />
        <p class="grey--text text--darken-2">
          In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and
          are committed to enhance their physical, psychological and social quality of life through high quality and
          innovative solutions.
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pageTitles.impact_stories')
    };
  }
};
</script>

<style lang="scss" scoped></style>
