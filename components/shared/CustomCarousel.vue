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
    <div class="position-relative z-1">
      <div :class="['mx-auto', !isMobile && 'pr-16']" :style="`max-width: ${globalMaxWidth}px`">
        <v-sheet
          :class="[
            'mr-auto carousel-sheet position-relative d-flex align-center',
            isMobile ? 'py-8' : `rounded-r-xl py-16`,
            $vuetify.breakpoint.xl ? 'px-12' : isMobile ? 'px-6' : 'px-16'
          ]"
          :max-width="globalMaxWidth * 0.9"
          :min-height="$vuetify.breakpoint.mdAndUp ? 240 : 100"
          :style="`${!isMobile && `margin-top: -120px`}`"
          color="slategrey"
        >
          <h1
            v-if="title"
            :class="[
              'white--text font-weight-regular text-uppercase position-absolute start-0',
              isMobile ? (isRTL ? 'f-40' : 'f-50') : isRTL ? 'f-70' : 'f-70',
              $vuetify.breakpoint.xl ? 'px-12' : isMobile ? 'px-6' : 'px-16',
              isRTL ? 'ravi' : 'bel'
            ]"
            :style="`top: -${isMobile ? 70 : 90}px`"
          >
            {{ title }}
          </h1>
          <div
            v-if="items.length > 1 && !hideDelimiters"
            :class="[
              'position-absolute left-0 px-16',
              isMobile ? 'd-flex justify-center align-center start-0 end-0' : ''
            ]"
            :style="`${isMobile ? 'top: -40px' : 'top: -50px'}`"
          >
            <v-icon
              v-for="(item, index) in items"
              :key="index"
              class="mr-1"
              color="white"
              size="25"
              @click="model = index"
            >
              {{ index === model ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}
            </v-icon>
          </div>

          <v-row v-if="activeSlide" :no-gutters="!isMobile" class="position-relative z-1" justify="center">
            <v-col v-if="activeSlide.title && activeSlide.description" :lg="activeSlide.description ? 5 : 12" cols="12">
              <h2
                :class="[
                  'white--text font-weight-regular',
                  { 'text-center': isMobile },
                  isMobile ? (isRTL ? 'f-30' : 'f-35') : isRTL ? 'f-40' : 'f-50',
                  isRTL ? 'ravi' : 'bel'
                ]"
              >
                {{ activeSlide.title }}
              </h2>
            </v-col>
            <v-col v-else-if="activeSlide.title && !activeSlide.description" cols="12">
              <h2
                :class="[
                  'white--text',
                  isMobile ? 'f-24' : isRTL ? 'f-26' : 'f-30',
                  isRTL ? 'ravi font-weight-regular' : 'font-weight-regular'
                ]"
                :style="`line-height: ${isMobile ? '30px' : isRTL && '35px'}`"
              >
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
              <p
                :class="[
                  'f-22 white--text mt-lg-0',
                  isRTL ? 'font-weight-bold anjoman mb-2' : 'font-weight-light mb-0'
                ]"
              >
                {{
                  activeSlide.description | truncate({ length: flag.showMore ? activeSlide.description.length : 100 })
                }}
              </p>
              <v-btn
                :ripple="false"
                class="font-weight-bold f-18 ms-n4 mt-2 text-lowercase bg-transparent"
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
</style>
