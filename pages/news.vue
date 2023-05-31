<template>
  <div class="d-flex flex-column pb-16">
    <NewsCarousel
      :items="[
        {
          src: '/images/news/slider.png'
        },
        {
          src: '/images/news/slider.png'
        }
      ]"
    />

    <v-sheet v-if="!isMobile" :max-width="globalMaxWidth" class="mx-auto px-10 my-16">
      <NewsCategory v-if="!isMobile" :tabs="tabs" class="mb-16 mx-6" title="More important" />
      <NewsCard class="mx-6" />
    </v-sheet>
    <NewsCard v-else class="mt-16" title="More important" />
  </div>
</template>

<script>
import NewsCategory from '~/components/news/NewsCategory';
import NewsCard from '~/components/news/NewsCard';
import NewsCarousel from '~/components/news/NewsCarousel';

export default {
  components: { NewsCategory, NewsCard, NewsCarousel },
  head() {
    return {
      title: this.$t('pageTitles.press')
    };
  },
  data() {
    return {
      tabs: [
        { title: 'All', value: '' },
        { title: 'Best talent', value: '' },
        { title: 'Long-term value creation', value: '' },
        { title: 'Social responsibility', value: '' },
        { title: 'Localized know-how', value: '' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
