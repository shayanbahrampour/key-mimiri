<template>
  <div class="d-flex flex-column pb-16">
    <NewsCarousel
      :items="[
        {
          src: '/images/temp/cover-2.png'
        },
        {
          src: '/images/temp/cover-2.png'
        }
      ]"
    />

    <v-sheet v-if="!isMobile" :max-width="globalMaxWidth" class="mx-auto px-10 mt-16">
      <NewsCategory
        v-if="!isMobile"
        :tabs="isRTL ? tabsRTL : tabs"
        :title="isRTL ? 'مهمترین ها' : 'More important'"
        class="mb-16 mx-6"
      />
      <NewsCard :path="localePath('/news/1')" class="mx-6" />
    </v-sheet>
    <NewsCard v-else :path="localePath('/news/1')" :title="isRTL ? 'مهمترین ها' : 'More important'" class="mt-10" />
  </div>
</template>

<script>
import NewsCategory from '~/components/news/NewsCategory.vue';
import NewsCard from '~/components/news/NewsCard.vue';
import NewsCarousel from '~/components/news/NewsCarousel.vue';

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
      ],
      tabsRTL: [
        { title: 'همه', value: '' },
        { title: 'بهترین استعداد', value: '' },
        { title: 'خلق ارزش بلند مدت', value: '' },
        { title: 'مسئولیت اجتماعی', value: '' },
        { title: 'دانش بومی سازی شده', value: '' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
