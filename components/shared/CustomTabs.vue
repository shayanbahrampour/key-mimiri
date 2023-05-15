<template>
  <v-tabs v-model="model" center-active class="w-full custom-tabs" grow show-arrows>
    <v-tab
      v-for="(item, index) in items"
      :key="index"
      :ripple="false"
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
.custom-tabs {
  .v-tabs-slider {
    background: none repeat scroll 0 0 transparent;
    background: linear-gradient(90deg, #f3911f 8%, #a01e64 51%, #00a59b 100%) !important;
  }
}
</style>
