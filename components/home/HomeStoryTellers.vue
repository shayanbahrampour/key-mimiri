<template>
  <div class="grey--text text--darken-2">
    <v-sheet :max-width="globalMaxWidth" class="mx-auto">
      <h3
        :class="['font-weight-regular bel', isMobile ? 'px-4 f-45 text-center d-block' : 'px-16 f-50']"
        style="color: #59595b"
      >
        {{ $t('homePage.storytellers.title') }}
      </h3>
      <client-only>
        <swiper
          :class="['w-full me-0', isMobile ? 'mt-4 px-8' : 'my-5 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="{
            spaceBetween: 28,
            slidesPerView: 1.1,
            grabCursor: true,
            breakpoints: {
              500: {
                slidesPerView: 1.8
              },
              768: {
                slidesPerView: 2.5
              },
              960: {
                slidesPerView: 3.2
              },
              1264: {
                slidesPerView: 4.2
              },
              1550: {
                slidesPerView: 5.2
              },
              1904: {
                slidesPerView: 5.7
              }
            }
          }"
        >
          <swiper-slide v-for="(item, index) in items" :key="index" class="d-flex flex-column align-center">
            <v-card
              :to="localePath(`/storytellers/${item.id}`)"
              class="overflow-hidden mt-2"
              flat
              style="border-radius: 75px; border: 1px solid #ececec; overflow: hidden"
            >
              <v-img :height="small ? 300 : 350" :src="item.src" :width="small ? '250' : '100%'" eager />
            </v-card>
            <nuxt-link
              :class="[
                'grey--text text--darken-3 text-decoration-none text-center bel py-4',
                isMobile ? 'f-24' : 'f-28'
              ]"
              :to="localePath(`/storytellers/${item.id}`)"
            >
              {{ item.title }}
            </nuxt-link>
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
        { id: 1, title: 'Masoumeh Seyedi', src: '/images/temp/storytellers/1.png' },
        { id: 2, title: 'Nima Brardjanian', src: '/images/temp/storytellers/2.png' },
        { id: 3, title: 'Bahador Nayebi', src: '/images/temp/storytellers/3.png' },
        { id: 4, title: 'Mohamad javid', src: '/images/temp/storytellers/4.png' },
        { id: 1, title: 'Masoumeh Seyedi', src: '/images/temp/storytellers/1.png' },
        { id: 2, title: 'Nima Brardjanian', src: '/images/temp/storytellers/2.png' },
        { id: 3, title: 'Bahador Nayebi', src: '/images/temp/storytellers/3.png' },
        { id: 4, title: 'Mohamad javid', src: '/images/temp/storytellers/4.png' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
