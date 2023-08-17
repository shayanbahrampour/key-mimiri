<template>
  <div
    :style="`width: ${width}; ${!isMobile && `border-left: 1px solid #59595B`}; min-height: ${isRTL ? 80 : 90}px`"
    class="position-relative flex-shrink-0 z-0 ball-contents text-start"
  >
    <v-slide-y-reverse-transition>
      <div v-if="content" :class="!isMobile && (lgAndUp ? 'pl-8 py-3' : 'py-1 pl-8')">
        <h3
          :class="[
            'font-weight-regular mb-1',
            isRTL ? 'ravi' : 'bel',
            isMobile ? (isRTL ? 'f-30' : 'f-35') : lgAndUp ? (isRTL ? 'f-40' : 'f-50') : 'f-45'
          ]"
          :style="`color:${content.color};`"
        >
          <nuxt-link to="" class="text-decoration-none" style="color: inherit">
            {{ $t(content.title) }}
          </nuxt-link>
        </h3>
        <p
          :class="[
            'ma-0 grey--text text--darken-2',
            isMobile ? 'f-16' : lgAndUp ? 'f-24' : 'f-20',
            isRTL ? 'font-weight-bold anjoman' : 'font-weight-light'
          ]"
          :style="isRTL && (isMobile ? 'line-height:23px' : 'line-height:35px')"
          v-html="$t(content.description)"
        />
      </div>
    </v-slide-y-reverse-transition>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      content: null
    };
  },
  watch: {
    item: {
      immediate: true,
      handler() {
        this.content = null;

        setTimeout(this.updateContents, 300);
      }
    }
  },
  computed: {
    lgAndUp() {
      return this.$vuetify.breakpoint.lgAndUp;
    },
    width() {
      if (this.$vuetify.breakpoint.lgAndUp) return '490px';
      if (this.$vuetify.breakpoint.mdAndUp) return '450px';
      if (this.$vuetify.breakpoint.smAndUp) return 'calc(100vw - 150px)';
      return '300px';
    }
  },
  methods: {
    updateContents() {
      this.content = this.item;
    }
  }
};
</script>

<style lang="scss" scoped>
.ball-contents {
  transition: all ease-in 0.4s;
}
</style>
