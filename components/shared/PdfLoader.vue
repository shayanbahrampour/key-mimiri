<template>
  <div class="position-relative z-0">
    <vue-pdf
      class="w-full position-relative z-0 ltr"
      style="font-family: inherit"
      :src="src"
      :page="page"
      @num-pages="pageCount = $event"
    />

    <v-btn
      v-if="page < pageCount"
      icon
      fab
      width="40"
      height="40"
      absolute
      class="shadow white top-0 bottom-0 my-auto z-1 mx-6 end-0"
      @click="next"
    >
      <v-icon color="#66869A" size="28">mdi-chevron-{{ isRTL ? 'left' : 'right' }}</v-icon>
    </v-btn>

    <v-btn
      v-if="page > 1"
      icon
      fab
      width="40"
      height="40"
      absolute
      class="shadow white top-0 bottom-0 my-auto z-1 mx-6 start-0"
      @click="prev"
    >
      <v-icon color="#66869A" size="28">mdi-chevron-{{ isRTL ? 'right' : 'left' }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
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
