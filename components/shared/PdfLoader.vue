<template>
  <div class="position-relative z-0 h-full">
    <vue-pdf
      :page="page"
      :src="src"
      class="w-full position-relative z-0 ltr white"
      style="font-family: inherit; min-height: 250px"
      @num-pages="pageCount = $event"
    />

    <v-btn
      v-if="page < pageCount"
      :class="['shadow white top-0 bottom-0 my-auto z-1 end-0', isMobile ? 'mx-3' : 'mx-6']"
      :height="isMobile ? 30 : 40"
      :width="isMobile ? 30 : 40"
      absolute
      fab
      icon
      @click="next"
    >
      <v-icon color="#66869A" size="28">mdi-chevron-{{ isRTL ? 'left' : 'right' }}</v-icon>
    </v-btn>
    <v-btn
      v-if="page > 1"
      :class="['shadow white top-0 bottom-0 my-auto z-1 mxart-0', isMobile ? 'mx-3' : 'mx-6']"
      :height="isMobile ? 30 : 40"
      :width="isMobile ? 30 : 40"
      absolute
      fab
      icon
      @click="prev"
    >
      <v-icon color="#66869A" size="28">mdi-chevron-{{ isRTL ? 'right' : 'left' }}</v-icon>
    </v-btn>
    <v-btn
      v-if="isMobile"
      absolute
      class="shadow white bottom-0 end-0 z-1 ma-3"
      fab
      height="30"
      icon
      width="30"
      @click="prev"
    >
      {{ pageCount }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 1,
      src: '/pdf/temp.pdf'
    };
  },
  methods: {
    next() {
      this.page++;
    },
    prev() {
      this.page--;
    }
  }
};
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25) !important;
}
</style>
