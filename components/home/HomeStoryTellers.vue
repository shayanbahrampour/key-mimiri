<template>
  <div class="grey--text text--darken-2 home-story-tellers mt-16 pt-6">
    <v-sheet :max-width="globalMaxWidth" class="mx-auto">
      <h3
        :class="[
          'font-weight-regular',
          isMobile ? 'px-4 text-center d-block' : 'px-16',
          isRTL ? 'ravi' : 'bel',
          isMobile ? (isRTL ? 'f-33 pb-2' : 'f-45') : isRTL ? 'f-45 pb-2' : 'f-50'
        ]"
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
            v-for="(item, index) in isRTL ? itemsRTL : items"
            :key="index"
            :class="['d-flex flex-column align-center transition-ease-in-out', { 'active-slide': index === active }]"
          >
            <HomeStoryTellerCard
              :active="index === active"
              :item="item"
              :width="310"
              @select="$event ? (active = null) : (active = index)"
            />
            <div class="d-flex justify-start w-full">
              <nuxt-link
                :class="[
                  'grey--text text--darken-3 text-decoration-none text-center py-4',
                  isMobile ? 'f-24' : 'f-28',
                  isRTL ? 'ravi' : 'bel'
                ]"
                :to="localePath(`/storytellers/${item.id}`)"
                style="width: 310px"
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
      ],
      itemsRTL: [
        { id: 1, title: 'معصومه سیدی', src: '/images/storytellers/masoumeh.png' },
        { id: 2, title: 'خسرو آقاجانیان', src: '/images/storytellers/khosro.png' },
        { id: 2, title: 'محسن دستجردی', src: '/images/storytellers/mohsen.png' },
        { id: 4, title: 'محمد جاوید', src: '/images/storytellers/mohamad.png' },
        { id: 3, title: 'بهادر نایبی', src: '/images/storytellers/bahador.png' }
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
        longSwipes: false,
        preventClicks: true,
        touchMoveStopPropagation: true,
        touchStartForcePreventDefault: true,
        preventClicksPropagation: true,
        preventInteractionOnTransition: true,
        slideToClickedSlide: false,
        centerInsufficientSlides: true,
        edgeSwipeDetection: 'prevent',
        spaceBetween: 28,
        slidesPerView: 1.2,
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
    transition: width ease-in 0.6s;
  }
}
</style>
