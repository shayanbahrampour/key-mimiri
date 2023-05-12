<template>
  <div class="d-flex flex-column pb-16">
    <v-img v-if="!isMobile" :class="['d-flex align-end px-14']" src="/images/news/slider.png" height="85vh">
      <v-sheet height="480" width="480" class="ml-0 rounded-t-xl py-6 px-12" style="background-color: #66869a">
        <h4 class="bel mt-16 f-40 text--darken-3 white--text font-weight-regular">13th Episode of Co-Talk Event</h4>
        <p class="bel mt-6 f-20 white--text text--darken-3 mb-0">
          Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...
        </p>
        <v-btn
          class="bel pa-0 ma-0 justify-start f-18 font-weight-bold"
          color="white"
          text
          depressed
          rounded
          style="text-transform: unset !important"
          ><p>see more</p></v-btn
        >

        <v-btn
          outlined
          class="rounded-xl d-flex mt-10 justify-center f-14 font-weight-light"
          color="white"
          height="40"
          min-width="60%"
        >
          register now...
        </v-btn>
      </v-sheet>
    </v-img>
    <div v-else>
      <v-img
        :class="['d-flex align-end px-0']"
        src="/images/news/slider.png"
        height="40vh"
        style="position: relative; z-index: 1; margin-bottom: -70px"
      >
      </v-img>

      <v-sheet
        class="ma-0 rounded-t-xl py-6 px-6 d-flex flex-column align-center"
        style="background-color: #66869a; position: relative; z-index: 2"
      >
        <h4 class="bel mt-6 f-40 text--darken-3 white--text font-weight-regular">
          You may also like listening to more stories
        </h4>
        <p class="bel mt-6 f-20 white--text text--darken-3">
          Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women... see
          more
        </p>
        <v-btn
          outlined
          class="rounded-xl d-flex justify-center f-20 my-6 font-weight-regular"
          color="white"
          height="40"
          min-width="100%"
        >
          register now
        </v-btn>
      </v-sheet>
    </div>

    <v-sheet v-if="!isMobile" :max-width="globalMaxWidth" class="mx-auto px-16 my-16">
      <NewsCategory v-if="!isMobile" class="mb-16" />
      <NewsCard />
    </v-sheet>
    <NewsCard v-else class="mt-16" />
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
