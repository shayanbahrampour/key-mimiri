<template>
  <v-card
    :to="localePath(`/impact/${item.id}`)"
    class="overflow-hidden custom-card h-full custom-card-container"
    color="slategrey"
    flat
  >
    <v-img :src="src" height="250" width="100%" />
    <v-card
      :class="[
        'white--text pointer flex-shrink-0',
        isMobile ? 'text-center' : 'd-flex',
        summary && !isMobile ? `p${isRTL ? 'r' : 'l'}-8 p${isRTL ? 'l' : 'r'}-6 pt-5 pb-10` : 'text-center pa-8'
      ]"
      flat
      color="transparent"
    >
      <div
        :class="['bel flex-shrink-0', isMobile ? 'f-25' : 'f-35']"
        :style="`${summary && !isMobile ? 'width: 50%' : 'width: 100%'}`"
      >
        {{ title | truncate({ length: 50 }) }}
      </div>
      <div v-if="!isMobile && summary" :class="`font-weight-light f-21 p${isRTL ? 'r' : 'l'}-4`">
        <p class="ma-0" v-html="summary" />
        <strong class="f-18 font-weight-bold mt-2 d-block">{{ $t('shared.see_more') }}</strong>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    showSummary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    title() {
      if (!this.item) return '';
      return this.item[`${this.$i18n.locale}_title`];
    },
    summary() {
      if (!this.item || !this.showSummary) return '';
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
