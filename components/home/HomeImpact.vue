<template>
  <div>
    <v-sheet :max-width="globalMaxWidth" class="px-8 mx-auto grey--text text--darken-2">
      <h3
        :class="['font-weight-regular bel grey--text text--darken-2', isMobile ? 'f-45 text-center d-block' : 'f-50']"
      >
        Impact Stories
      </h3>

      <CustomTabs class="mt-4" :items="tabs" />
    </v-sheet>

    <client-only>
      <swiper
        v-if="items.length !== 0"
        id="impactSwiper"
        key="impactSwiper"
        :options="swiperOptions"
        :class="['w-full mr-0 px-8', isMobile ? 'mt-8' : 'my-8']"
        :dir="isRTL ? 'rtl' : 'ltr'"
      >
        <div
          v-if="!isMobile"
          :style="`flex-shrink: 0; width: calc((100vw - ${globalMaxWidth}px) / 2) !important; margin: 0 !important`"
        />
        <swiper-slide v-for="(item, index) in items" :key="index">
          <ImpactCards :item="item" class="mt-2 mb-3" />
        </swiper-slide>
        <swiper-slide v-if="!isMobile" />
      </swiper>
    </client-only>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';
import ImpactCards from '~/components/impact/ImpactCards.vue';

export default {
  components: { ImpactCards, CustomTabs },
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
        {
          id: 1,
          title: 'Woman empowerment future enrichment',
          descriptions:
            'Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...',
          src: '/images/temp/ladan.png'
        },
        {
          id: 2,
          title: 'Rise from the society return to the society',
          descriptions:
            'Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...',
          src: '/images/impact/cover.png'
        },
        {
          id: 2,
          title: 'Rise from the society return to the society',
          descriptions:
            'Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...',
          src: '/images/home/services/cover.jpg'
        }
      ],
      swiperOptions: {
        spaceBetween: 16,
        slidesPerView: 1.1,
        grabCursor: true,
        breakpoints: {
          991: {
            slidesPerView: 1.8
          }
        }
      }
    };
  }
};
</script>

<style scoped lang="scss"></style>
