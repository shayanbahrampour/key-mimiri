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
          <swiper-slide v-if="$fetchState.pending">
            <v-card
              class="overflow-hidden h-full d-flex align-center justify-center"
              color="#eee"
              flat
              style="border-radius: 75px !important"
            >
              <v-progress-circular indeterminate style="min-height: 400px" />
            </v-card>
          </swiper-slide>
          <template v-else>
            <swiper-slide
              v-for="(item, index) in items"
              :key="index"
              :class="[
                'd-flex flex-column transition-ease-in-out',
                { 'active-slide': index === active },
                { 'desktop-view': !isMobile }
              ]"
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
                  {{ item[`${$i18n.locale}_full_name`] }}
                </nuxt-link>
              </div>
            </swiper-slide>
            <template v-if="!isMobile">
              <swiper-slide />
              <swiper-slide />
            </template>
          </template>
        </swiper>
      </client-only>

      <div v-if="items.length === 0 && !$fetchState.pending" class="mt-8 text-center">
        {{ $t('homePage.storytellers.not_found') }}
      </div>
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
      items: []
    };
  },
  async fetch() {
    try {
      const { data } = await this.$store.dispatch('storyteller/getFeaturedStorytellers', {
        params: { page: 1 }
      });
      this.items = data.results;
      this.active = null;
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    swiperOptions() {
      return {
        grabCursor: true,
        setWrapperSize: true,
        preventClicks: true,
        touchMoveStopPropagation: true,
        touchStartForcePreventDefault: true,
        preventClicksPropagation: true,
        preventInteractionOnTransition: true,
        slideToClickedSlide: true,
        centerInsufficientSlides: true,
        edgeSwipeDetection: 'prevent',
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
  },
  watch: {
    isMobile() {
      if (this.isMobile) this.active = null;
    }
  }
};
</script>

<style lang="scss">
.home-story-tellers {
  .swiper-slide {
    &.desktop-view {
      min-width: 310px;
    }

    &.active-slide {
      width: 600px !important;
      transition: width ease-in 0.6s;
    }
  }
}
</style>
