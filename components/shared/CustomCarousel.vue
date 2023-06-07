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
        <v-img :height="isMobile ? '30vh' : '65vh'" :src="item.src" class="position-relative z-0" />
      </v-carousel-item>
    </v-carousel>
    <div
      v-if="items.length > 1 && !hideDelimiters"
      :class="[
        'position-absolute start-0 end-0 mx-auto z-0',
        isMobile ? 'd-flex justify-center align-center px-6' : 'px-16'
      ]"
      :style="`max-width: ${globalMaxWidth}px; top: ${isMobile ? 260 : 330}px`"
    >
      <v-icon v-for="(item, index) in items" :key="index" class="ms-1" color="white" size="25" @click="model = index">
        {{ index === model ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}
      </v-icon>
    </div>
    <div
      v-if="title"
      :class="[
        'position-absolute start-0 end-0 mx-auto z-0',
        isMobile ? 'px-6' : $vuetify.breakpoint.xl ? 'px-12' : 'px-16'
      ]"
      :style="`max-width: ${globalMaxWidth}px; top: ${isMobile ? 230 : 320}px`"
    >
      <h4 :class="['bel white--text font-weight-regular text-uppercase', isMobile ? 'f-50' : 'f-70']">
        {{ title }}
      </h4>
    </div>

    <div class="position-relative z-1">
      <div :class="['mx-auto', !isMobile && 'pe-16']" :style="`max-width: ${globalMaxWidth}px`">
        <v-sheet
          :class="[
            'me-auto carousel-sheet',
            isMobile ? 'py-8' : `rounded-${isRTL ? 'l' : 'r'}-xl py-16`,
            $vuetify.breakpoint.xl ? 'px-12' : isMobile ? 'px-6' : 'px-16'
          ]"
          :max-width="globalMaxWidth * 0.9"
          :min-height="$vuetify.breakpoint.mdAndUp ? 240 : 100"
          :style="`${!isMobile && `margin-top: -120px`}`"
          color="slategrey"
        >
          <v-row v-if="activeSlide" :no-gutters="!isMobile" class="position-relative z-1" justify="center">
            <v-col v-if="activeSlide.title && activeSlide.description" :lg="activeSlide.description ? 5 : 12" cols="12">
              <h2 :class="['bel white--text font-weight-regular', isMobile ? 'f-35 text-center' : 'f-50']">
                {{ activeSlide.title }}
              </h2>
            </v-col>
            <v-col v-else-if="activeSlide.title && !activeSlide.description" cols="12">
              <h2 class="white--text font-weight-regular f-30">
                {{ activeSlide.title }}
              </h2>
            </v-col>
            <v-col
              v-if="activeSlide.description"
              :class="isMobile && 'text-center'"
              :lg="activeSlide.title ? 6 : 12"
              :offset-lg="activeSlide.title ? 1 : 0"
              cols="12"
            >
              <p class="f-22 white--text font-weight-light mt-lg-0 mb-0">
                {{
                  activeSlide.description | truncate({ length: flag.showMore ? activeSlide.description.length : 100 })
                }}
              </p>
              <v-btn
                :ripple="false"
                class="font-weight-bold f-18 ml-n4 text-lowercase bg-transparent"
                color="white"
                exact
                link
                text
                @click="flag.showMore = !flag.showMore"
              >
                {{ flag.showMore ? $t('shared.see_less') : $t('shared.see_more') }}
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
    },
    title: {
      type: String,
      default: ''
    },
    hideDelimiters: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      model: 0,
      flag: {
        showMore: false
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
