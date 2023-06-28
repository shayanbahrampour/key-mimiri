<template>
  <div :class="['my-16 home-impact', isMobile ? 'coverflow' : 'pt-3']">
    <v-sheet :class="['mx-auto grey--text text--darken-2', { 'px-16': !isMobile }]" :max-width="globalMaxWidth">
      <div :class="['d-flex align-center', isMobile ? 'flex-column text-center px-6 mb-8' : 'mb-14']">
        <h3
          :class="[
            'font-weight-regular grey--text text--darken-2 flex-shrink-0',
            isRTL ? 'ravi' : 'bel',
            { 'text-center d-block': isMobile },
            isMobile ? (isRTL ? 'f-33' : 'f-45') : isRTL ? 'f-45' : 'f-50'
          ]"
        >
          {{ $t('homePage.impact.title') }}
        </h3>

        <v-divider v-if="isMobile" :class="['w-full', { 'mt-3': isRTL }]" />

        <p
          :class="[
            'mb-0 py-4',
            isMobile ? 'f-16' : 'f-20 ms-8 ps-8',
            isRTL ? 'font-weight-bold anjoman' : 'font-weight-light'
          ]"
          :style="`${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #59595B`}; color: #59595B;${
            isRTL && !isMobile && 'line-height:35px'
          }`"
        >
          {{ $t('homePage.impact.description') }}
        </p>
      </div>

      <CustomTabs
        id="categories"
        :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
        @select="updateCategory"
      />
    </v-sheet>

    <v-sheet :max-width="globalMaxWidth" class="mx-auto">
      <client-only>
        <swiper
          id="impactSwiper"
          key="impactSwiper"
          :class="[`w-full me-0`, isMobile ? 'mt-8 px-6' : 'my-8 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <template v-if="items.length !== 0">
            <swiper-slide v-for="(item, index) in items" :key="index">
              <ImpactCards :item="item" :showSummary="true" :style="`border-radius: ${isMobile ? '30px' : '80px'}`" />
            </swiper-slide>
          </template>
          <swiper-slide v-if="$fetchState.pending">
            <v-card
              class="overflow-hidden h-full d-flex align-center justify-center"
              color="#eee"
              height="340"
              flat
              :style="`border-radius: ${isMobile ? '30px' : '80px'}`"
            >
              <v-progress-circular indeterminate style="min-height: 400px" />
            </v-card>
          </swiper-slide>
        </swiper>

        <div v-if="items.length === 0 && !$fetchState.pending" class="mt-8 text-center">
          {{ $t('impactPage.not_found') }}
        </div>
      </client-only>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CustomTabs from '~/components/shared/CustomTabs.vue';
import ImpactCards from '~/components/impact/ImpactCards.vue';

export default {
  components: { ImpactCards, CustomTabs },
  data() {
    return {
      model: {
        category: null
      },
      items: []
    };
  },
  computed: {
    ...mapGetters({
      categories: 'impact/categories'
    }),
    swiperOptions() {
      return {
        grabCursor: true,
        centeredSlidesBounds: true,
        centeredSlides: this.isMobile,
        spaceBetween: this.isMobile ? 14 : 28,
        slidesPerView: 1.2,
        breakpoints: {
          1904: {
            slidesPerView: 2.5
          },
          1264: {
            slidesPerView: 1.8
          },
          960: {
            slidesPerView: 1.4
          },
          768: {
            slidesPerView: 1.1
          }
        }
      };
    }
  },
  async fetch() {
    try {
      const { data } = await this.$store.dispatch('impact/getList', {
        params: { page: 1, category_id: this.model.category }
      });
      this.items = data.results;
    } catch (e) {
      console.log(e);
    }
  },
  created() {
    if (this.categories && this.categories.length === 0) this.$store.dispatch('impact/getCategories');
  },
  methods: {
    updateCategory(event) {
      this.model.category = event;
      this.items = [];
      this.$fetch();
      this.$vuetify.goTo('#categories');
    }
  }
};
</script>

<style lang="scss">
.home-impact {
  &.coverflow {
    .swiper-slide.swiper-slide-active {
      transition: transform ease-in 0.2s;
    }

    .swiper-slide.swiper-slide-next,
    .swiper-slide.swiper-slide-prev {
      transform: scale(0.9);
      transition: transform ease-out 0.1s;
    }
  }
}
</style>
