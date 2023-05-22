<template>
  <v-tabs v-model="model" center-active :class="['w-full career-custom-tabs', setStep(model)]" grow show-arrows>
    <v-tab
      v-for="(item, index) in items"
      :key="index"
      :ripple="false"
      disabled
      active-class="black--text"
      class="bel f-20 bg-transparent text-capitalize"
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
    height: 2px; /* Adjust the height as needed */
    width: 100%;
    background-color: #ececec; /* Replace "your-color" with the desired color value */
  }
}

.tab-one {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: #4c6d80 !important;
    width: 50% !important;
  }
}
.tab-two {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: #4c6d80 !important;
    width: 180% !important;
  }
}
.tab-three {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: #4c6d80 !important;
    width: 290% !important;
  }
}
.tab-four {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: #4c6d80 !important;
    width: 350% !important;
  }
}
.tab-five {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: #4c6d80 !important;
    width: 640% !important;
  }
}
.tab-six {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: #4c6d80 !important;
    width: 560% !important;
  }
}
.tab-seven {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: #4c6d80 !important;
    width: 450% !important;
  }
}
</style>
