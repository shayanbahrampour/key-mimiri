<template>
  <div :class="['home-services position-relative z-0', { 'mt-16': isMobile }]">
    <v-fade-transition>
      <v-sheet
        v-if="activeItem"
        :color="activeItem.color"
        :height="isMobile ? 400 : 450"
        :width="isMobile ? 400 : 450"
        class="position-absolute z-1 top-0 end-0 start-0 mx-auto rounded-circle"
        style="mix-blend-mode: color; margin-top: -70px; opacity: 0.69"
      />
    </v-fade-transition>

    <div class="position-relative z-0">
      <v-carousel v-model="active" cycle height="auto" hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-for="(item, index) in shapes" :key="index">
          <v-img
            :height="isMobile ? 400 : 'calc(100vh - 300px)'"
            :src="item.src"
            class="align-end home-services-container mx-auto"
            gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.83)"
            max-height="700"
            min-height="550"
          >
            <v-sheet
              class="w-full h-full position-absolute top-0 start-0"
              color="#4d6e81"
              style="mix-blend-mode: color"
            />
            <div
              :class="['mx-auto white--text position-relative z-1', isMobile ? 'py-4 px-8' : 'pa-16']"
              :style="`max-width: ${globalMaxWidth}px`"
            >
              <h3
                :class="`bel font-weight-regular mb-3 ${isMobile ? 'f-40 text-center' : 'f-80'}`"
                :style="`${!isMobile && 'max-width: 900px'};`"
              >
                {{ $t('homePage.services.slider.title') }}
              </h3>
              <p
                :class="`font-weight-light mb-8 m${isRTL ? 'r' : 'l'}-auto ${isMobile ? 'text-center f-20' : 'f-22'}`"
                :style="`line-height: 32px; ${!isMobile && 'max-width: 450px;'}`"
              >
                {{ $t('homePage.services.slider.description') }}
              </p>
            </div>
          </v-img>
        </v-carousel-item>
      </v-carousel>

      <v-sheet
        :class="['mx-auto position-relative z-0', isMobile ? 'px-6' : 'px-16']"
        :max-width="globalMaxWidth"
        color="transparent"
      >
        <svg
          v-if="!isMobile"
          :class="`position-absolute end-0 start-0 m${isRTL ? 'l' : 'r'}-auto`"
          :style="`width: 400px; bottom: -1px; margin-${isRTL ? 'right' : 'left'}: 25%`"
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
        'mx-auto position-relative z-0 d-flex justify-end',
        isMobile ? 'px-4 align-end' : 'px-lg-16 px-4 align-center'
      ]"
      :height="isMobile ? 450 : 500"
      :max-width="globalMaxWidth"
      color="transparent"
    >
      <div
        :class="[`position-relative z-0 ${!isMobile && `mb-16 p${isRTL ? 'r' : 'l'}-8`}`]"
        :style="`${
          isMobile
            ? $vuetify.breakpoint.smOnly
              ? 'width: calc(100vw - 250px); margin-bottom: 25px'
              : 'width: calc(100vw - 140px)'
            : `max-width: ${$vuetify.breakpoint.lgAndUp ? '490px' : '400px'}`
        }; ${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #aaa`}`"
      >
        <v-scroll-y-transition>
          <h3
            v-if="activeItem"
            :class="['bel font-weight-regular mb-1', isMobile ? 'f-40' : 'f-50']"
            :style="`color:${activeItem.color}; line-height: ${isMobile ? '30px' : '50px'};`"
          >
            {{ $t(activeItem.title) }}
          </h3>
        </v-scroll-y-transition>
        <v-scroll-y-transition>
          <p v-if="activeItem" class="f-20 font-weight-light ma-0">{{ $t(activeItem.description) }}</p>
        </v-scroll-y-transition>
      </div>

      <div
        :class="`nuclear z-0 start-0 top-0 end-0 bottom-0 position-absolute rounded-circle my-auto d-flex align-center justify-center m${
          isRTL ? 'l' : 'r'
        }-auto`"
        :style="`width: ${isMobile ? '100%' : '400px'}; height: ${isMobile ? '100%' : '200px'}; margin-${
          isRTL ? 'right' : 'left'
        }: ${isMobile ? 'auto' : '25%'}`"
      >
        <div v-if="!isTablet" class="f-60 font-weight-regular bel grey--text text--darken-1 text-center mb-sm-0 mb-6">
          HRQOL
        </div>

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
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      interval: null,
      activeItem: null
    };
  },
  computed: {
    ballSize() {
      if (this.isMobile) return 80;
      return 160;
    },
    ballActiveSize() {
      if (this.isMobile) return 100;
      return 200;
    },
    shapes() {
      const coordinates = this.isMobile
        ? {
            top: ['75%', '5%'],
            side: ['65%', '75%'],
            bottom: ['1%', '50%']
          }
        : {
            top: ['100px', '250px'],
            side: ['400px', '30px'],
            bottom: ['-50px', '-140px']
          };

      const data = [
        {
          src: '/images/temp/cover-1.jpg',
          position: coordinates.top,
          color: 'rgba(160, 30, 100, 1)',
          title: 'homePage.services.balls.social_health',
          description: 'homePage.services.balls.social_health_description'
        },
        {
          src: '/images/temp/cover-2.png',
          position: coordinates.side,
          color: 'rgba(243, 145, 31, 1)',
          title: 'homePage.services.balls.psychological_health',
          description: 'homePage.services.balls.psychological_health_description'
        },
        {
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
        this.activeItem = null;
        setTimeout(() => {
          this.activeItem = this.shapes[this.active];
          this.setInterval();
        }, 600);
      }
    }
  },
  beforeDestroy() {
    this.clearInterval();
  },
  methods: {
    clearInterval() {
      clearInterval(this.interval);
    },
    setInterval() {
      this.clearInterval();
      const maxIndex = this.shapes.length - 1;
      this.interval = setInterval(() => {
        if (this.active === maxIndex) {
          this.active = 0;
        } else {
          this.active++;
        }

        this.activeItem = this.shapes[this.active];
      }, 3000);
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
}
</style>
