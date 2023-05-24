<template>
  <div class="d-flex flex-column pb-16">
    <v-img v-if="!isMobile" :class="['d-flex align-end px-10']" height="85vh" src="/images/news/slider.png">
      <v-sheet class="ml-0 rounded-t-xl py-6 px-12 slategrey" height="480" width="480">
        <h4 class="bel mt-16 f-50 text--darken-3 white--text font-weight-regular">13th Episode of Co-Talk Event</h4>
        <p class="mt-6 f-20 white--text text--darken-3 mb-0 font-weight-light">
          Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...
        </p>
        <v-btn
          class="bel pa-0 ma-0 mt-2 justify-start f-18 font-weight-bold"
          color="white"
          depressed
          rounded
          style="text-transform: unset !important"
          text
          ><p>see more</p></v-btn
        >

        <v-btn
          class="rounded-xl d-flex mt-10 justify-center f-14 font-weight-regular"
          color="white"
          height="40"
          min-width="60%"
          outlined
        >
          register now...
        </v-btn>
      </v-sheet>
    </v-img>
    <div v-else>
      <v-img
        :class="['d-flex align-end px-0']"
        height="40vh"
        src="/images/news/slider.png"
        style="position: relative; z-index: 1; margin-bottom: -70px"
      >
      </v-img>

      <v-sheet
        class="ma-0 rounded-t-xl py-10 px-8 d-flex flex-column align-start slategrey"
        style="position: relative; z-index: 2"
      >
        <h4 class="bel mt-6 f-40 text--darken-3 white--text font-weight-regular text-start" style="max-width: 300px">
          13th Episode of Co-Talk Event
        </h4>
        <p class="mt-6 f-20 white--text text--darken-3 font-weight-light mb-0">
          Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women...
        </p>
        <v-btn
          class="pa-0 ma-0 justify-start f-18 font-weight-bold"
          color="white"
          depressed
          rounded
          style="text-transform: unset !important"
          text
          ><p>see more</p></v-btn
        >
        <v-btn
          class="rounded-xl d-flex justify-center f-20 my-6 font-weight-light"
          color="white"
          height="40"
          min-width="100%"
          outlined
        >
          register now
        </v-btn>
      </v-sheet>
    </div>

    <v-sheet v-if="!isMobile" :max-width="globalMaxWidth" class="mx-auto px-10 my-16">
      <NewsCategory v-if="!isMobile" :tabs="tabs" class="mb-16" title="More important" />
      <NewsCard />
    </v-sheet>
    <NewsCard v-else class="mt-16" title="More important" />
  </div>
</template>

<script>
import NewsCategory from '~/components/news/NewsCategory';
import NewsCard from '~/components/news/NewsCard';

export default {
  components: { NewsCategory, NewsCard },
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
