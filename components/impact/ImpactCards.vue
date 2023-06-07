<template>
  <v-card
    :to="localePath(`/impact/${item.id}`)"
    class="overflow-hidden custom-card h-full custom-card-container d-flex flex-column"
    color="slategrey"
    flat
  >
    <v-img :src="src" class="flex-shrink-0" height="250" max-height="250" width="100%" />
    <v-card
      :class="[
        'white--text pointer align-center flex-grow-1',
        isMobile ? 'text-center' : 'd-flex',
        summary && !isMobile ? 'ps-8 pe-6 pt-5 pb-10' : isMobile ? 'text-center pa-8' : 'text-center px-16 py-8'
      ]"
      color="transparent"
      flat
    >
      <div
        :class="['bel flex-shrink-0', isMobile ? 'f-25' : summary ? 'f-35' : 'f-35']"
        :style="`${summary && !isMobile ? 'width: 50%' : 'width: 100%'}`"
      >
        {{ title | truncate({ length: 50 }) }}
      </div>
      <div v-if="!isMobile && summary" class="font-weight-light f-19 ps-4">
        <div class="ma-0" v-html="summary" />
        <strong class="f-18 font-weight-bold d-block mt-n3">{{ $t('shared.see_more') }}</strong>
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
