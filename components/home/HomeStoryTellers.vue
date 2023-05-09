<template>
  <div class="grey--text text--darken-2">
    <v-sheet :max-width="globalMaxWidth" class="px-8 mx-auto">
      <h3
        :class="['font-weight-regular bel grey--text text--darken-2', isMobile ? 'f-45 text-center d-block' : 'f-50']"
      >
        Storytellers
      </h3>
    </v-sheet>
    <client-only>
      <swiper
        :class="['w-full mr-0 px-8', isMobile ? 'mt-8' : 'my-8']"
        :dir="isRTL ? 'rtl' : 'ltr'"
        :options="{
          spaceBetween: 16,
          slidesPerView: 1.1,
          grabCursor: true,
          breakpoints: {
            768: {
              slidesPerView: 2.5
            },
            960: {
              slidesPerView: 3.5
            },
            1300: {
              slidesPerView: 4.5
            }
          }
        }"
      >
        <div
          v-if="!isMobile"
          :style="`flex-shrink: 0; width: calc((100vw - ${globalMaxWidth}px) / 2) !important; margin: 0 !important`"
        />
        <swiper-slide v-for="(item, index) in items" :key="index">
          <v-card class="overflow-hidden mt-2" flat style="border-radius: 80px">
            <v-img :src="item.src" height="380" width="100%" />
          </v-card>
          <div class="text-center bel f-30 py-4">
            {{ item.title }}
          </div>
        </swiper-slide>
        <swiper-slide v-if="!isMobile" />
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, title: 'Masoumeh Seyedi', src: '/images/home/storytellers/1.png' },
        { id: 2, title: 'Nima Brardjanian', src: '/images/home/storytellers/2.png' },
        { id: 3, title: 'Bahador Nayebi', src: '/images/home/storytellers/3.png' },
        { id: 4, title: 'Mohamad javid', src: '/images/home/storytellers/4.png' },
        { id: 1, title: 'Masoumeh Seyedi', src: '/images/home/storytellers/1.png' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
