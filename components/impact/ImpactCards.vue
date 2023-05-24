<template>
  <div>
    <v-card class="overflow-hidden custom-card" flat style="border-radius: 80px">
      <v-img :src="item.src" height="250" width="100%" />
      <v-card
        :class="[
          'white--text pointer flex-shrink-0',
          isMobile ? 'text-center' : 'd-flex',
          item.descriptions ? 'px-12 py-8' : 'text-center py-8 px-10'
        ]"
        :to="`${locale}/impact/${item.id}`"
        color="slategrey"
        flat
        tile
      >
        <div :style="`${item.descriptions && !isMobile ? 'width: 50%' : 'width: 100%'}`" class="f-35 bel flex-shrink-0">
          {{ item.title }}
        </div>
        <div
          v-if="!isMobile && item.descriptions"
          :class="`font-weight-light f-21 p${isRTL ? 'r' : 'l'}-5`"
          style="min-height: 125px"
        >
          {{ item.descriptions }}
          <strong class="f-18 font-weight-bold mt-2 d-block">see more</strong>
        </div>
      </v-card>
    </v-card>

    <div v-if="isMobile && item.descriptions" class="font-weight-light f-21 text-center mt-4 grey--text text--darken-1">
      {{ item.descriptions }}
      <strong class="f-18 font-weight-bold mt-2 d-block">see more</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-card {
  .v-image {
    filter: grayscale(100%);
    transition: all ease-in 0.4s;
  }

  &:hover {
    .v-image {
      filter: grayscale(0%);
    }
  }
}
</style>
