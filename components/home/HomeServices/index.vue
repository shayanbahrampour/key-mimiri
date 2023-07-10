<template>
  <div :class="['home-services position-relative z-0', isMobile ? 'mt-16 pb-12' : 'pb-3']">
    <div class="slategrey position-relative">
      <v-sheet
        v-if="activeItem"
        :color="activeItem.color"
        :height="isMobile ? 270 : lgAndUp ? 450 : 360"
        :width="isMobile ? 270 : lgAndUp ? 450 : 360"
        class="position-absolute z-1 top-0 end-0 start-0 mx-auto rounded-circle transition-ease-in-out"
        style="mix-blend-mode: color; margin-top: -70px; opacity: 0.69"
      />
      <v-carousel
        v-model="active"
        :height="isMobile ? 400 : 600"
        :show-arrows="false"
        class="position-relative z-0"
        cycle
        hide-delimiters
        mandatory
      >
        <v-carousel-item v-for="(item, i) in shapes" :key="i" :src="item.src">
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
          'h-full w-full d-flex justify-center mx-auto z-4 white--text position-absolute top-0 start-0 end-0 align-end',
          isMobile ? 'pb-6 px-5 align-end' : mdAndDown ? 'px-16' : 'px-16 pb-10'
        ]"
        :style="`${mdAndDown && !isMobile && 'padding-bottom: 140px'}`"
      >
        <div class="w-full">
          <h3
            :class="`${isMobile ? 'f-33 text-center' : lgAndUp ? (isRTL ? 'f-60' : 'f-70') : isRTL ? 'f-55' : 'f-65'} ${
              isRTL ? 'ravi font-weight-regular' : 'bel font-weight-regular mb-3'
            }`"
            :style="`${isRTL && !isMobile && 'line-height: 80px'}; ${
              lgAndUp && `max-width: ${isRTL ? '600px' : '900px'}`
            };`"
          >
            {{ $t('homePage.services.slider.title') }}
          </h3>
          <div
            :class="[
              'ms-auto',
              isMobile ? 'text-center f-18' : isRTL ? 'f-23' : 'f-25',
              isRTL ? 'font-weight-bold' : 'font-weight-light',
              !lgAndUp && !isMobile && isRTL && 'mb-4'
            ]"
            :style="`${isMobile && isRTL && 'line-height:30px'};${
              !isMobile &&
              `line-height: ${isRTL ? '38px' : '30px'};max-width: ${
                lgAndUp ? (isRTL ? '360px' : '470px') : mdAndDown ? '100%' : `${nuclearSize}px`
              };`
            }`"
          >
            {{ $t('homePage.services.slider.description') }}
          </div>
        </div>
      </div>
      <v-sheet
        v-if="!isMobile"
        :class="[
          'mx-auto position-absolute bottom-0 start-0 w-full z-2 ltr flex-shrink-0',
          isMobile ? 'px-6' : 'px-16'
        ]"
        color="transparent"
        height="128"
      >
        <svg
          :style="`width: 388px; height: 100%; bottom: -0.5px; margin-left: 30%`"
          class="position-absolute end-0 start-0 mr-auto"
          fill="none"
          viewBox="0 0 388 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M0.0976562 128C23.4473 125.222 44.2344 110.136 56.2402 87.458C83.8223 35.3389 135.117 0.34082 193.88 0.34082C252.606 0.34082 303.912 35.3662 331.521 87.458C343.525 110.136 364.313 125.222 387.663 128H0.0976562Z"
            fill="white"
            fill-rule="evenodd"
          />
        </svg>
      </v-sheet>
    </div>
    <v-sheet
      :class="[
        'mx-auto position-relative z-3 d-flex justify-end ltr',
        isMobile ? 'px-4 align-end' : 'px-lg-16 px-4 align-center'
      ]"
      :min-height="isMobile ? 430 : 540"
      color="transparent"
    >
      <div
        :class="`nuclear z-0 start-0 top-0 end-0 bottom-0 position-absolute rounded-circle my-auto d-flex mr-auto ${
          isMobile ? 'flex-column align-start justify-center' : 'align-center justify-start'
        }`"
        :style="`width: ${isMobile ? '100%' : `${nuclearSize}px`}; height: ${
          isMobile ? '100%' : '200px'
        }; margin-left: ${isMobile ? 'auto' : '30%'}`"
      >
        <div
          :class="['font-weight-regular bel flex-shrink-0 f-55', isMobile ? 'mb-4 text-center pr-8' : 'text-left']"
          :style="`color: #59595B; width: ${isMobile ? '100%' : lgAndUp ? `${nuclearSize}px` : '230px'}`"
        >
          HRQoL
        </div>

        <BallContents v-if="!isMobile" :item="activeItem" />

        <v-sheet
          v-for="(item, index) in shapes"
          :key="index"
          :color="item.color"
          :height="active === index ? ballActiveSize : ballSize"
          :style="`right:${item.position[0]};bottom:${item.position[1]};`"
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
    nuclearSize() {
      return 388;
    },
    ballSize() {
      if (this.isMobile) return 80;
      return 140;
    },
    ballActiveSize() {
      if (this.isMobile) return 100;
      return 200;
    },
    lgAndUp() {
      return this.$vuetify.breakpoint.lgAndUp;
    },
    mdAndDown() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    shapes() {
      const coordinates = this.isMobile
        ? {
            top: ['calc(100% - 110px)', '0'],
            side: ['65%', '75%'],
            bottom: ['10px', '50%']
          }
        : {
            top: ['95px', '255px'],
            side: ['480px', '70px'],
            bottom: ['130px', '-160px']
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

<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.home-services {
  .v-window-item {
    transform: none !important;

    &,
    &.v-window-x-transition-enter-to,
    &.v-window-x-transition-leave-to {
      transition: none !important;
      animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards !important;
    }
  }
}
</style>

<style lang="scss" scoped>
.home-services {
  .nuclear {
    .shapes {
      position: absolute;
      transition: all ease-out 0.4s;
    }
  }

  .home-services-gradient {
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.83));
  }
}
</style>
