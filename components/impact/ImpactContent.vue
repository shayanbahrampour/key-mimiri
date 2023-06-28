<template>
  <div v-if="item">
    <v-row :class="['position-relative z-1 ltr', { 'custom-shadow pb-4': isMobile }]" no-gutters>
      <v-col :class="isRTL && 'rtl'" cols="12" lg="6" md="6">
        <v-sheet :class="[`overflow-hidden ${!isMobile && 'rounded-r-xl'}`]">
          <v-img
            v-if="column_section_file"
            :src="`${$imageUrl}/${column_section_file}`"
            max-height="calc(100vh - 150px)"
          />
          <v-sheet v-if="!isMobile" class="extra-space white--text ps-16 pe-10 py-8" color="slategrey">
            <h2 :class="['f-22 mb-4 white--text', { ravi: isRTL }]">{{ item[`${$i18n.locale}_title`] }}</h2>
            <div
              :class="['f-18 text-pre-line', isRTL ? 'font-weight-bold anjoman' : 'font-weight-light']"
              :style="`line-height: ${isRTL ? '30px' : '35px'}`"
              v-html="item[`${$i18n.locale}_column_section`]"
            />
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col :class="isRTL && 'rtl'" cols="12" lg="6" md="6">
        <div :class="[isMobile ? 'pa-5 py-10' : `py-16 px-16 mt-12`]">
          <h1
            :class="[
              'font-weight-regular',
              isMobile ? 'mb-2' : 'mb-4',
              isMobile ? (isRTL ? 'f-30' : 'f-35') : isRTL ? 'f-45' : 'f-70',
              isRTL ? 'ravi' : 'bel'
            ]"
            style="color: #59595b"
          >
            {{ item[`${$i18n.locale}_title`] }}
          </h1>
          <div :class="['blue--text mb-8 f-19', isRTL ? 'anjoman font-weight-bold' : 'font-weight-light']">
            <span v-for="(cat, index) in item.impact_story_categories" :key="index" class="me-2 d-inline-block">
              {{ cat[`${$i18n.locale}_name`] }}
            </span>
          </div>
          <div
            v-if="isMobile"
            :class="['grey--text text--darken-2 mb-8', isRTL && 'anjoman font-weight-bold']"
            v-html="item[`${$i18n.locale}_summary`]"
          />

          <div
            :class="[
              'd-flex flex-wrap',
              !isMobile && 'mt-12 pt-5',
              isRTL && 'anjoman font-weight-bold',
              isRTL ? 'f-14' : 'f-13'
            ]"
          >
            <div class="d-flex align-center grey--text text--darken-2 py-1 text-no-wrap pe-5">
              <span v-if="!isMobile"> {{ $t('impactPage.read_time') }}: </span>
              <v-img v-else contain height="20" max-width="20" src="/images/icons/timer.svg" />
              <span :class="`ms-2 d-inline-block`"> {{ item.read_time }} {{ isRTL ? 'دقیقه' : 'min' }} </span>
            </div>
            <div class="d-flex align-center grey--text text--darken-2 py-1 text-no-wrap pe-5">
              <span v-if="!isMobile"> {{ $t('impactPage.written_by') }}: </span>
              <v-img v-else contain height="20" max-width="20" src="/images/icons/written.svg" />
              <span :class="`ms-2 d-inline-block`"> {{ item[`${$i18n.locale}_author`] }} </span>
              {{ `${$i18n.locale}_author` }}
            </div>
            <div v-if="item.published_at" class="d-flex align-center grey--text text--darken-2 py-1 text-no-wrap pe-5">
              <span v-if="!isMobile"> {{ $t('impactPage.published') }}: </span>
              <v-img v-else contain height="20" max-width="20" src="/images/icons/published.svg" />
              <span :class="`ms-2 d-inline-block`">
                {{
                  $dayjs(item.published_at)
                    .locale(`${isRTL ? 'fa' : 'en'}`)
                    .calendar(`${isRTL ? 'jalali' : 'gregory'}`)
                    .fromNow()
                }}
              </span>
            </div>
          </div>

          <h4 v-if="isMobile" :class="['slategrey--text mt-4 px-1', isRTL && 'mb-3']">
            {{ $t('impactPage.share_it') }}:
          </h4>
          <div :class="['d-flex', isMobile ? 'mt-2' : 'mt-10 pb-16']">
            <a :href="item.short_link" class="me-4" rel="noopener noreferrer" target="_blank">
              <v-img contain height="50" src="/images/social/icon-linkedin.svg" width="50" />
            </a>
            <a :href="item.short_link" class="me-4" rel="noopener noreferrer" target="_blank">
              <v-img contain height="50" src="/images/social/icon-whatsapp.svg" width="50" />
            </a>
            <a :href="item.short_link" class="me-4" rel="noopener noreferrer" target="_blank">
              <v-img contain height="50" src="/images/social/icon-telegram.svg" width="50" />
            </a>
          </div>

          <template v-if="!isMobile">
            <v-divider class="mb-4 mt-8" />
            <div
              :class="['ma-0 f-18', isRTL && 'anjoman font-weight-bold']"
              style="color: #939393; line-height: 30px"
              v-html="item[`${$i18n.locale}_summary`]"
            />
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
      <h2 v-if="!isMobile || isRTL" :class="['mb-4 white--text', { ravi: isRTL }, isRTL ? 'f-22' : 'f-24']">
        {{ item[`${$i18n.locale}_title`] }}
      </h2>
      <div
        :class="['f-19', isRTL ? 'font-weight-bold anjoman' : 'font-weight-light']"
        :style="`line-height: ${isRTL ? '30px' : '35px'}`"
        v-html="item[`${$i18n.locale}_column_section`]"
      />
    </v-sheet>
    <div class="mx-auto">
      <v-sheet :class="['pt-16', isMobile ? 'px-6' : 'px-16 mb-4']">
        <h2
          :class="[
            'grey--text text--darken-2 font-weight-regular d-block text-center',
            isMobile ? 'mb-6' : 'mb-6',
            isMobile ? (isRTL ? 'f-28' : 'f-30') : isRTL ? 'f-38' : 'f-45',
            isRTL ? 'ravi' : 'bel'
          ]"
        >
          {{ item[`${$i18n.locale}_subtitle`] }}
        </h2>
      </v-sheet>
    </div>

    <div class="mx-auto">
      <div :class="!isMobile && 'px-16'">
        <VideoContents
          :src="`${$imageUrl}/${subtitle_file}`"
          :style="`max-height: calc(100vh - 150px); min-height: ${isMobile ? '' : '500px'}`"
          class="w-full overflow-hidden d-flex align-center"
        />

        <v-sheet v-if="isMobile" class="custom-gradient my-1" height="16" />
      </div>
      <v-sheet :class="[isMobile ? 'px-6' : 'px-16']" style="color: #59595b">
        <v-row :class="[isMobile ? 'pt-6' : 'mt-lg-6 py-16', isRTL && 'ltr']">
          <v-col :class="isRTL && 'rtl'" lg="7" md="6" xl="8">
            <h3
              :class="[
                'font-weight-regular success--text mb-4 text-center text-sm-start',
                isRTL ? 'ravi' : 'bel',
                isMobile ? (isRTL ? 'f-30' : 'f-30') : isRTL ? 'f-35' : 'f-45'
              ]"
            >
              {{ item[`${$i18n.locale}_body_subtitle`] }}
            </h3>
            <div
              :class="[
                'mb-6 text-pre-line',
                { 'mt-8': !isMobile },
                isMobile ? 'f-20' : 'f-25',
                isRTL ? 'anjoman font-weight-bold' : 'font-weight-light'
              ]"
              :style="`line-height: ${isRTL ? '40px' : '35px'}`"
              v-html="item[`${$i18n.locale}_body`]"
            />
          </v-col>
          <v-col v-if="!isMobile" class="pl-md-8 mb-md-8" lg="5" md="6" xl="4">
            <v-img :src="`${$imageUrl}/${body_file}`" min-height="600" />
          </v-col>
        </v-row>
      </v-sheet>

      <v-img v-if="isMobile" :src="`${$imageUrl}/${body_file}`" min-height="600" />

      <v-sheet :class="[isMobile ? 'px-6' : 'px-16']" style="color: #59595b">
        <!--<div-->
        <!--  :class="[-->
        <!--    'mb-6 text-pre-line',-->
        <!--    isMobile ? 'f-20 mt-4' : 'f-25',-->
        <!--    isRTL ? 'anjoman font-weight-bold' : 'font-weight-light'-->
        <!--  ]"-->
        <!--  :style="`line-height: ${isRTL ? '40px' : '35px'}`"-->
        <!--  v-html="item[`${$i18n.locale}_body_description_2`]"-->
        <!--/>-->
        <!--<h4-->
        <!--  :class="[-->
        <!--    'font-weight-regular success&#45;&#45;text text-center text-sm-start',-->
        <!--    isMobile ? (isRTL ? 'f-30' : 'f-30') : isRTL ? 'f-35' : 'f-45',-->
        <!--    isRTL ? 'ravi mt-8 mb-6' : 'bel mb-4'-->
        <!--  ]"-->
        <!-- >-->
        <!--  {{ item[`${$i18n.locale}_body_title_2`] }}-->
        <!--</h4>-->
        <!--<div-->
        <!--  :class="[-->
        <!--    'mb-6 text-pre-line',-->
        <!--    isMobile ? 'f-20' : 'f-25',-->
        <!--    isRTL ? 'anjoman font-weight-bold' : 'font-weight-light'-->
        <!--  ]"-->
        <!--  :style="`line-height: ${isRTL ? '40px' : '35px'}`"-->
        <!--  v-html="item[`${$i18n.locale}_body_description_3`]"-->
        <!--/>-->

        <div
          :class="[
            'd-flex align-center text-center',
            isMobile ? 'mt-10 justify-center' : 'mt-16 pt-8',
            isRTL && 'mb-6'
          ]"
        >
          <h2
            :class="[
              'font-weight-regular d-block',
              isMobile ? (isRTL ? 'f-33' : 'f-35') : isRTL ? 'f-33' : 'f-50',
              isRTL ? 'ravi' : 'bel'
            ]"
            style="color: #595958 !important"
          >
            {{ $t('impactPage.other_links') }}
          </h2>

          <template v-if="!isMobile">
            <v-spacer />
            <nuxt-link
              :class="['text-decoration-none f-18', isRTL && 'anjoman font-weight-bold']"
              :to="localePath('/impact')"
              style="color: #939393 !important"
            >
              {{ $t('impactPage.see_all') }}
            </nuxt-link>
          </template>
        </div>
      </v-sheet>

      <div :class="['impact-content', isMobile && 'coverflow']">
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
        spaceBetween: this.isMobile ? 14 : 28,
        slidesPerView: 1.3,
        breakpoints: {
          1904: {
            slidesPerView: 2.5
          },
          1264: {
            slidesPerView: 2.2
          },
          960: {
            slidesPerView: 1.4
          },
          760: {
            slidesPerView: 1.4
          }
        }
      };
    },
    files() {
      return this.item.files;
    },
    column_section_file() {
      const result = this.files.find((item) => item.type === 'column_section_file');
      return result ? result.url : '';
    },
    subtitle_file() {
      const result = this.files.find((item) => item.type === 'subtitle_file');
      return result ? result.url : '';
    },
    body_file() {
      const result = this.files.find((item) => item.type === 'body_file');
      return result ? result.url : '';
    }
  }
};
</script>

<style lang="scss">
.impact-content {
  &.coverflow {
    .swiper-slide.swiper-slide-active {
      transition: transform ease-in 0.2s;
    }

    .swiper-slide.swiper-slide-next,
    .swiper-slide.swiper-slide-prev {
      transform: scale(0.9);
      transition: transform ease-out 0.1s;
    }
  }
}
</style>

<style lang="scss" scoped>
.custom-shadow {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.3) !important;
}

.custom-rounded-b-lg {
  border-bottom-left-radius: 47px !important;
  border-bottom-right-radius: 47px !important;
}
</style>
