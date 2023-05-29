<template>
  <div>
    <v-sheet :class="['mx-auto grey--text text--darken-2', isMobile ? 'px-6' : 'px-16']" :max-width="globalMaxWidth">
      <div :class="['d-flex align-center mb-8', { 'flex-column text-center': isMobile }]">
        <h3
          :class="[
            'font-weight-regular bel grey--text text--darken-2 flex-shrink-0',
            isMobile ? 'f-45 text-center d-block' : 'f-50'
          ]"
        >
          {{ $t('homePage.impact.title') }}
        </h3>

        <p
          :class="`mb-0 ${!isMobile && `m${isRTL ? 'r' : 'l'}-8 p${isRTL ? 'r' : 'l'}-8`}`"
          :style="`${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #aaa`}`"
        >
          {{ $t('homePage.impact.description') }}
        </p>
      </div>

      <CustomTabs
        :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
        @select="
          model.category = $event;
          $fetch();
        "
      />
    </v-sheet>

    <v-sheet :max-width="globalMaxWidth" class="mx-auto">
      <client-only>
        <swiper
          id="impactSwiper"
          key="impactSwiper"
          :class="[`w-full m${isRTL ? 'l' : 'r'}-0`, isMobile ? 'mt-8 px-6' : 'my-8 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <template v-if="items.length !== 0">
            <swiper-slide v-for="(item, index) in items" :key="index">
              <ImpactCards :item="item" class="mt-2 mb-3" style="min-height: 400px" />
            </swiper-slide>
          </template>
          <swiper-slide v-if="$fetchState.pending">
            <v-progress-circular indeterminate style="min-height: 400px" />
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
      items: [],
      swiperOptions: {
        spaceBetween: 32,
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
          page: 1,
          impact_story_category_id: this.model.category
        }
      });

      this.items = data.results;
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
