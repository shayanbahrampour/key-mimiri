<template>
  <div
    :class="['position-relative flex-shrink-0 z-0 ball-contents']"
    :style="`width: ${width}; ${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #59595B`}`"
  >
    <v-slide-y-reverse-transition>
      <div v-if="content" :class="!isMobile && (lgAndUp ? 'ps-8 py-3' : 'py-1 ps-8')">
        <h3
          :class="['bel font-weight-regular mb-1', isMobile ? 'f-35' : lgAndUp ? 'f-55' : 'f-45']"
          :style="`color:${content.color};`"
        >
          <nuxt-link :to="content.path" class="text-decoration-none" style="color: inherit">{{
            $t(content.title)
          }}</nuxt-link>
        </h3>
        <p :class="['font-weight-light ma-0 grey--text text--darken-2', isMobile ? 'f-16' : lgAndUp ? 'f-24' : 'f-20']">
          {{ $t(content.description) }}
        </p>
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
      if (this.$vuetify.breakpoint.lgAndUp) return '530px';
      if (this.$vuetify.breakpoint.mdAndUp) return '450px';
      if (this.$vuetify.breakpoint.smAndUp) return '310px';
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
