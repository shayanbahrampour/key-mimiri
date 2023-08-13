<template>
  <ImpactContent v-if="detail" :item="detail" :relatedContents="items" />
  <div v-else-if="$fetchState.pending" class="d-flex align-center justify-center">
    <v-progress-circular class="mx-auto" indeterminate />
  </div>
</template>

<script>
import ImpactContent from '~/components/impact/ImpactContent.vue';

export default {
  components: { ImpactContent },
  data() {
    return {
      detail: null,
      items: []
    };
  },
  head() {
    return {
      title: this.$t('pageTitles.press')
    };
  },
  async fetch() {
    this.getRelated();
    try {
      const { data } = await this.$store.dispatch('news/getList', { id: this.$route.params.id });
      this.detail = data;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async getRelated() {
      try {
        const { data } = await this.$store.dispatch('news/getList', { params: { page: 1 } });
        this.items = data.results;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
