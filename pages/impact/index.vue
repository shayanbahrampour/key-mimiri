<template>
  <div>
    <CustomCarousel
      :items="[
        {
          src: '/images/temp/cover-5.png',
          title: $t('impactPage.slider.title'),
          description: $t('impactPage.slider.description')
        }
      ]"
    />

    <v-sheet :class="['mx-auto mt-16', isMobile ? 'px-2' : $vuetify.breakpoint.xl ? 'px-12' : 'px-16']">
      <h1
        :class="[
          'grey--text text--darken-2 font-weight-regular',
          isRTL ? 'ravi' : 'bel',
          isMobile ? (isRTL ? 'f-30' : 'f-50') : isRTL ? 'f-40' : 'f-50',
          { 'text-center': isMobile }
        ]"
      >
        {{ $t('impactPage.title') }}
      </h1>

      <CustomTabs
        id="categories"
        :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
        class="mt-4"
        @select="updateCategory"
      />
    </v-sheet>
    <v-sheet :class="['mx-auto mb-16 mt-6 pb-16', isMobile ? 'px-4' : $vuetify.breakpoint.xl ? 'px-12' : 'px-16']">
      <v-row v-if="items.length" align="stretch">
        <v-col v-for="(item, index) in items" :key="index" cols="12" md="6" xl="4">
          <ImpactCards
            :item="item"
            class="h-full"
            style="border-radius: 80px"
            :lastCard="index + 1 === items.length && pagination.last_page !== pagination.current_page"
            @next="nextPage"
          />
        </v-col>
      </v-row>
      <template v-else-if="!$fetchState.pending">{{ $t('impactPage.not_found') }}</template>

      <v-card
        v-if="$fetchState.pending"
        class="overflow-hidden custom-card d-flex align-center justify-center"
        color="white"
        flat
        min-height="250"
        style="border-radius: 80px"
      >
        <v-progress-circular class="mx-auto" indeterminate />
      </v-card>
    </v-sheet>
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
        last_page: 1,
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
          category_id: this.model.category,
          page: this.pagination.current_page
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
  },
  methods: {
    updateCategory(event) {
      this.pagination.current_page = 1;
      this.model.category = event;
      this.items = [];
      this.$fetch();
      this.$vuetify.goTo('#categories');
    },
    nextPage() {
      if (this.pagination.last_page > 1 && this.pagination.current_page < this.pagination.last_page) {
        this.pagination.current_page++;
        this.$fetch();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
