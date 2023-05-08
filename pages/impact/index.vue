<template>
  <div>
    <CustomCarousel
      :items="[
        {
          title: 'Woman empowerment future enrichment',
          src: '/images/impact/cover.png',
          description:
            'Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...'
        },
        {
          title: 'Woman empowerment',
          src: '/images/impact/cover.png',
          description:
            'Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...'
        }
      ]"
    />

    <v-sheet :max-width="globalMaxWidth" :class="['mx-auto px-4', isMobile ? 'mt-16' : 'my-16']">
      <h1 :class="['bel f-50 grey--text text--darken-2 font-weight-regular', { 'text-center': isMobile }]">
        Impact Story
      </h1>

      <CustomTabs class="mt-4" :items="tabs" />

      <v-row v-if="!isMobile" v-else class="my-8">
        <v-col v-for="(item, index) in items" :key="index" lg="4">
          <ImpactCards :item="item" />
        </v-col>
      </v-row>
    </v-sheet>

    <client-only v-if="isMobile">
      <swiper
        v-if="items.length !== 0"
        id="impactSwiper"
        key="impactSwiper"
        :options="swiperOptions"
        :class="['w-full px-4', isMobile ? 'mt-8 mb-16' : 'my-8']"
        :dir="isRTL ? 'rtl' : 'ltr'"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <ImpactCards :item="item" class="mt-2 mb-3" />
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';
import ImpactCards from '~/components/impact/ImpactCards.vue';
import CustomCarousel from '~/components/shared/CustomCarousel.vue';

export default {
  components: { ImpactCards, CustomTabs, CustomCarousel },
  data() {
    return {
      tabs: [
        { title: 'All', value: '' },
        { title: 'Best talent', value: '' },
        { title: 'Long-term value creation', value: '' },
        { title: 'Social responsibility', value: '' },
        { title: 'Localized know-how', value: '' }
      ],
      items: [
        { id: 1, title: 'Rise from the society return to the society', src: '/images/temp/ladan.png' },
        { id: 2, title: 'Rise from the society return to the society', src: '/images/temp/ladan.png' }
      ],
      swiperOptions: {
        spaceBetween: 16,
        slidesPerView: 1.1,
        grabCursor: true,
        breakpoints: {
          991: {
            slidesPerView: 4.5
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
