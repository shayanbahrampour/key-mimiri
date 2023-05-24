<template>
  <div>
    <CustomCarousel
      :items="[
        {
          src: '/images/temp/cover-5.png',
          title: $t('impactPage.slider.title'),
          description: $t('impactPage.slider.description')
        }
      ]"
    />

    <v-sheet :class="['mx-auto', isMobile ? 'px-2 mt-16' : 'px-16 my-16']" :max-width="globalMaxWidth">
      <h1 :class="['bel f-50 grey--text text--darken-2 font-weight-regular', { 'text-center': isMobile }]">
        {{ $t('impactPage.title') }}
      </h1>

      <CustomTabs :items="tabs" class="mt-4" />

      <v-row v-if="!isMobile" class="my-8">
        <v-col v-for="(item, index) in items" :key="index" cols="12" md="6" xl="4">
          <ImpactCards :item="item" />
        </v-col>
      </v-row>
    </v-sheet>

    <client-only v-if="isMobile">
      <swiper
        v-if="items.length !== 0"
        id="impactSwiper"
        key="impactSwiper"
        :class="['w-full px-6', isMobile ? 'mt-8 mb-16' : 'my-8']"
        :dir="isRTL ? 'rtl' : 'ltr'"
        :options="swiperOptions"
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
  layout: 'impact',
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
        { id: 1, title: 'Rise from the society return to the society', src: '/images/temp/cover-1.jpg' },
        { id: 2, title: 'Rise from the society return to the society', src: '/images/temp/cover-3.png' },
        { id: 3, title: 'Rise from the society return to the society', src: '/images/temp/cover-2.png' },
        { id: 4, title: 'Rise from the society return to the society', src: '/images/temp/cover-1.jpg' },
        { id: 1, title: 'Rise from the society return to the society', src: '/images/temp/cover-1.jpg' },
        { id: 2, title: 'Rise from the society return to the society', src: '/images/temp/cover-3.png' },
        { id: 3, title: 'Rise from the society return to the society', src: '/images/temp/cover-2.png' },
        { id: 4, title: 'Rise from the society return to the society', src: '/images/temp/cover-1.jpg' }
      ],
      swiperOptions: {
        spaceBetween: 16,
        slidesPerView: 1.1,
        grabCursor: true
      }
    };
  },
  head() {
    return {
      title: this.$t('pageTitles.impact_stories')
    };
  },
  async fetch() {
    try {
      const { data } = await this.$store.dispatch('impact/getList', { id: 'featured' });
      console.log(data.results);
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped></style>
