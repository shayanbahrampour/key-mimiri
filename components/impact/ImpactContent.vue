<template>
  <div>
    <pre class="ltr">{{ item }}</pre>
    <v-row :class="['position-relative z-1', { 'custom-shadow pb-4': isMobile }]" no-gutters>
      <v-col cols="12" lg="6" md="6">
        <v-sheet :class="[`overflow-hidden ${!isMobile && `rounded-${isRTL ? 'l' : 'r'}-xl`}`]">
          <v-img max-height="calc(100vh - 150px)" src="/images/temp/cover-5-vertical.png" />
          <v-sheet v-if="!isMobile" class="extra-space white--text ps-16 pe-10 py-8" color="slategrey">
            <h2 class="f-22 mb-4 white--text">Woman empowerment future enrichment</h2>
            <p class="f-18 font-weight-light" style="line-height: 30px">
              Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women, and
              causes enormous social and financial burden on the societies. -Economic burden of Anemia has reverse
              association with sociodemographic factors, including nutrition, access to health solutions and education.
              Iran has a high prevalence of Anemia. We responded to this challenge with a comprehensive package of
              health solutions, aiming for all dimensions of health-related quality of life (HRQoL).
            </p>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col cols="12" lg="6" md="6">
        <div :class="[isMobile ? 'pa-5 py-10' : `py-16 px-16 mt-12`]">
          <h1 :class="['bel font-weight-regular', isMobile ? 'f-35 mb-2' : 'f-70 mb-4']" style="color: #59595b">
            Woman empowerment future enrichment
          </h1>

          <div class="blue--text mb-8 f-19 font-weight-light">Long-term value creation</div>

          <p v-if="isMobile" class="grey--text text--darken-2 mb-8">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to enhance their physical, psychological and social quality of life through high quality
            and innovative solutions.
          </p>

          <div :class="['d-flex flex-wrap', { 'mt-12 pt-5 f-13': !isTablet && !isMobile }]">
            <div class="d-flex align-center grey--text text--darken-2 py-1 text-no-wrap pe-5">
              <span v-if="!isMobile"> {{ $t('impactPage.read_time') }}: </span>
              <v-img v-else contain height="20" max-width="20" src="/images/icons/timer.svg" />
              <span :class="`ms-1 d-inline-block`"> {{ item.read_time }}min </span>
            </div>
            <div class="d-flex align-center grey--text text--darken-2 py-1 text-no-wrap pe-5">
              <span v-if="!isMobile"> {{ $t('impactPage.written_by') }}: </span>
              <v-img v-else contain height="20" max-width="20" src="/images/icons/written.svg" />
              <span :class="`ms-1 d-inline-block`"> {{ item[`${$i18n.locale}_author`] }} </span>
            </div>
            <div class="d-flex align-center grey--text text--darken-2 py-1 text-no-wrap pe-5">
              <span v-if="!isMobile"> {{ $t('impactPage.published') }}: </span>
              <v-img v-else contain height="20" max-width="20" src="/images/icons/published.svg" />
              <span :class="`ms-1 d-inline-block`"> {{ $dayjs(item.published_at) }} month ago </span>
            </div>
          </div>

          <h4 v-if="isMobile" class="slategrey--text mt-8 px-1">Share it:</h4>
          <div :class="['d-flex', isMobile ? 'mt-2' : 'mt-10 pb-16']">
            <nuxt-link :to="localePath('/')" class="me-4">
              <v-img contain height="50" src="/images/social/icon-linkedin.svg" width="50" />
            </nuxt-link>
            <nuxt-link :to="localePath('/')" class="me-4">
              <v-img contain height="50" src="/images/social/icon-whatsapp.svg" width="50" />
            </nuxt-link>
            <nuxt-link :to="localePath('/')" class="me-4">
              <v-img contain height="50" src="/images/social/icon-telegram.svg" width="50" />
            </nuxt-link>
          </div>

          <template v-if="!isMobile">
            <v-divider class="mb-4 mt-8" />
            <p class="ma-0 f-18" style="color: #939393; line-height: 30px">
              In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
              and are committed to enhance their physical, psychological and social quality of life through high quality
              and innovative solutions.
            </p>
            <v-divider class="mt-4" />
          </template>
        </div>
      </v-col>
    </v-row>

    <v-sheet
      v-if="isMobile"
      class="pa-8 mx-4 position-relative z-0 extra-space white--text custom-rounded-b-lg"
      color="slategrey"
    >
      <h2 v-if="!isMobile" class="f-24 mb-4 white--text">Woman empowerment future enrichment</h2>
      <p class="f-19 font-weight-light" style="line-height: 25px">
        Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women, and causes
        enormous social and financial burden on the societies. -Economic burden of Anemia has reverse association with
        sociodemographic factors, including nutrition, access to health solutions and education. Iran has a high
        prevalence of Anemia. We responded to this challenge with a comprehensive package of health solutions, aiming
        for all dimensions of health-related quality of life (HRQoL).
      </p>
    </v-sheet>

    <div :style="`max-width:${globalMaxWidth}px`" class="mx-auto">
      <v-sheet :class="['pt-16', isMobile ? 'px-6' : $vuetify.breakpoint.xl ? 'px-12 mb-4' : 'px-16 mb-4']">
        <h2
          :class="[
            'bel grey--text text--darken-2 font-weight-regular d-block',
            isMobile ? 'f-30 text-center mb-6' : 'f-45 mb-6'
          ]"
        >
          Sistan and Balouchestan, highest prevalence of Iron deficiency in Iran
        </h2>
      </v-sheet>
    </div>

    <div :style="`max-width:${globalMaxWidth}px`" class="mx-auto">
      <div :class="!isMobile && ($vuetify.breakpoint.xl ? 'px-12' : 'px-16')">
        <VideoContents
          :style="`max-height: calc(100vh - 150px); min-height: ${isMobile ? '' : '500px'}`"
          class="w-full overflow-hidden d-flex align-center"
          poster="/images/temp/cover-4.png"
          src="/video/temp.mp4"
        />

        <v-sheet v-if="isMobile" class="custom-gradient my-1" height="16" />
      </div>
      <v-sheet :class="[isMobile ? 'px-6' : $vuetify.breakpoint.xl ? 'px-12' : 'px-16']" style="color: #59595b">
        <v-row :class="[isMobile ? 'pt-6' : 'mt-md-10 py-16']">
          <v-col lg="7" md="6" xl="8">
            <h3
              :class="[
                'font-weight-regular bel success--text mb-4 text-center text-sm-start',
                isMobile ? 'f-30' : 'f-45'
              ]"
            >
              32 Million people in need of 2 Billion doses of iron supplement; less than 800 Million doses is consumed
            </h3>
            <p :class="['mb-6 font-weight-light', isMobile ? 'f-20' : 'f-25 mt-8']" style="line-height: 35px">
              WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required
              to consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any
              deficiencies will not only affect themselves, but it also affects their fetus. In addition, Iranian men
              and menopaused women have a 2 prevalence of Anemia and are also require to manage the disease accordingly
              (3). Studies conducted by Cobel Group medico-marketing teams indicated that there are 32 million people in
              Iran, who require a total amount of 2 Billion doses of Iron supplements; however, surprisingly the
              consumed amount is less than 800 million doses, based on annual sale statistics. It means that 60
              percentage of the people who are required to consume Iron supplements to prevent or manage Anemia, are not
              rationally using it. This could be highly affected by lack of awareness and access challenges to high
              quality Iron supplements.
            </p>
            <p
              v-if="$vuetify.breakpoint.lgAndUp"
              :class="['mb-6 font-weight-light', isMobile ? 'f-20' : 'f-25 mt-8']"
              style="line-height: 35px"
            >
              WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required
              to consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any
              rationally using it. This could be highly affected by lack of awareness and access challenges to high
              quality Iron supplements.
            </p>
          </v-col>
          <v-col v-if="!isMobile" class="ps-md-8 mb-md-8" lg="5" md="6" xl="4">
            <v-img min-height="600" src="/images/temp/impact_detail.png" />
          </v-col>
        </v-row>
      </v-sheet>

      <v-img v-if="isMobile" min-height="600" src="/images/temp/impact_detail.png" />

      <v-sheet :class="[isMobile ? 'px-6' : $vuetify.breakpoint.xl ? 'px-12' : 'px-16']" style="color: #59595b">
        <div class="mt-4">
          <p :class="['mb-6 font-weight-light', isMobile ? 'f-20' : 'f-25']" style="line-height: 35px">
            Lastly, acknowledging our social responsibility commitments, we have identified various underprivileged
            provinces with the highest prevalence of iron deficiency in women, such as Sistan and Balouchestan province
            and Dahak village, and supplied FerroFort supplements for the need of 6,000 people for a time horizon of one
            year as part of our Abidi 75th birthday project, aimed at empowering and inspiring women in all sectors of
            Iranian society.
          </p>

          <h4
            :class="[
              'font-weight-regular bel success--text mb-4 text-center text-sm-start',
              isMobile ? 'f-30' : 'f-45'
            ]"
          >
            providing high‐quality supplements, not only for women, but also for men and children.
          </h4>

          <p :class="['mb-6 font-weight-light', isMobile ? 'f-20' : 'f-25']" style="line-height: 35px">
            We at Cobel Group recognize the importance of woman empowerment and are committed to enhancing their
            physical, psychological, and social quality of life through high‐quality and innovative healthcare
            solutions.
          </p>
        </div>

        <div :class="['d-flex align-center text-center', isMobile ? 'px-4 mt-10' : 'mt-16']">
          <h2
            :class="['bel font-weight-regular d-block', isMobile ? 'f-40' : 'f-55']"
            style="color: #595958 !important"
          >
            {{ $t('impactPage.other_links') }}
          </h2>

          <template v-if="!isMobile">
            <v-spacer />
            <nuxt-link :to="localePath('/impact')" class="grey--text text-decoration-none f-18">
              {{ $t('impactPage.see_all') }}
            </nuxt-link>
          </template>
        </div>
      </v-sheet>

      <client-only>
        <swiper
          v-if="relatedContents && relatedContents.length !== 0"
          id="impactSwiper"
          key="impactSwiper"
          :class="['w-full me-0', isMobile ? 'mt-4 px-5' : 'my-3 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <swiper-slide v-for="(item, index) in relatedContents" :key="index">
            <ImpactCards :item="item" :style="`border-radius: ${isMobile ? '30px' : '80px'}`" class="mt-2 mb-3" />
          </swiper-slide>
        </swiper>
      </client-only>
    </div>

    <HomeTellUsStory />
  </div>
</template>

<script>
import ImpactCards from '~/components/impact/ImpactCards.vue';
import HomeTellUsStory from '~/components/home/HomeTellUsStory.vue';
import VideoContents from '~/components/shared/VideoContents.vue';

export default {
  components: { VideoContents, HomeTellUsStory, ImpactCards },
  props: {
    item: {
      type: Object,
      default: null
    },
    relatedContents: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    swiperOptions() {
      return {
        grabCursor: true,
        centeredSlidesBounds: true,
        centeredSlides: this.isMobile,
        spaceBetween: 28,
        slidesPerView: 1.3,
        breakpoints: {
          1904: {
            slidesPerView: 2.5
          },
          1264: {
            slidesPerView: 1.8
          },
          960: {
            slidesPerView: 1.8
          },
          760: {
            slidesPerView: 1.4
          }
        }
      };
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
