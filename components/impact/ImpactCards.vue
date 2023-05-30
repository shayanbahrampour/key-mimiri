<template>
  <div class="h-full">
    <v-card
      class="overflow-hidden custom-card h-full custom-card-container"
      color="slategrey"
      flat
      style="border-radius: 80px"
      :to="localePath(`/impact/${item.id}`)"
    >
      <v-img :src="src" height="250" width="100%" />
      <div
        :class="[
          'white--text pointer flex-shrink-0',
          isMobile ? 'text-center' : 'd-flex',
          summary ? `p${isRTL ? 'r' : 'l'}-8 p${isRTL ? 'l' : 'r'}-6 pt-5 pb-10` : 'text-center pa-8'
        ]"
      >
        <div :style="`${summary && !isMobile ? 'width: 50%' : 'width: 100%'}`" class="f-35 bel flex-shrink-0">
          {{ title | truncate({ length: 50 }) }}
        </div>
        <div v-if="!isMobile && summary" :class="`font-weight-light f-21 p${isRTL ? 'r' : 'l'}-4`">
          <p v-html="summary" class="ma-0" />
          <strong class="f-18 font-weight-bold mt-2 d-block">{{ $t('shared.see_more') }}</strong>
        </div>
      </div>
    </v-card>

    <div v-if="isMobile && summary" class="font-weight-light f-21 text-center mt-4 grey--text text--darken-1">
      <p v-html="summary" class="ma-0" />
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

  &.custom-card-container {
    transition: all ease-in 0.3s;
  }

  &:hover {
    .v-image {
      filter: grayscale(0%);
    }

    &.custom-card-container {
      background-color: #4c6d80 !important;
    }
  }
}
</style>
