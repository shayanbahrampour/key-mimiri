<template>
  <div>
    <v-card class="overflow-hidden custom-card" flat style="border-radius: 80px">
      <v-img :src="src" height="250" width="100%" />
      <v-card
        :class="[
          'white--text pointer flex-shrink-0 custom-card-container',
          isMobile ? 'text-center' : 'd-flex',
          summary ? 'px-12 py-8' : 'text-center py-8 px-10'
        ]"
        :to="localePath(`/impact/${item.id}`)"
        color="slategrey"
        flat
        tile
      >
        <div :style="`${summary && !isMobile ? 'width: 50%' : 'width: 100%'}`" class="f-35 bel flex-shrink-0">
          {{ title }}
        </div>
        <div v-if="!isMobile && summary" :class="`font-weight-light f-21 p${isRTL ? 'r' : 'l'}-5`">
          {{ summary }}
          <strong class="f-18 font-weight-bold mt-2 d-block">{{ $t('shared.see_more') }}</strong>
        </div>
      </v-card>
    </v-card>

    <div v-if="isMobile && summary" class="font-weight-light f-21 text-center mt-4 grey--text text--darken-1">
      {{ summary }}
      <strong class="f-18 font-weight-bold mt-2 d-block">{{ $t('shared.see_more') }}</strong>
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
  },
  computed: {
    title() {
      if (!this.item) return '';
      return this.item[`${this.$i18n.locale}_title`];
    },
    summary() {
      if (!this.item) return '';
      return this.item[`${this.$i18n.locale}_summary`];
    },
    src() {
      if (!this.item && this.item.files.length) return '';
      const mainImage = this.item.files.find((item) => item.type === 'body_file');
      if (!mainImage) return '';

      return `${this.$imageUrl}/${mainImage.url}`;
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

  .custom-card-container {
    transition: all ease-in 0.3s;
  }

  &:hover {
    .v-image {
      filter: grayscale(0%);
    }

    .custom-card-container {
      background-color: #4c6d80 !important;
    }
  }
}
</style>
