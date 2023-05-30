<template>
  <div class="position-relative">
    <v-carousel
      v-model="model"
      :show-arrows="items.length > 1"
      class="position-relative z-0"
      cycle
      height="auto"
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-img :height="isMobile ? 250 : 500" :src="item.src" class="position-relative z-0" />
      </v-carousel-item>
    </v-carousel>
    <div
      v-if="items.length > 1"
      :class="['position-absolute start-0 end-0 mx-auto z-0', isMobile ? 'px-6' : 'px-16']"
      :style="`max-width: ${globalMaxWidth}px; top: ${isMobile ? 210 : 370}px`"
    >
      <v-icon
        v-for="(item, index) in items"
        :key="index"
        :class="`m${isRTL ? 'r' : 'l'}-1`"
        color="white"
        size="25"
        @click="model = index"
      >
        {{ index === model ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}
      </v-icon>
    </div>

    <div class="position-relative z-1">
      <div :class="['mx-auto', !isMobile && `p${isRTL ? 'l' : 'r'}-4`]" :style="`max-width: ${globalMaxWidth}px`">
        <v-sheet
          :class="[
            `m${isRTL ? 'l' : 'r'}-auto carousel-sheet`,
            isMobile ? 'px-6 py-8' : `px-16 py-16 rounded-${isRTL ? 'l' : 'r'}-xl`
          ]"
          :max-width="globalMaxWidth * 0.9"
          :style="`${!isMobile && `margin-top: -78px`}`"
          color="slategrey"
          min-height="240"
        >
          <v-row v-if="activeSlide" :no-gutters="!isMobile" class="position-relative z-1" justify="center">
            <v-col cols="12" lg="5">
              <h2 :class="['bel white--text font-weight-regular', isMobile ? 'f-40' : 'f-50']">
                {{ activeSlide.title }}
              </h2>
            </v-col>
            <v-col cols="12" lg="6" offset-lg="1">
              <p class="f-22 white--text font-weight-light mt-lg-0">
                {{ activeSlide.description }}
              </p>
              <v-btn class="font-weight-bold f-18 ml-n4 text-lowercase" color="white" exact link text>
                {{ $t('impactPage.slider.see_more') }}
              </v-btn>
            </v-col>
          </v-row>
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
