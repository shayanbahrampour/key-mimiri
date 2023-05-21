<template>
  <v-tabs v-model="model" center-active class="w-full career-custom-tabs" grow show-arrows>
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
  }
};
</script>

<style lang="scss">
.career-custom-tabs {
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
</style>
