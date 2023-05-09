<template>
  <div>
    <v-card flat class="overflow-hidden custom-card" style="border-radius: 80px">
      <v-img :src="item.src" width="100%" height="250" />
      <v-card
        flat
        tile
        color="slategrey"
        :class="[
          'pa-8 white--text pointer',
          isMobile ? 'text-center' : 'd-flex',
          item.descriptions ? '' : 'text-center'
        ]"
        :to="`/impact/${item.id}`"
        @click.prevent
      >
        <div class="f-35 bel">{{ item.title }}</div>
        <div v-if="!isMobile && item.descriptions" class="font-weight-light f-21">
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

<style scoped lang="scss">
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
