<template>
  <div class="d-flex flex-column pb-16">
    <v-img class="d-flex align-end px-14" src="/images/news/slider.png" height="85vh">
      <v-sheet height="480" width="480" class="ml-16 rounded-t-xl py-6 px-12" style="background-color: #66869a">
        <h4 class="bel mt-16 f-40 text--darken-3 white--text font-weight-regular">
          You may also like listening more stories
        </h4>
        <p class="bel mt-6 f-20 white--text text--darken-3">
          Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women... see
          more
        </p>
        <v-btn
          outlined
          class="rounded-xl d-flex justify-start f-14 font-weight-bold"
          color="white"
          height="40"
          min-width="60%"
        >
          register now
        </v-btn>
      </v-sheet>
    </v-img>

    <v-sheet :max-width="globalMaxWidth" class="mx-auto px-10 my-16">
      <NewsCategory class="mb-16" />
      <NewsCard v-for="i in 4" :key="i" />
    </v-sheet>
  </div>
</template>

<script>
import NewsCategory from '~/components/news/NewsCategory';
import NewsCard from '~/components/news/NewsCard';
export default {
  head() {
    return {
      title: this.$t('pageTitles.press')
    };
  },
  components: { NewsCategory, NewsCard }
};
</script>

<style lang="scss" scoped></style>
