<template>
  <div
    :class="[`position-relative flex-shrink-0 z-0 ${!isMobile && `p${isRTL ? 'r' : 'l'}-8 m${isRTL ? 'r' : 'l'}-8`}`]"
    :style="`width: 400px; ${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #aaa`}`"
  >
    <v-scroll-y-transition>
      <h3
        v-if="item"
        :class="['bel font-weight-regular mb-1', isMobile ? 'f-35' : 'f-40']"
        :style="`color:${item.color}; line-height: ${isMobile ? '30px' : '50px'};`"
      >
        <nuxt-link :to="item.path" class="text-decoration-none" style="color: inherit">{{ $t(item.title) }}</nuxt-link>
      </h3>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <p v-if="item" :class="['font-weight-light ma-0 grey--text text--darken-2', isMobile ? 'f-18' : 'f-20']">
        {{ $t(item.description) }}
      </p>
    </v-scroll-y-transition>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
