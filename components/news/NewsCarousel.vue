<template>
  <div class="position-relative">
    <v-carousel v-model="model" :show-arrows="false" class="position-relative z-0" cycle height="auto" hide-delimiters>
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-img :height="isMobile ? '30vh' : 'calc(100vh - 120px)'" :src="item.src" class="position-relative z-0" />
      </v-carousel-item>
    </v-carousel>
    <div
      v-if="!isMobile"
      :class="['position-absolute  bottom-0 mx-auto z-0 px-16 me-4', isRTL ? 'end-8 start-0' : 'start-8 end-0']"
      :style="`bottom: ${isMobile ? 260 : 40}px`"
    >
      <v-icon v-for="(item, index) in items" :key="index" class="ms-1" color="white" size="25" @click="model = index">
        {{ index === model ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}
      </v-icon>
    </div>

    <div :class="['position-relative z-1', { 'ps-10': !isMobile }, isRTL && 'ltr']">
      <div :class="['mx-auto', !isMobile && 'pe-4']">
        <v-sheet
          v-if="!isMobile"
          :class="['rounded-t-xl py-6 px-12 slategrey', isRTL ? 'ml-12 d-flex flex-column align-end' : 'ms-6']"
          height="480"
          style="margin-top: -480px"
          width="480"
        >
          <h4
            :class="[
              'mt-13 text--darken-3 white--text',
              isRTL ? 'text-end rtl ravi f-40 font-weight-bold mb-6' : 'bel f-50 font-weight-regular'
            ]"
          >
            {{ isRTL ? news.title_rtl : news.title }}
          </h4>
          <p
            :class="[
              'mt-6 f-20 white--text text--darken-3 mb-0 font-weight-light',
              isRTL ? 'text-end font-weight-bold mb-2 rtl' : undefined
            ]"
            :style="`line-height: ${isRTL ? '30' : undefined}px`"
          >
            {{ isRTL ? news.description_rtl : news.description }}
          </p>
          <v-btn
            :class="['pa-0 ma-0 mt-1 justify-end f-18 font-weight-bold', isRTL ? 'ravi' : 'bel']"
            color="white"
            depressed
            rounded
            style="text-transform: unset !important"
            text
            ><p>{{ isRTL ? 'بیشتر ببینید' : 'see more' }}</p></v-btn
          >

          <v-btn
            :class="['rounded-xl d-flex justify-center f-14 font-weight-regular', isRTL ? 'ravi mt-16 rtl' : ' mt-10']"
            color="white"
            height="40"
            min-width="60%"
            outlined
          >
            {{ $t('button.register') }}
          </v-btn>
        </v-sheet>
        <v-sheet
          v-else
          :class="[`ma-0 rounded-t-xl py-10 px-8 d-flex flex-column align-${isRTL ? 'end' : 'start'} slategrey`]"
          style="position: relative; z-index: 2; margin-top: -72px !important"
        >
          <h4
            :class="[
              'mt-6 text--darken-3 white--text text-start',
              isRTL ? 'ravi rtl f-30' : 'bel font-weight-regular f-40'
            ]"
            style="max-width: 300px"
          >
            {{ isRTL ? news.title_rtl : news.title }}
          </h4>
          <p
            :class="[
              'mt-6 f-24 white--text text--darken-0 mb-0',
              isRTL ? 'text-end font-weight-bold rtl mb-1' : 'font-weight-light'
            ]"
            :style="`line-height: ${isRTL ? '30' : undefined}px`"
          >
            {{ isRTL ? news.description_rtl : news.description }}
          </p>
          <v-btn
            :class="['pa-0 ma-0 mt-1 justify-start font-weight-bold', isRTL ? 'ravi f-20 mt-2' : 'f-24']"
            color="white"
            depressed
            rounded
            style="text-transform: unset !important"
            text
            ><p>{{ isRTL ? 'بیشتر ببینید' : 'see more' }}</p></v-btn
          >
          <v-btn
            :class="['rounded-xl d-flex justify-center f-20 my-6 font-weight-light', { ' ravi rtl pt-1': isRTL }]"
            color="white"
            height="40"
            min-width="100%"
            outlined
          >
            {{ $t('button.register') }}
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
      model: 0,
      news: {
        title: '13th Episode of Co-Talk Event',
        description:
          'Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...',
        title_rtl: 'قسمت سیزدهم از رویداد Co-Talk',
        description_rtl: 'کمبود آهن که منجر به کم خونی می شود، اثرات منفی بر سلامتی همه افراد به ویژه زنان دارد...'
      }
    };
  },
  computed: {
    activeSlide() {
      return this.items[this.model];
    }
  }
};
</script>

<style lang="scss"></style>
