<template>
  <ImpactContent v-if="detail" :item="detail" :relatedContents="items" />
  <div v-else-if="$fetchState.pending" class="d-flex align-center justify-center" style="min-height: 60vh">
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
      title: this.$t('pageTitles.impact_stories')
    };
  },
  async fetch() {
    try {
      const { data } = await this.$store.dispatch('impact/getList', { id: this.$route.params.id });
      this.detail = data;
    } catch (e) {
      console.log(e);
    }
  },
  created() {
    this.getRelated();
  },
  methods: {
    async getRelated() {
      try {
        const { data } = await this.$store.dispatch('impact/getList', { params: { page: 1 } });
        this.items = data.results;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
