<template>
  <div>
    <v-row no-gutters :class="['position-relative z-1', { 'custom-shadow': isMobile }]">
      <v-col cols="12" md="5">
        <v-sheet :class="[`overflow-hidden ${!isMobile && `rounded-${isRTL ? 'l' : 'r'}-xl`}`]" max-width="700">
          <v-img src="/images/impact/cover-detail.png" max-height="calc(100vh - 150px)" />

          <v-sheet v-if="!isMobile" class="extra-space white--text pa-12" color="slategrey">
            <h2 class="f-24 mb-4 white--text">Woman empowerment future enrichment</h2>
            <p class="f-19 font-weight-light ma-0">
              Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women, and
              causes enormous social and financial burden on the societies. -Economic burden of Anemia has reverse
              association with sociodemographic factors, including nutrition, access to health solutions and education.
              Iran has a high prevalence of Anemia. We responded to this challenge with a comprehensive package of
              health solutions, aiming for all dimensions of health-related quality of life (HRQoL).
            </p>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="6" offset-md="1">
        <div :class="[isMobile ? 'pa-4 mt-6' : 'pa-16 mt-5']">
          <h1 :class="['bel grey--text text--darken-3 font-weight-regular', isMobile ? 'f-40' : 'f-80 mb-8']">
            Woman empowerment future enrichment
          </h1>

          <div class="blue--text mb-8">Long-term value creation</div>

          <p v-if="isMobile" class="grey--text text--darken-2 mb-8">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to enhance their physical, psychological and social quality of life through high quality
            and innovative solutions.
          </p>

          <div :class="['d-flex flex-md-row flex-column justify-md-space-between', { 'mt-16 pt-5 f-13': !isMobile }]">
            <div class="grey--text py-1">Read time: 13min</div>
            <div class="grey--text py-1">Writed by: mehrab mohammadi</div>
            <div class="grey--text py-1">Published 3 moth ago</div>
          </div>

          <template v-if="!isMobile">
            <v-divider class="my-6" />

            <p class="grey--text text--darken-2 mb-8">
              In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
              and are committed to enhance their physical, psychological and social quality of life through high quality
              and innovative solutions.
            </p>
          </template>
        </div>
      </v-col>
    </v-row>

    <v-sheet
      v-if="isMobile"
      class="pa-8 mx-4 position-relative z-0 extra-space white--text rounded-b-xl"
      color="slategrey"
    >
      <h2 class="f-24 mb-4 white--text">Woman empowerment future enrichment</h2>
      <p class="f-19 font-weight-light">
        Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women, and causes
        enormous social and financial burden on the societies. -Economic burden of Anemia has reverse association with
        sociodemographic factors, including nutrition, access to health solutions and education. Iran has a high
        prevalence of Anemia. We responded to this challenge with a comprehensive package of health solutions, aiming
        for all dimensions of health-related quality of life (HRQoL).
      </p>
    </v-sheet>

    <v-sheet :max-width="globalMaxWidth" class="mx-auto px-8 pt-16 mt-sm-16">
      <h2
        :class="['bel grey--text text--darken-2 text-center font-weight-regular d-block', isMobile ? 'f-40' : 'f-50']"
      >
        Sistan and Balouchestan, highest prevalence of Iron deficiency in Iran
      </h2>
    </v-sheet>

    <v-img
      :class="['mt-10 mx-auto', { 'px-8': !isMobile }]"
      :max-width="globalMaxWidth"
      contain
      src="/images/video_content/physical.png"
    />

    <v-sheet :max-width="globalMaxWidth" class="mx-auto px-8">
      <v-row class="my-sm-16 pt-16">
        <v-col lg="8">
          <h3 class="f-45 font-weight-regular bel cyan--text mb-4 text-center text-sm-start">
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
        <v-col lg="4" :class="{ 'px-8': !isMobile }">
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

          <h4 class="f-45 font-weight-regular bel cyan--text my-8 text-center text-sm-start">
            providing high‐quality supplements, not only for women, but also for men and children.
          </h4>

          <p class="f-20 mb-6" style="line-height: 30px">
            We at Cobel Group recognize the importance of woman empowerment and are committed to enhancing their
            physical, psychological, and social quality of life through high‐quality and innovative healthcare
            solutions.
          </p>
        </v-col>
      </v-row>

      <template v-if="!isMobile">
        <h2 class="bel f-55 grey--text text--darken-2 font-weight-regular d-block">You may also like these</h2>

        <client-only>
          <swiper
            v-if="items.length !== 0"
            id="impactSwiper"
            key="impactSwiper"
            :options="swiperOptions"
            :class="['w-full', isMobile ? 'mt-8' : 'my-8']"
            :dir="isRTL ? 'rtl' : 'ltr'"
          >
            <swiper-slide v-for="(item, index) in items" :key="index">
              <ImpactCards :item="item" class="mt-2 mb-3" />
            </swiper-slide>
          </swiper>
        </client-only>
      </template>
    </v-sheet>

    <HomeTellUsStory class="my-16 pb-16 pt-4" />
  </div>
</template>

<script>
import ImpactCards from '~/components/impact/ImpactCards.vue';
import HomeTellUsStory from '~/components/home/HomeTellUsStory.vue';

export default {
  components: { HomeTellUsStory, ImpactCards },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 16,
        slidesPerView: 1.1,
        grabCursor: true,
        breakpoints: {
          1441: {
            slidesPerView: 4.5
          },
          960: {
            slidesPerView: 3.5
          }
        }
      },
      items: [
        { id: 1, title: 'Rise from the society return to the society', src: '/images/temp/ladan.png' },
        { id: 2, title: 'Rise from the society return to the society', src: '/images/temp/ladan.png' },
        { id: 3, title: 'Rise from the society return to the society', src: '/images/temp/ladan.png' },
        { id: 4, title: 'Rise from the society return to the society', src: '/images/temp/ladan.png' },
        { id: 5, title: 'Rise from the society return to the society', src: '/images/temp/ladan.png' }
      ]
    };
  },
  head() {
    return {
      title: this.$t('pageTitles.impact_stories')
    };
  }
};
</script>

<style lang="scss" scoped>
.custom-shadow {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.3) !important;
}
</style>
