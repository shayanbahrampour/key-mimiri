<template>
  <div class="position-relative">
    <v-carousel v-model="model" :show-arrows="false" class="position-relative z-0" cycle height="auto" hide-delimiters>
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-img :height="isMobile ? '30vh' : 'calc(100vh - 120px)'" :src="item.src" class="position-relative z-0" />
      </v-carousel-item>
    </v-carousel>
    <div
      v-if="!isMobile"
      :class="['position-absolute start-8 end-0 bottom-0 mx-auto z-0 px-16 mr-4']"
      :style="`max-width: ${globalMaxWidth}px; bottom: ${isMobile ? 260 : 40}px`"
    >
      <v-icon v-for="(item, index) in items" :key="index" class="ms-1" color="white" size="25" @click="model = index">
        {{ index === model ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}
      </v-icon>
    </div>

    <div :class="['position-relative z-1', { 'pl-10': !isMobile }]">
      <div :class="['mx-auto', !isMobile && 'pe-4']" :style="`max-width: ${globalMaxWidth}px`">
        <v-sheet
          v-if="!isMobile"
          class="ml-6 rounded-t-xl py-6 px-12 slategrey"
          height="480"
          style="margin-top: -480px"
          width="480"
        >
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
            ><p>{{ $t('shared.see_more') }}</p></v-btn
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
        <v-sheet
          v-else
          class="ma-0 rounded-t-xl py-10 px-8 d-flex flex-column align-start slategrey"
          style="position: relative; z-index: 2; margin-top: -72px !important"
        >
          <h4 class="bel mt-6 f-40 text--darken-3 white--text font-weight-regular text-start" style="max-width: 300px">
            13th Episode of Co-Talk Event
          </h4>
          <p class="mt-6 f-24 white--text text--darken-3 font-weight-light mb-0">
            Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women...
          </p>
          <v-btn
            class="pa-0 ma-0 mt-1 justify-start f-24 font-weight-bold"
            color="white"
            depressed
            rounded
            style="text-transform: unset !important"
            text
            ><p>{{ $t('shared.see_more') }}</p></v-btn
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      model: 0
    };
  },
  computed: {
    activeSlide() {
      return this.items[this.model];
    }
  }
};
</script>

<style lang="scss">
.carousel-sheet {
  transition: all ease-in 0.4s;

  &:after {
    z-index: 0;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 50vw;
    background-color: var(--v-slategrey-base);
  }
}

.v-application--is-rtl {
  .carousel-sheet:after {
    right: 0;
    left: auto !important;
  }
}
</style>
