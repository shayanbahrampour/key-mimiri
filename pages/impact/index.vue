<template>
  <div>
    <CustomCarousel
      :items="[
        {
          src: '/images/temp/cover-5.png',
          title: $t('impactPage.slider.title'),
          description: $t('impactPage.slider.description')
        },
        {
          src: '/images/temp/cover-4.png',
          title: $t('impactPage.slider.title'),
          description: $t('impactPage.slider.description')
        }
      ]"
    />

    <v-sheet :class="['mx-auto', isMobile ? 'px-2 mt-16' : 'px-16 my-16']" :max-width="globalMaxWidth">
      <h1 :class="['bel f-50 grey--text text--darken-2 font-weight-regular', { 'text-center': isMobile }]">
        {{ $t('impactPage.title') }}
      </h1>

      <CustomTabs
        :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
        class="mt-4"
        @select="
          model.category = $event;
          $fetch();
        "
      />

      <template v-if="!isMobile">
        <v-row v-if="items.length" class="my-8" align="stretch">
          <v-col v-for="(item, index) in items" :key="index" cols="12" md="6" xl="4">
            <ImpactCards :item="item" class="h-full" />
          </v-col>
        </v-row>
        <div v-else-if="!$fetchState.pending" class="mt-8">
          {{ $t('impactPage.not_found') }}
        </div>
      </template>
    </v-sheet>
    <client-only v-if="isMobile">
      <swiper
        v-if="items && items.length !== 0"
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
      <div v-else-if="!$fetchState.pending" class="mt-8">
        {{ $t('impactPage.not_found') }}
      </div>
    </client-only>

    <div v-if="$fetchState.pending" class="d-flex align-center justify-center">
      <v-progress-circular indeterminate class="mx-auto" />
    </div>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';
import ImpactCards from '~/components/impact/ImpactCards.vue';
import CustomCarousel from '~/components/shared/CustomCarousel.vue';
import { mapGetters } from 'vuex';

export default {
  components: { ImpactCards, CustomTabs, CustomCarousel },
  data() {
    return {
      model: {
        category: null
      },
      pagination: {
        current_page: 1
      },
      items: [],
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
  computed: {
    ...mapGetters({
      categories: 'impact/categories'
    })
  },
  async fetch() {
    try {
      const { data } = await this.$store.dispatch('impact/getList', {
        params: {
          page: this.pagination.current_page,
          impact_story_category_id: this.model.category
        }
      });

      this.items = data.results;
      this.pagination = data.pagination;
    } catch (e) {
      console.log(e);
    }
  },
  created() {
    if (this.categories && this.categories.length === 0) this.$store.dispatch('impact/getCategories');
  }
};
</script>

<style lang="scss" scoped></style>
