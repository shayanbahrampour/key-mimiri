<template>
  <div class="grey--text text--darken-2">
    <v-sheet :max-width="globalMaxWidth" class="mx-auto">
      <h3
        :class="[
          'font-weight-regular bel grey--text text--darken-2',
          isMobile ? 'px-4 f-45 text-center d-block' : 'px-16 f-50'
        ]"
      >
        Storytellers
      </h3>
      <client-only>
        <swiper
          :class="['w-full mr-0', isMobile ? 'mt-8 px-8' : 'my-8 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="{
            spaceBetween: 32,
            slidesPerView: 1.1,
            grabCursor: true,
            breakpoints: {
              768: {
                slidesPerView: 2.5
              },
              960: {
                slidesPerView: 4.2
              },
              1450: {
                slidesPerView: 5.2
              },
              1904: {
                slidesPerView: 5.7
              }
            }
          }"
        >
          <swiper-slide v-for="(item, index) in items" :key="index" class="d-flex flex-column align-center">
            <v-card class="overflow-hidden mt-2" flat style="border-radius: 80px">
              <v-img eager :height="small ? '300' : '380'" :src="item.src" :width="small ? '250' : '100%'" />
            </v-card>
            <div class="text-center bel f-24 py-4">
              {{ item.title }}
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [
        { id: 1, title: 'Masoumeh Seyedi', src: '/images/home/storytellers/1.png' },
        { id: 2, title: 'Nima Brardjanian', src: '/images/home/storytellers/2.png' },
        { id: 3, title: 'Bahador Nayebi', src: '/images/home/storytellers/3.png' },
        { id: 4, title: 'Mohamad javid', src: '/images/home/storytellers/4.png' },
        { id: 1, title: 'Masoumeh Seyedi', src: '/images/home/storytellers/1.png' },
        { id: 2, title: 'Nima Brardjanian', src: '/images/home/storytellers/2.png' },
        { id: 3, title: 'Bahador Nayebi', src: '/images/home/storytellers/3.png' },
        { id: 4, title: 'Mohamad javid', src: '/images/home/storytellers/4.png' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
