<template>
  <div class="grey--text text--darken-2 home-story-tellers mt-16 pt-6">
    <v-sheet :max-width="globalMaxWidth" class="mx-auto">
      <h3
        :class="['font-weight-regular bel', isMobile ? 'px-4 f-45 text-center d-block' : 'px-16 f-50']"
        style="color: #59595b"
      >
        {{ $t('homePage.storytellers.title') }}
      </h3>
      <client-only>
        <swiper
          ref="home-storytellers"
          :class="['w-full me-0', isMobile ? 'mt-4 px-8' : 'my-5 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <swiper-slide
            v-for="(item, index) in items"
            :key="index"
            :class="['d-flex flex-column align-center', { 'active-slide': index === active }]"
          >
            <HomeStoryTellerCard
              :width="310"
              :item="item"
              :active="index === active"
              @select="$event ? (active = null) : (active = index)"
            />
            <div class="d-flex justify-start w-full">
              <nuxt-link
                style="width: 310px"
                :class="[
                  'grey--text text--darken-3 text-decoration-none text-center bel py-4',
                  isMobile ? 'f-24' : 'f-28'
                ]"
                :to="localePath(`/storytellers/${item.id}`)"
              >
                {{ item.title }}
              </nuxt-link>
            </div>
          </swiper-slide>
          <swiper-slide v-if="!isMobile" />
        </swiper>
      </client-only>
    </v-sheet>
  </div>
</template>

<script>
import HomeStoryTellerCard from '~/components/home/HomeStoryTellerCard.vue';

export default {
  components: { HomeStoryTellerCard },
  data() {
    return {
      active: null,
      items: [
        { id: 1, title: 'Masoumeh Seyedi', src: '/images/storytellers/masoumeh.png' },
        { id: 2, title: 'Khosro Aghajanian', src: '/images/storytellers/khosro.png' },
        { id: 2, title: 'Mohsen Dastjerdi', src: '/images/storytellers/mohsen.png' },
        { id: 4, title: 'Mohamad javid', src: '/images/storytellers/mohamad.png' },
        { id: 3, title: 'Bahador Nayebi', src: '/images/storytellers/bahador.png' }
        // { id: 2, title: 'Nima Brardjanian', src: '/images/storytellers/nima.png' }
      ]
    };
  },
  watch: {
    isMobile() {
      if (this.isMobile) this.active = null;
    }
  },
  computed: {
    swiperOptions() {
      return {
        grabCursor: true,
        spaceBetween: 28,
        slidesPerView: 1.2,
        on: {
          click() {
            if (typeof this.clickedIndex !== 'undefined') {
              this.slideTo(this.clickedIndex);
            }
          }
        },
        breakpoints: {
          760: {
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
      };
    }
  }
};
</script>

<style lang="scss">
.home-story-tellers {
  .active-slide {
    width: 600px !important;
    transition: width ease-in 0.3s;
  }
}
</style>
