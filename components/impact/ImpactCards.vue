<template>
  <v-card flat class="overflow-hidden custom-card" to="/impact/1" style="border-radius: 80px">
    <v-img :src="item.src" width="100%" height="250" />
    <v-sheet color="slategrey" class="pa-8 bel f-35 white--text text-center">
      {{ item.title }}
    </v-sheet>
  </v-card>
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
