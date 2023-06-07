<template>
  <v-tabs v-model="model" center-active class="custom-career-tabs" hide-slider>
    <v-spacer v-if="model === 0 && !$route.query.job && isMobile" style="width: 6%"></v-spacer>
    <v-spacer v-else-if="model === 0 && $route.query.job && isMobile" style="width: 9%"></v-spacer>
    <v-tab
      v-for="(item, index) in items"
      :key="index"
      :class="['bel f-24 bg-transparent text-capitalize tab-news text-no-wrap', !isMobile ? 'px-0' : 'px-8 mt-2']"
      :ripple="false"
      active-class="black--text"
      disabled
    >
      {{ item.title }}
    </v-tab>
    <v-spacer v-if="(model === items.length || model + 1 === items.length) && isMobile" style="width: 3%"></v-spacer>
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
  .v-slide-group__prev {
    display: none !important;
  }

  .v-slide-group__next {
    display: none !important;
  }
  .v-slide-group__content {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.tab-news {
  &:hover {
    color: black !important;
  }
}
</style>
