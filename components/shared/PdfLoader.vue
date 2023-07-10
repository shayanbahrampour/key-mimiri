<template>
  <div class="position-relative z-0">
    <fullscreen v-model="flag.fullscreen">
      <vue-pdf
        :page="page"
        :src="pdf"
        :style="`max-height:100vh; font-family: inherit; height: ${
          flag.showContent ? (flag.fullscreen ? '100vh' : 'auto') : '400px'
        }`"
        class="w-full position-relative z-0 ltr white d-flex align-center justify-center"
        @error="onError"
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

      <v-btn
        :class="['shadow white bottom-0 start-0 z-1', isMobile ? 'ma-3' : 'ma-6']"
        :height="isMobile ? 30 : 40"
        :width="isMobile ? 30 : 40"
        absolute
        fab
        icon
        @click="flag.fullscreen = !flag.fullscreen"
      >
        <v-icon v-if="flag.fullscreen">mdi-fullscreen-exit</v-icon>
        <v-icon v-else>mdi-fullscreen</v-icon>
      </v-btn>
    </fullscreen>
  </div>
</template>

<script>
export default {
  props: {
    pdf: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      flag: {
        showContent: false,
        fullscreen: false
      },
      page: 1,
      pageCount: 1,
      src: '/pdf/temp.pdf'
    };
  },
  mounted() {
    setTimeout(() => {
      this.flag.showContent = true;
    }, 2500);
  },
  methods: {
    onError(error) {
      console.log(error);
    },
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

.h-auto {
  min-height: auto !important;
}
</style>
