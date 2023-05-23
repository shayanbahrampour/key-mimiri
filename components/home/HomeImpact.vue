<template>
  <div>
    <v-sheet :max-width="globalMaxWidth" :class="['mx-auto grey--text text--darken-2', isMobile ? 'px-6' : 'px-16']">
      <div :class="['d-flex align-center mb-8', { 'flex-column text-center': isMobile }]">
        <h3
          :class="[
            'font-weight-regular bel grey--text text--darken-2 flex-shrink-0',
            isMobile ? 'f-45 text-center d-block' : 'f-50'
          ]"
        >
          Impact Stories
        </h3>

        <p
          :class="`mb-0 ${!isMobile && `m${isRTL ? 'r' : 'l'}-8 p${isRTL ? 'r' : 'l'}-8`}`"
          :style="`${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #aaa`}`"
        >
          Patients are the center of all projects being conducted in the Cobel Group. Stories of hope, innovation,
          collaboration, inspiration and empowerment helps us measure our impact and inspire us to create more.
        </p>
      </div>

      <CustomTabs :items="tabs" />
    </v-sheet>

    <v-sheet :max-width="globalMaxWidth" class="mx-auto">
      <client-only>
        <swiper
          v-if="items.length !== 0"
          id="impactSwiper"
          key="impactSwiper"
          :class="['w-full mr-0', isMobile ? 'mt-8 px-6' : 'my-8 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <ImpactCards :item="item" class="mt-2 mb-3" />
          </swiper-slide>
        </swiper>
      </client-only>
    </v-sheet>
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
          title: 'Woman empowerment future',
          descriptions:
            'Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...',
          src: '/images/temp/cover-1.jpg'
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
          src: '/images/temp/cover-1.jpg'
        }
      ],
      swiperOptions: {
        spaceBetween: 16,
        slidesPerView: 1.1,
        grabCursor: true,
        breakpoints: {
          1904: {
            slidesPerView: 2.5
          },
          1264: {
            slidesPerView: 1.8
          },
          960: {
            slidesPerView: 1.4
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
