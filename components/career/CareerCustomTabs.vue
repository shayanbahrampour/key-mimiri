<template>
  <v-tabs v-model="model" class="custom-career-tabs" center-active>
    <v-tab
      v-for="(item, index) in items"
      :key="index"
      :class="['bel f-24 bg-transparent text-capitalize tab-news', { 'px-6': !isMobile }]"
      :ripple="false"
      disabled
      active-class="black--text"
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
  data() {
    return {
      model: 0
    };
  },
  watch: {
    model() {
      this.$emit('input', this.model);
    }
  }
};
</script>

<style lang="scss">
.custom-career-tabs {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: slategrey;
    position: absolute;
    left: -50% !important;
  }

  .v-slide-group__prev {
    display: none !important;
  }
  .v-slide-group__next {
    display: none !important;
  }
}

.tab-news {
  &:hover {
    color: black !important;
  }
}
</style>
