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
        {{ $t('educationPage.title') }}
      </h4>
      <h4 v-else :class="['white--text f-36 font-weight-regular mb-4', isRTL ? 'ravi' : 'bel']">
        {{ $t('educationPage.title') }}
      </h4>
    </v-img>
    <div v-if="!isMobile" :class="[`d-flex flex-column align-start w-full white p${isRTL ? 's' : 'e'}-4`]">
      <v-card
        :class="[
          `rounded-r-xl white--text rounded-l-0 d-flex py-6 px-10 flex-column m${
            isRTL ? 's' : 'e'
          }-10 align-center justify-center`
        ]"
        :width="isMobile ? '90%' : undefined"
        color="slategrey"
        elevation="0"
        height="240"
        style="margin-top: -120px"
      >
        <p :class="['mb-0 mx-6', isRTL ? 'ravi f-25 desktop-story-description' : 'f-30']">
          {{ $t('educationPage.description') }}
        </p>
      </v-card>
      <div
        v-if="!isMobile"
        :class="['d-flex flex-column align-start mt-16 white w-full', !isMobile ? 'ps-10' : undefined]"
      >
        <NewsCategory
          :class="`my-6 mx-${isRTL ? '0' : '6'}`"
          :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
          :title="isRTL ? 'داستان نویسان بیشتر' : 'More Storytellers'"
        />
      </div>
    </div>
    <div v-else class="pa-6 slategrey">
      <p :class="['white--text mb-0', isRTL ? 'ravi f-20' : 'f-24']" style="line-height: 30px">
        {{ $t('educationPage.description') }}
      </p>
    </div>
    <StorytellersCard
      :class="['mt-10', !isMobile ? 'mx-16' : undefined]"
      :title="isRTL ? 'داستان نویسان بیشتر' : 'More Storytellers'"
      :items="items"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsCategory from '~/components/news/NewsCategory';
import HomeStoryTellers from '~/components/home/HomeStoryTellers';
import StorytellersCard from '~/components/storytellers/StorytellersCard';

export default {
  head() {
    return {
      title: this.$t('pageTitles.storytellers')
    };
  },
  components: { StorytellersCard, NewsCategory, HomeStoryTellers },
  computed: {
    ...mapGetters({
      categories: 'storyteller/categories'
    })
  },
  data() {
    return { loading: false, items: [] };
  },
  async fetch() {
    this.loading = true;
    try {
      const { data } = await this.$store.dispatch('storyteller/getStorytellersList', {});
      this.items = data.results;
      this.loading = false;
    } catch (e) {
      console.log(e);
      this.loading = false;
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
