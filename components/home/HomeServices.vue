<template>
  <div
    :class="['home-services position-relative z-0 mx-auto', { 'mt-16': isMobile }]"
    :style="`max-width: ${globalMaxWidth}px`"
  >
    <v-fade-transition>
      <v-sheet
        v-if="activeItem"
        :color="activeItem.color"
        class="position-absolute z-1 top-0 end-0 start-0 mx-auto rounded-circle"
        height="500"
        style="mix-blend-mode: color; margin-top: -100px; opacity: 0.69"
        width="500"
      />
    </v-fade-transition>

    <v-carousel v-model="active" class="position-relative z-0" height="auto" hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(item, index) in shapes" :key="index">
        <v-img
          :class="['align-end home-services-container mx-auto', $vuetify.breakpoint.xl && 'rounded-xl']"
          :height="isMobile ? 400 : 'calc(100vh - 300px)'"
          :src="item.src"
          :width="isMobile ? '' : globalMaxWidth"
          gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.83)"
          max-height="700"
        >
          <v-sheet
            class="w-full h-full position-absolute top-0 start-0"
            color="#4d6e81"
            style="mix-blend-mode: color"
          />
          <div
            :class="['mx-auto white--text position-relative z-1 px-8', isMobile ? 'py-4' : 'py-16']"
            :style="`max-width: ${globalMaxWidth}px`"
          >
            <h3
              :class="`bel font-weight-regular ${isMobile ? 'f-40 text-center' : 'f-80'}`"
              :style="`${!isMobile && 'max-width: 80%'};`"
            >
              {{ item.bannerTitle }}
            </h3>
            <p
              :class="`font-weight-light m${isRTL ? 'r' : 'l'}-auto ${isMobile ? 'text-center f-20' : 'f-22'}`"
              :style="`line-height: 32px; ${!isMobile && 'max-width: 450px;'}`"
            >
              {{ item.bannerDescription }}
            </p>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <v-sheet
      :class="['mx-auto position-relative z-0 d-flex justify-end', isMobile ? 'px-4 align-end' : 'px-14 align-center']"
      :height="isMobile ? 400 : 500"
      :max-width="globalMaxWidth"
      color="transparent"
    >
      <div
        :class="[`position-relative z-1 ${!isMobile && `mb-16 p${isRTL ? 'r' : 'l'}-8`}`]"
        :style="`${isMobile ? 'width: calc(100vw - 150px)' : 'max-width: 490px'}; ${
          !isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #ccc`
        }`"
      >
        <v-scroll-y-transition>
          <h3
            v-if="activeItem"
            :class="['bel font-weight-regular', isMobile ? 'f-40' : 'f-50 mb-3']"
            :style="`color:${activeItem.color};line-height: 50px; word-break: break-all`"
          >
            {{ activeItem.title }}
          </h3>
        </v-scroll-y-transition>
        <v-scroll-y-transition>
          <p v-if="activeItem" class="f-20 font-weight-light ma-0">{{ activeItem.description }}</p>
        </v-scroll-y-transition>
      </div>

      <div class="nuclear z-0">
        <v-sheet
          v-for="(item, index) in shapes"
          :key="index"
          :color="item.color"
          :height="active === index ? ballActiveSize : ballSize"
          :style="`right:${item.position[0]}px;bottom:${item.position[1]}px;`"
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
            top: [190, -40],
            side: [160, 200],
            bottom: [-90, 150]
          }
        : {
            top: [0, 250],
            side: [400, 0],
            bottom: [-10, -140]
          };

      const data = [
        {
          bannerTitle: 'Treatment and prevention paradigm shift',
          bannerDescription:
            'Be an enabler to enhance peoples physical, psychological and social quality of life (HRQoL) through high quality and innovative solutions',
          src: '/images/home/services/cover-1.jpg',
          position: coordinates.top,
          color: 'rgba(160, 30, 100, 1)',
          title: 'Social Health',
          description:
            'Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation'
        },
        {
          bannerTitle: 'Treatment and prevention paradigm',
          bannerDescription:
            'Be an enabler to enhance peoples physical, psychological and social quality of life (HRQoL) through high quality and innovative solutions',
          src: '/images/home/services/cover-2.png',
          position: coordinates.side,
          color: 'rgba(243, 145, 31, 1)',
          title: 'Psychological Health',
          description:
            'Emotional and interpersonal functioning: Increased self efficiency, confidence, learning new skills, raised awareness'
        },
        {
          bannerTitle: 'Treatment and prevention',
          bannerDescription:
            'Be an enabler to enhance peoples physical, psychological and social quality of life (HRQoL) through high quality and innovative solutions',
          src: '/images/home/services/cover-3.png',
          position: coordinates.bottom,
          color: 'rgba(0, 165, 155, 1)',
          title: 'Physical Health',
          description: 'Perceived improvement in balance, strength, flexibility, endurance and functional activities'
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
        }, 600);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home-services {
  .nuclear {
    width: 200px;
    height: 200px;
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    .shapes {
      position: absolute;
      transition: all ease-out 0.6s;
    }
  }
}
</style>
