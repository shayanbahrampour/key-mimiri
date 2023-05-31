<template>
  <div :class="['home-services position-relative z-0', { 'mt-16': isMobile }]">
    <div class="slategrey position-relative">
      <v-sheet
        v-if="activeItem"
        :color="activeItem.color"
        class="position-absolute z-1 top-0 end-0 start-0 mx-auto rounded-circle transition-ease-in-out"
        :height="isMobile ? 300 : 400"
        style="mix-blend-mode: color; margin-top: -70px; opacity: 0.69"
        :width="isMobile ? 300 : 400"
      />
      <v-carousel
        v-model="active"
        :interval="5000"
        :show-arrows="false"
        class="position-relative z-0"
        cycle
        hide-delimiters
        mandatory
        :height="isMobile ? 400 : 600"
      >
        <v-carousel-item
          v-for="(item, i) in shapes"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet
            class="w-full h-full position-absolute top-0 start-0 z-1"
            color="#4d6e81"
            style="mix-blend-mode: color"
          />
          <v-sheet
            class="w-full h-full position-absolute top-0 start-0 z-0 home-services-gradient"
            color="transparent"
          />
        </v-carousel-item>
      </v-carousel>
      <div
        :class="[
          'h-full w-full d-flex justify-center mx-auto z-4 white--text position-absolute top-0 start-0 end-0',
          isMobile ? 'pb-6 px-5 align-end' : 'px-16 align-end pb-10'
        ]"
        :style="`max-width: ${globalMaxWidth}px`"
      >
        <div class="w-full">
          <h3
            :class="`bel font-weight-regular mb-3 ${isMobile ? 'f-35 text-center' : 'f-65'}`"
            :style="`${!isMobile && 'max-width: 900px'};`"
          >
            {{ $t('homePage.services.slider.title') }}
          </h3>
          <div
            :class="`font-weight-light m${isRTL ? 'r' : 'l'}-auto ${isMobile ? 'text-center f-20' : 'f-25'}`"
            :style="`line-height: 32px; ${
              !isMobile &&
              `max-width: ${$vuetify.breakpoint.lgAndUp ? '550px' : $vuetify.breakpoint.smAndDown ? '100%' : '400px'};`
            }`"
          >
            {{ $t('homePage.services.slider.description') }}
          </div>
        </div>
      </div>
      <v-sheet
        v-if="!isMobile"
        :class="['mx-auto position-relative z-2', isMobile ? 'px-6' : 'px-16']"
        :max-width="globalMaxWidth"
        color="transparent"
      >
        <svg
          :class="`position-absolute end-0 start-0 m${isRTL ? 'l' : 'r'}-auto`"
          :style="`width: 370px; bottom: -1px; margin-${isRTL ? 'right' : 'left'}: 25%`"
          fill="none"
          viewBox="0 0 403 127"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M68.3299 74.2707C88.7907 38.1636 123.727 12.5401 164.313 3.87321L167.08 3.28241C186.492 -0.862906 206.543 -1.03394 226.023 2.77962L239.386 5.39564C272.351 11.8491 301.24 31.5086 319.34 59.8056L339.908 91.9612C353.672 113.48 377.455 126.5 403 126.5V126.5H0V126.5C25.7035 123.992 48.5772 109.129 61.3095 86.6597L68.3299 74.2707Z"
            fill="white"
          />
        </svg>
      </v-sheet>
    </div>
    <v-sheet
      :class="[
        'mx-auto position-relative z-3 d-flex justify-end',
        isMobile ? 'px-4 align-end' : 'px-lg-16 px-4 align-center'
      ]"
      :max-width="globalMaxWidth"
      :min-height="isMobile ? 400 : 430"
      color="transparent"
    >
      <div
        :class="`nuclear z-0 start-0 top-0 end-0 bottom-0 position-absolute rounded-circle my-auto d-flex m${
          isRTL ? 'l' : 'r'
        }-auto ${isMobile ? 'flex-column align-start justify-center' : 'align-center justify-start'}`"
        :style="`width: ${isMobile ? '100%' : '300px'}; height: ${isMobile ? '100%' : '200px'}; margin-${
          isRTL ? 'right' : 'left'
        }: ${isMobile ? 'auto' : '25%'}`"
      >
        <div
          :class="[
            'font-weight-regular bel grey--text text--darken-3 text-center flex-shrink-0',
            isMobile ? 'mb-4 text-center f-65' : 'f-55',
            $vuetify.breakpoint.lgAndUp ? 'text-center' : !isMobile && 'text-end'
          ]"
          :style="`width: ${isMobile ? '100%' : $vuetify.breakpoint.lgAndUp ? '400px' : '230px'}`"
        >
          HRQoL
        </div>

        <BallContents v-if="!isMobile" :item="activeItem" />

        <v-sheet
          v-for="(item, index) in shapes"
          :key="index"
          :color="item.color"
          :height="active === index ? ballActiveSize : ballSize"
          :style="`${isRTL ? 'left' : 'right'}:${item.position[0]};bottom:${item.position[1]};`"
          :width="active === index ? ballActiveSize : ballSize"
          class="shapes rounded-circle"
          @click="active = index"
        />
      </div>
      <BallContents v-if="isMobile" :item="activeItem" style="max-width: calc(100vw - 150px)" />
    </v-sheet>
  </div>
</template>

<script>
import BallContents from '~/components/home/HomeServices/BallContents.vue';

export default {
  components: { BallContents },
  data() {
    return {
      active: 0,
      activeItem: null
    };
  },
  computed: {
    ballSize() {
      if (this.isMobile) return 80;
      return 140;
    },
    ballActiveSize() {
      if (this.isMobile) return 100;
      return 180;
    },
    shapes() {
      const coordinates = this.isMobile
        ? {
            top: ['75%', '5%'],
            side: ['65%', '75%'],
            bottom: ['1%', '50%']
          }
        : {
            top: ['20px', '220px'],
            side: ['330px', '90px'],
            bottom: ['100px', '-170px']
          };

      const data = [
        {
          path: '/social',
          src: '/images/temp/cover-1.jpg',
          position: coordinates.top,
          color: 'rgba(160, 30, 100, 1)',
          title: 'homePage.services.balls.social_health',
          description: 'homePage.services.balls.social_health_description'
        },
        {
          path: '/psychological',
          src: '/images/temp/cover-2.png',
          position: coordinates.side,
          color: 'rgba(243, 145, 31, 1)',
          title: 'homePage.services.balls.psychological_health',
          description: 'homePage.services.balls.psychological_health_description'
        },
        {
          path: '/physical',
          src: '/images/temp/cover-3.png',
          position: coordinates.bottom,
          color: 'rgba(0, 165, 155, 1)',
          title: 'homePage.services.balls.physical_health',
          description: 'homePage.services.balls.physical_health_description'
        }
      ];

      if (this.active === 1) {
        data[0].position = coordinates.bottom;
        data[1].position = coordinates.top;
        data[2].position = coordinates.side;
        return data;
      }

      if (this.active === 2) {
        data[0].position = coordinates.side;
        data[1].position = coordinates.bottom;
        data[2].position = coordinates.top;
        return data;
      }

      return data;
    }
  },
  watch: {
    active: {
      immediate: true,
      handler() {
        this.activeItem = this.shapes[this.active];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home-services {
  .nuclear {
    .shapes {
      position: absolute;
      transition: all ease-out 0.6s;
    }
  }

  .home-services-gradient {
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.83));
  }
}
</style>
