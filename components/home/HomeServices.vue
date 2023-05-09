<template>
  <div :class="['home-services position-relative z-0', { 'mt-16': isMobile }]">
    <svg v-if="!isMobile" class="position-absolute" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="home-services">
          <path
            class="w-full"
            d="M0 0.351562V719.464H554.268C580.744 719.464 604.908 703.643 618.24 678.458C645.822 626.339 697.118 591.34 755.88 591.34C814.607 591.34 865.912 626.366 893.521 678.458C906.853 703.643 931.017 719.464 957.492 719.464H1728V0.351562H0Z"
          />
        </clipPath>
      </defs>
    </svg>

    <v-img
      src="/images/home/services/cover.jpg"
      class="align-end home-services-container mx-auto"
      :height="isMobile ? 400 : 720"
      :width="isMobile ? '' : 1515"
      gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.83)"
    >
      <v-sheet color="#4d6e81" class="w-full h-full position-absolute top-0 start-0" style="mix-blend-mode: color" />
      <div
        :style="`max-width: ${globalMaxWidth}px`"
        :class="['mx-auto white--text position-relative z-1 px-4', isMobile ? 'py-4' : 'py-16']"
      >
        <h3
          :class="`bel font-weight-regular ${isMobile ? 'f-40 text-center' : 'f-80'}`"
          :style="`${!isMobile && 'max-width: 80%'};`"
        >
          Treatment and prevention paradigm shift
        </h3>
        <p
          :class="`font-weight-light m${isRTL ? 'r' : 'l'}-auto ${isMobile ? 'text-center f-20' : 'f-22'}`"
          :style="`line-height: 32px; ${!isMobile && 'max-width: 450px;'}`"
        >
          Be an enabler to enhance peoples physical, psychological and social quality of life (HRQoL) through high
          quality and innovative solutions
        </p>
      </div>
    </v-img>

    <v-sheet
      color="transparent"
      :max-width="globalMaxWidth"
      :height="isMobile ? 400 : 500"
      :class="['px-4 mx-auto position-relative z-0 d-flex justify-end', isMobile ? 'align-end' : 'align-center']"
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
            :style="`color:${activeItem.color};line-height: 50px; word-break: break-all`"
            :class="['bel font-weight-regular', isMobile ? 'f-40' : 'f-50 mb-3']"
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
          :width="active === index ? ballActiveSize : ballSize"
          :height="active === index ? ballActiveSize : ballSize"
          :key="index"
          :color="item.color"
          class="shapes"
          :style="`right:${item.position[0]}px;bottom:${item.position[1]}px;`"
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
          position: coordinates.top,
          color: 'rgba(160, 30, 100, 1)',
          title: 'Social Health',
          description:
            'Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation'
        },
        {
          position: coordinates.side,
          color: 'rgba(243, 145, 31, 1)',
          title: 'Psychological Health',
          description:
            'Emotional and interpersonal functioning: Increased self efficiency, confidence, learning new skills, raised awareness'
        },
        {
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

<style scoped lang="scss">
.home-services {
  .home-services-container {
    clip-path: url(#home-services);
    -webkit-clip-path: url(#home-services);
  }

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
      width: 180px;
      height: 180px;
      position: absolute;
      border-radius: 50%;
      transition: all ease-out 0.6s;
    }
  }
}
</style>
