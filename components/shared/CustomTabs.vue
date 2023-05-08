<template>
  <v-tabs v-model="model" grow centered center-active show-arrows class="w-full custom-tabs">
    <v-tab
      v-for="(item, index) in items"
      :ripple="false"
      :key="index"
      active-class="black--text"
      class="bel f-20 bg-transparent"
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
