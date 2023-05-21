<template>
  <div class="d-flex align-center justify-center">
    <div class="flex-grow-1 justify-center">
      <CareerCustomTabs :items="tabs" :model="model" />
    </div>
  </div>
</template>

<script>
import CareerCustomTabs from '~/components/shared/CareerCustomTabs.vue';

export default {
  components: { CareerCustomTabs },
  props: {
    tabs: {
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

<style lang="scss"></style>
