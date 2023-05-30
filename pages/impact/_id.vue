<template>
  <div>
    <v-row :class="['position-relative z-1', { 'custom-shadow pb-4': isMobile }]" no-gutters>
      <v-col cols="12" md="5">
        <v-sheet :class="[`overflow-hidden ${!isMobile && `rounded-${isRTL ? 'l' : 'r'}-xl`}`]" max-width="700">
          <v-img max-height="calc(100vh - 150px)" src="/images/temp/cover-5-vertical.png" />

          <v-sheet v-if="!isMobile" class="extra-space white--text pa-12" color="slategrey">
            <h2 class="f-24 mb-4 white--text">Woman empowerment future enrichment</h2>
            <p class="f-19 font-weight-light ma-0" style="line-height: 30px">
              Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women, and
              causes enormous social and financial burden on the societies. -Economic burden of Anemia has reverse
              association with sociodemographic factors, including nutrition, access to health solutions and education.
              Iran has a high prevalence of Anemia. We responded to this challenge with a comprehensive package of
              health solutions, aiming for all dimensions of health-related quality of life (HRQoL).
            </p>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col cols="12" lg="6" md="7" offset-lg="1" offset-xl="0">
        <div :class="[isMobile ? 'pa-4 mt-6' : 'pa-16 mt-5']">
          <h1 :class="['bel grey--text text--darken-2 font-weight-regular', isMobile ? 'f-40' : 'f-80 mb-4']">
            Woman empowerment future enrichment
          </h1>

          <div class="blue--text mb-8 f-19">Long-term value creation</div>

          <p v-if="isMobile" class="grey--text text--darken-2 mb-8">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to enhance their physical, psychological and social quality of life through high quality
            and innovative solutions.
          </p>

          <div :class="['d-flex flex-md-row flex-column', { 'mt-12 pt-5 f-13': !isTablet && !isMobile }]">
            <div :class="['grey--text text--darken-2 py-1', !isMobile && `p${isRTL ? 'l' : 'r'}-5`]">
              {{ $t('impactPage.read_time') }}: 13min
            </div>
            <div :class="['grey--text text--darken-2 py-1', !isMobile && `p${isRTL ? 'l' : 'r'}-5`]">
              {{ $t('impactPage.written_by') }}: mehrab
            </div>
            <div :class="['grey--text text--darken-2 py-1', !isMobile && `p${isRTL ? 'l' : 'r'}-5`]">
              {{ $t('impactPage.published') }} 3 moth ago
            </div>
          </div>

          <template v-if="!isMobile">
            <div class="d-flex mt-8 mb-16 pb-6">
              <nuxt-link :to="localePath('/')" class="mr-4">
                <v-img contain height="50" src="/images/social/icon-linkedin.svg" width="50" />
              </nuxt-link>
              <nuxt-link :to="localePath('/')" class="mr-4">
                <v-img contain height="50" src="/images/social/icon-whatsapp.svg" width="50" />
              </nuxt-link>
              <nuxt-link :to="localePath('/')" class="mr-4">
                <v-img contain height="50" src="/images/social/icon-telegram.svg" width="50" />
              </nuxt-link>
            </div>

            <v-divider class="my-6" />

            <p class="grey--text text--darken-1 ma-0 f-19" style="line-height: 25px">
              In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
              and are committed to enhance their physical, psychological and social quality of life through high quality
              and innovative solutions.
            </p>

            <v-divider class="my-6" />
          </template>
        </div>
      </v-col>
    </v-row>

    <v-sheet
      v-if="isMobile"
      class="pa-8 mx-4 position-relative z-0 extra-space white--text custom-rounded-b-lg"
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

    <v-sheet :class="['mx-auto pt-16 mt-sm-16', isMobile ? 'px-6' : 'px-16']" :max-width="globalMaxWidth">
      <h2 :class="['bel grey--text text--darken-2 font-weight-regular d-block', isMobile ? 'f-40' : 'f-50']">
        Sistan and Balouchestan, highest prevalence of Iron deficiency in Iran
      </h2>
    </v-sheet>

    <div :class="{ 'px-16': !isMobile }">
      <v-img
        :class="[
          'position-relative d-flex justify-center align-center z-0 mx-auto mt-10 mx-auto',
          isMobile ? 'py-8' : 'py-16'
        ]"
        :max-width="globalMaxWidth"
        max-height="600"
        src="/images/temp/cover-4.png"
      >
        <v-img
          :height="isMobile ? 80 : 130"
          :max-height="isMobile ? 80 : 130"
          :max-width="isMobile ? 80 : 130"
          :width="isMobile ? 80 : 130"
          class="ma-auto position-absolute top-0 bottom-0 end-0 start-0 z-1"
          contain
          src="/images/home/home_video_button.svg"
        />
      </v-img>
    </div>

    <v-sheet :class="['mx-auto', isMobile ? 'px-6' : 'px-16']" :max-width="globalMaxWidth">
      <v-row class="my-sm-16 pt-16">
        <v-col md="8">
          <h3
            :class="[
              'font-weight-regular bel success--text mb-4 text-center text-sm-start',
              isMobile ? 'f-35' : 'f-45'
            ]"
          >
            32 Million people in need of 2 Billion doses of iron supplement; less than 800 Million doses is consumed
          </h3>
          <p class="f-20 mb-6 font-weight-light" style="line-height: 30px">
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
        <v-col class="px-md-8" md="4">
          <v-img height="600" src="/images/temp/impact_detail.png" />
        </v-col>
        <v-col lg="12">
          <p class="f-20 mb-6 font-weight-light" style="line-height: 30px">
            Lastly, acknowledging our social responsibility commitments, we have identified various underprivileged
            provinces with the highest prevalence of iron deficiency in women, such as Sistan and Balouchestan province
            and Dahak village, and supplied FerroFort supplements for the need of 6,000 people for a time horizon of one
            year as part of our Abidi 75th birthday project, aimed at empowering and inspiring women in all sectors of
            Iranian society.
          </p>

          <h4
            :class="[
              'font-weight-regular bel success--text mb-4 text-center text-sm-start',
              isMobile ? 'f-35' : 'f-45'
            ]"
          >
            providing high‐quality supplements, not only for women, but also for men and children.
          </h4>

          <p class="f-20 mb-6 font-weight-light" style="line-height: 30px">
            We at Cobel Group recognize the importance of woman empowerment and are committed to enhancing their
            physical, psychological, and social quality of life through high‐quality and innovative healthcare
            solutions.
          </p>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet v-if="items && items.length !== 0" :max-width="globalMaxWidth" class="mx-auto">
      <div :class="['d-flex align-center text-center', isMobile ? 'px-6 mt-10' : 'px-16']">
        <h2 :class="['bel grey--text text--darken-2 font-weight-regular d-block', isMobile ? 'f-40' : 'f-55']">
          {{ $t('impactPage.other_links') }}
        </h2>

        <template v-if="!isMobile">
          <v-spacer />
          <nuxt-link :to="localePath('/impact')" class="grey--text text-decoration-none">
            {{ $t('impactPage.see_all') }}
          </nuxt-link>
        </template>
      </div>

      <client-only>
        <swiper
          v-if="items && items.length !== 0"
          id="impactSwiper"
          key="impactSwiper"
          :class="[`w-full m${isRTL ? 'l' : 'r'}-0`, isMobile ? 'mt-8 px-6' : 'my-8 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <ImpactCards :item="item" class="mt-2 mb-3" />
          </swiper-slide>
        </swiper>
        <div v-else-if="!$fetchState.pending" class="mt-8 text-center">
          {{ $t('impactPage.not_found') }}
        </div>
      </client-only>
    </v-sheet>

    <v-progress-linear v-if="$fetchState.pending" />

    <HomeTellUsStory class="my-16 pb-16" />
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
        spaceBetween: 32,
        slidesPerView: 1.1,
        grabCursor: true,
        breakpoints: {
          1904: {
            slidesPerView: 3.2
          },
          1264: {
            slidesPerView: 2.5
          },
          960: {
            slidesPerView: 1.8
          },
          760: {
            slidesPerView: 1.4
          }
        }
      },
      items: []
    };
  },
  head() {
    return {
      title: this.$t('pageTitles.impact_stories')
    };
  },
  async fetch() {
    try {
      const { data } = await this.$store.dispatch('impact/getList', { id: this.$route.params.id });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  },
  created() {
    this.getRelated();
  },
  methods: {
    async getRelated() {
      try {
        const { data } = await this.$store.dispatch('impact/getList', {
          params: {
            page: 1
          }
        });
        this.items = data.results;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-shadow {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.3) !important;
}

.custom-rounded-b-lg {
  border-bottom-left-radius: 47px !important;
  border-bottom-right-radius: 47px !important;
}
</style>
