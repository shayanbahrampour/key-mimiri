<template>
  <div
    :class="['position-relative flex-shrink-0 z-0', !isMobile && 'ps-8 ms-8']"
    :style="`width: ${width}; ${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #aaa`}`"
  >
    <h3
      v-if="item"
      :class="['bel font-weight-regular mb-1', isMobile ? 'f-35' : 'f-55']"
      :style="`color:${item.color};`"
    >
      <nuxt-link :to="item.path" class="text-decoration-none" style="color: inherit">{{ $t(item.title) }}</nuxt-link>
    </h3>
    <p v-if="item" :class="['font-weight-light ma-0 grey--text text--darken-2', isMobile ? 'f-18' : 'f-20']">
      {{ $t(item.description) }}
    </p>
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
  computed: {
    width() {
      if (this.$vuetify.breakpoint.lgAndUp) return '530px';
      if (this.$vuetify.breakpoint.mdAndUp) return '450px';
      return '300px';
    }
  }
};
</script>

<style lang="scss" scoped></style>
