<template>
  <div>
    <v-row align="center" no-gutters>
      <v-col cols="12" md="6">
        <v-sheet class="global-radius overflow-hidden" max-width="700">
          <v-img contain src="/images/impact/cover-detail.png" />

          <v-sheet class="pa-8 extra-space white--text" color="slategrey">
            <h2 class="f-22 mb-2 grey--text text--darken-2">Woman empowerment future enrichment</h2>
            <p class="f-18 font-weight-light">
              Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women, and
              causes enormous social and financial burden on the societies. -Economic burden of Anemia has reverse
              association with sociodemographic factors, including nutrition, access to health solutions and education.
              Iran has a high prevalence of Anemia. We responded to this challenge with a comprehensive package of
              health solutions, aiming for all dimensions of health-related quality of life (HRQoL).
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
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to enhance their physical, psychological and social quality of life through high quality
            and innovative solutions.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-sheet :max-width="globalMaxWidth" class="mx-auto px-4 py-16 my-16">
      <h2 class="bel f-50 grey--text text--darken-2 text-center font-weight-regular d-block">
        Sistan and Balouchestan, highest prevalence of Iron deficiency in Iran
      </h2>

      <v-img class="mt-10" contain src="/images/video_content/physical.png" />

      <v-row class="my-16 pt-16">
        <v-col lg="8">
          <h3 class="f-45 font-weight-regular bel cyan--text mb-4">
            32 Million people in need of 2 Billion doses of iron supplement; less than 800 Million doses is consumed
          </h3>
          <p class="f-20 mb-6" style="line-height: 30px">
            WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required
            to consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any
            deficiencies will not only affect themselves, but it also affects their fetus. In addition, Iranian men and
            menopaused women have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
            Studies conducted by Cobel Group medico-marketing teams indicated that there are 32 million people in Iran,
            who require a total amount of 2 Billion doses of Iron supplements; however, surprisingly the consumed amount
            is less than 800 million doses, based on annual sale statistics. It means that 60 percentage of the people
            who are required to consume Iron supplements to prevent or manage Anemia, are not rationally using it. This
            could be highly affected by lack of awareness and access challenges to high quality Iron supplements.
          </p>
        </v-col>
        <v-col lg="4" class="px-8">
          <v-img src="/images/temp/impact_detail.png" height="600" />
        </v-col>
        <v-col lg="12">
          <p class="f-20 mb-6" style="line-height: 30px">
            Lastly, acknowledging our social responsibility commitments, we have identified various underprivileged
            provinces with the highest prevalence of iron deficiency in women, such as Sistan and Balouchestan province
            and Dahak village, and supplied FerroFort supplements for the need of 6,000 people for a time horizon of one
            year as part of our Abidi 75th birthday project, aimed at empowering and inspiring women in all sectors of
            Iranian society.
          </p>

          <h4 class="f-45 font-weight-regular bel cyan--text my-8">
            providing high‐quality supplements, not only for women, but also for men and children.
          </h4>

          <p class="f-20 mb-6" style="line-height: 30px">
            We at Cobel Group recognize the importance of woman empowerment and are committed to enhancing their
            physical, psychological, and social quality of life through high‐quality and innovative healthcare
            solutions.
          </p>
        </v-col>
      </v-row>

      <h2 class="bel f-55 grey--text text--darken-2 font-weight-regular d-block">You may also like these</h2>

      <v-row class="my-8">
        <v-col v-for="(item, index) in items" :key="index" lg="6" cols="12">
          <ImpactCards :item="item" />
        </v-col>
      </v-row>

      <div class="d-flex flex-column align-center justify-center mt-16 pt-16">
        <h3 class="bel f-55 grey--text text--darken-2 font-weight-regular d-block">Tell Us Your Story</h3>
        <v-btn large class="f-18 ma-2 px-14" exact rounded depressed color="primary"> Click Here </v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import ImpactCards from '~/components/impact/ImpactCards.vue';

export default {
  components: { ImpactCards },
  data() {
    return {
      items: [{ title: 'Rise from the society return to the society', src: '/images/temp/ladan.png' }]
    };
  },
  head() {
    return {
      title: this.$t('pageTitles.impact_stories')
    };
  }
};
</script>

<style lang="scss" scoped></style>
