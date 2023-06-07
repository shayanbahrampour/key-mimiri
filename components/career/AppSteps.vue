<template>
  <div class="w-full">
    <CareerCustomTabs :items="tabs" :model="model" />
    <v-progress-linear
      v-if="!isMobile"
      :value="calculateWidth()"
      class="mr-0 mt-4"
      color="#4C6D80"
      height="2"
      style="width: 100%"
    ></v-progress-linear>
    <v-progress-linear
      v-else
      :value="model !== tabs.length ? 50 : 100"
      class="mr-0 mt-4"
      color="#4C6D80"
      height="2"
      style="width: 100vw; margin-left: -16px"
    ></v-progress-linear>
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
      if (!this.$route.query.job) {
        switch (this.model) {
          case 0:
            return '10';
          case 1:
            return '24';
          case 2:
            return '36';
          case 3:
            return '48';
          case 4:
            return '60';
          case 5:
            return '72';
          case 6:
            return '88';
          case 7:
            return '100';
        }
      } else {
        switch (this.model) {
          case 0:
            return '10';
          case 1:
            return '24';
          case 2:
            return '39';
          case 3:
            return '53';
          case 4:
            return '67';
          case 5:
            return '86';
          case 6:
            return '100';
        }
      }
    }
  }
};
</script>

<style lang="scss"></style>
