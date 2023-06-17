<template>
  <div class="pb-16">
    <NewsCarousel :items="[{ src: '/images/temp/cover-2.png' }]" />

    <v-sheet v-if="!isMobile" :max-width="globalMaxWidth" class="mx-auto px-10 mt-16">
      <NewsCategory
        v-if="!isMobile"
        :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
        :title="isRTL ? 'مهمترین ها' : 'More important'"
        class="mb-16 mx-6"
      />
      <NewsCard :path="localePath('/news/1')" class="mx-6" />
    </v-sheet>
    <NewsCard v-else :path="localePath('/news/1')" :title="isRTL ? 'مهمترین ها' : 'More important'" class="mt-10" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsCard from '~/components/news/NewsCard.vue';
import NewsCarousel from '~/components/news/NewsCarousel.vue';
import NewsCategory from '~/components/news/NewsCategory.vue';

export default {
  components: { NewsCategory, NewsCard, NewsCarousel },
  data() {
    return {
      pagination: {
        current_page: 1
      },
      items: []
    };
  },
  head() {
    return {
      title: this.$t('pageTitles.press')
    };
  },
  computed: {
    ...mapGetters({
      categories: 'news/categories'
    })
  },
  async fetch() {
    try {
      const { data } = await this.$store.dispatch('news/getList', {
        params: {
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
    if (this.categories && this.categories.length === 0) this.$store.dispatch('news/getCategories');
  }
};
</script>

<style lang="scss" scoped></style>
