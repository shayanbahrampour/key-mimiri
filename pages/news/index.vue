<template>
  <div class="pb-16">
    <NewsCarousel :items="[{ src: '/images/temp/cover-2.png' }]" />

    <v-sheet v-if="!isMobile" class="mx-auto px-10 mt-16">
      <NewsCategory
        v-if="!isMobile"
        :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
        :title="isRTL ? 'مهمترین ها' : 'More important'"
        class="mb-16 mx-6"
        @select="getData($event)"
      />
      <NewsCard v-if="!loading" path="news" class="mx-6" :items="news" />
    </v-sheet>
    <NewsCard
      v-else-if="isMobile && !loading"
      path="news"
      :title="isRTL ? 'مهمترین ها' : 'More important'"
      :items="news"
      class="mt-10"
    />
    <SkeletonLoaderCard v-if="loading" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsCard from '~/components/news/NewsCard.vue';
import NewsCarousel from '~/components/news/NewsCarousel.vue';
import NewsCategory from '~/components/news/NewsCategory.vue';
import SkeletonLoaderCard from '~/components/shared/SkeletonLoaderCard.vue';
export default {
  components: { NewsCategory, NewsCard, NewsCarousel, SkeletonLoaderCard },
  data() {
    return {
      pagination: {
        current_page: 1
      },
      loading: false,
      items: [],
      news: []
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
    this.getData();
  },
  methods: {
    async getData(id) {
      this.loading = true;
      try {
        const { data } = await this.$store.dispatch('news/getList', {
          params: {
            page: this.pagination.current_page,
            category_id: id ? id : undefined
          }
        });

        this.items = data.results;
        this.pagination = data.pagination;
      } catch (e) {
        console.log(e);
      }
      try {
        const { data } = await this.$store.dispatch('news/getNewsList', {});
        this.news = data.results;
        this.loading = false;
      } catch (e) {
        console.log(e);
        this.loading = false;
      }
    }
  },
  created() {
    if (this.categories && this.categories.length === 0) this.$store.dispatch('news/getCategories');
  }
};
</script>

<style lang="scss" scoped></style>
