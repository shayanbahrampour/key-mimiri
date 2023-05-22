<template>
  <v-tabs
    v-model="model"
    center-active
    :class="['career-custom-tabs', isMobile ? 'mobile-tab' : setStep(model)]"
    grow
    :show-arrows="!isMobile"
  >
    <v-tab
      v-for="(item, index) in items"
      :key="index"
      :ripple="false"
      disabled
      active-class="black--text"
      :class="['bel bg-transparent text-capitalize', isMobile ? 'f-24 ml-16 pl-6 text-center' : 'f-20']"
      style="text-transform: unset !important"
    >
      {{ item.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    model: {
      type: Number,
      default: 0
    }
  },
  methods: {
    setStep(model) {
      switch (model) {
        case 0:
          return 'tab-one';
        case 1:
          return 'tab-two';
        case 2:
          return 'tab-three';
        case 3:
          return 'tab-four';
        case 4:
          return 'tab-five';
        case 5:
          return 'tab-six';
        case 6:
          return 'tab-seven';
      }
    }
  }
};
</script>

<style lang="scss">
.career-custom-tabs {
  .v-tabs-slider-wrapper {
    transition: width 0.3s ease-in-out;
    left: 0px !important;
  }
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: #4c6d80 !important;
  }
  .v-slide-group__content,
  .v-tabs-bar__content {
    position: relative;
  }

  .v-slide-group__content::after,
  .v-tabs-bar__content::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #ececec;
  }
}

.mobile-tab {
  .v-slide-group__prev {
    display: none !important;
  }
}

.tab-one {
  .v-tabs-slider {
    width: 50% !important;
  }
}
.tab-two {
  .v-tabs-slider {
    width: 180% !important;
  }
}
.tab-three {
  .v-tabs-slider {
    width: 290% !important;
  }
}
.tab-four {
  .v-tabs-slider {
    width: 350% !important;
  }
}
.tab-five {
  .v-tabs-slider {
    width: 640% !important;
  }
}
.tab-six {
  .v-tabs-slider {
    width: 560% !important;
  }
}
.tab-six {
  .v-tabs-slider {
    width: 560% !important;
  }
}
.tab-seven {
  .v-tabs-slider {
    width: 450% !important;
  }
}
</style>
