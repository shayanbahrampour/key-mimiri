<template>
  <div class="position-relative z-0 h-full">
    <vue-pdf
      class="w-full position-relative z-0 ltr white"
      style="font-family: inherit; min-height: 250px"
      :src="src"
      :page="page"
      @num-pages="pageCount = $event"
    />

    <v-btn
      v-if="page < pageCount"
      icon
      fab
      :width="isMobile ? 30 : 40"
      :height="isMobile ? 30 : 40"
      absolute
      :class="['shadow white top-0 bottom-0 my-auto z-1 end-0', isMobile ? 'mx-3' : 'mx-6']"
      @click="next"
    >
      <v-icon color="#66869A" size="28">mdi-chevron-{{ isRTL ? 'left' : 'right' }}</v-icon>
    </v-btn>
    <v-btn
      v-if="page > 1"
      icon
      fab
      :width="isMobile ? 30 : 40"
      :height="isMobile ? 30 : 40"
      absolute
      :class="['shadow white top-0 bottom-0 my-auto z-1 mxart-0', isMobile ? 'mx-3' : 'mx-6']"
      @click="prev"
    >
      <v-icon color="#66869A" size="28">mdi-chevron-{{ isRTL ? 'right' : 'left' }}</v-icon>
    </v-btn>
    <v-btn
      v-if="isMobile"
      icon
      fab
      width="30"
      height="30"
      absolute
      class="shadow white bottom-0 end-0 z-1 ma-3"
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

<style scoped lang="scss">
.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25) !important;
}
</style>
