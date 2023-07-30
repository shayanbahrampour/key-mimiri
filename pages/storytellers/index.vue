<template>
  <div class="d-flex flex-column">
    <v-img
      :class="['d-flex align-end', !isMobile ? 'px-16' : 'px-5']"
      :height="isMobile ? '30vh' : '65vh'"
      src="/images/storytellers/header.png"
    >
      <h4
        v-if="!isMobile"
        :class="['white--text f-70 font-weight-regular text-capitalize', isRTL ? 'ravi mr-16' : 'bel']"
        style="margin-bottom: 140px"
      >
        {{ $t('pageTitles.storytellers') }}
      </h4>
      <h4 v-else :class="['white--text f-36 font-weight-regular mb-4', isRTL ? 'ravi' : 'bel']">
        {{ $t('pageTitles.storytellers') }}
      </h4>
    </v-img>
    <div v-if="!isMobile" :class="[`d-flex flex-column align-start w-full white p${isRTL ? 's' : 'e'}-4`]">
      <v-card
        :class="[
          `rounded-r-xl white--text rounded-l-0 d-flex py-6 px-10 flex-column m${
            isRTL ? 's' : 'e'
          }-10 align-start justify-center`
        ]"
        :width="isMobile ? '90%' : '100%'"
        color="slategrey"
        elevation="0"
        height="240"
        style="margin-top: -120px"
      >
        <p :class="['mb-0 mx-6', isRTL ? 'ravi f-25 desktop-story-description mr-10' : 'f-30']">
          {{ $t('storytellersPage.description') }}
        </p>
      </v-card>
      <div
        v-if="!isMobile"
        :class="['d-flex flex-column align-start mt-16 white w-full', !isMobile ? 'ps-10' : undefined]"
      >
        <h1 :class="['grey--text text--darken-2 font-weight-regular my-6', isRTL ? 'ravi f-34 mx-0' : 'bel f-40 mx-6']">
          {{ !isRTL ? 'storytellers' : 'راویان الهامبخش' }}
        </h1>
      </div>
    </div>
    <div v-else class="pa-6 slategrey">
      <p :class="['white--text mb-0', isRTL ? 'ravi f-20' : 'f-24']" style="line-height: 30px">
        {{ $t('storytellersPage.description') }}
      </p>
    </div>
    <StorytellersCard
      v-if="!loading"
      :class="['mt-10', !isMobile ? 'mx-16' : undefined]"
      :items="items"
      :title="isRTL ? 'داستان نویسان بیشتر' : 'More Storytellers'"
    />
    <SkeletonLoaderCard v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SkeletonLoaderCard from '~/components/shared/SkeletonLoaderCard';
import NewsCategory from '~/components/news/NewsCategory';
import HomeStoryTellers from '~/components/home/HomeStoryTellers';
import StorytellersCard from '~/components/storytellers/StorytellersCard';

export default {
  head() {
    return {
      title: this.$t('pageTitles.storytellers')
    };
  },
  components: { StorytellersCard, NewsCategory, HomeStoryTellers, SkeletonLoaderCard },
  computed: {
    ...mapGetters({
      categories: 'storyteller/categories'
    })
  },
  data() {
    return {
      loading: false,
      items: [],
      model: {
        category: null
      }
    };
  },
  async fetch() {
    this.getData();
  },
  methods: {
    async getData(id) {
      this.loading = true;
      try {
        const { data } = await this.$store.dispatch('storyteller/getStorytellersList', {
          params: { category_id: this.model.category }
        });
        this.items = data.results;
        this.loading = false;
      } catch (e) {
        console.log(e);
        this.loading = false;
      }
    },
    updateCategory(event) {
      this.model.category = event;
      this.items = [];
      this.getData();
    }
  },
  created() {
    if (this.categories && this.categories.length === 0) this.$store.dispatch('storyteller/getCategories');
  }
};
</script>

<style lang="scss">
.desktop-story-description {
  line-height: 40px;
}
</style>
