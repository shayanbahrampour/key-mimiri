<template>
  <div class="w-full">
    <CareerCustomTabs :items="tabs" :model="model" />
    <v-progress-linear class="mr-0 mt-4" :value="calculateWidth()" color="#4C6D80"></v-progress-linear>
  </div>
</template>

<script>
import CareerCustomTabs from '~/components/career/CareerCustomTabs.vue';

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
  },
  methods: {
    calculateWidth() {
      switch (this.model) {
        case 0:
          return '8';
        case 1:
          return '23';
        case 2:
          return '35';
        case 3:
          return '48';
        case 4:
          return '58';
        case 5:
          return '68';
        case 6:
          return '86';
        case 7:
          return '100';
      }
    }
  }
};
</script>

<style lang="scss"></style>
