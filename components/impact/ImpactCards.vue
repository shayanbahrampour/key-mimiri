<template>
  <v-card
    v-intersect.once="lastCard ? { handler: onIntersect, options: { threshold: [0, 0.5, 1.0] } } : {}"
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
        summary && !isMobile ? 'px-8 pb-8 pt-6' : isMobile ? 'text-center py-8 px-4' : 'text-center px-16 py-8'
      ]"
      :min-height="isMobile ? 90 : 80"
      color="transparent"
      flat
    >
      <div
        :class="['flex-shrink-0', isMobile ? 'f-25' : isRTL ? 'f-30' : 'f-33', isRTL ? 'ravi' : 'bel']"
        :style="`${summary && !isMobile ? 'width: 50%' : 'width: 100%'};${isRTL ? 'line-height:35px' : ''}`"
      >
        {{ title | truncate({ length: 50 }) }}
      </div>
      <div v-if="!isMobile && summary" class="font-weight-light f-18 ps-4">
        <div
          :class="['ma-0 overflow-hidden', isRTL ? 'font-weight-bold anjoman' : 'font-weight-light']"
          :style="`${isRTL ? 'line-height:30px' : ''}; height: 65px;`"
          v-html="summary"
        />
        <strong class="f-18 font-weight-bold d-block mt-1">
          {{ $t('shared.see_more') }}
        </strong>
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
    },
    lastCard: {
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

      const result = this.item.files.find((item) => item.type === 'column_section_file');
      return result ? `${this.$imageUrl}/${result.url}` : '';
    }
  },
  methods: {
    onIntersect() {
      this.$emit('next');
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
