<template>
  <div class="d-flex flex-column">
    <v-img
      :class="['d-flex align-end', !isMobile ? 'px-12' : 'px-6']"
      src="/images/education/header.png"
      :height="isMobile ? '30vh' : '55vh'"
    >
      <h4 v-if="!isMobile" class="bel white--text f-50 font-weight-regular" style="margin-bottom: 120px">Education</h4>
      <h4 v-else class="bel white--text f-36 font-weight-regular">Education</h4>
    </v-img>
    <div v-if="!isMobile" class="d-flex flex-column align-start w-full white">
      <v-card
        class="rounded-r-xl white--text rounded-l-0 d-flex py-6 px-12 flex-column align-center justify-center"
        height="200"
        :width="isMobile ? '90%' : '70%'"
        elevation="0"
        color="#66869a"
        style="margin-top: -100px"
      >
        <p class="f-20">
          Empowers to achieve, Inspires to create the greatest Cobel Group promise is to empower, inspire and trigger
          ideas that make a significant impact in how we deliver solutions. Therefore, we invest on education; not only
          to our personnel, but to our stakeholders. Our education material are available to all.
        </p>
      </v-card>
      <div
        v-if="!isMobile"
        :class="['d-flex flex-column align-start mt-16 white w-full', !isMobile ? 'pl-12' : undefined]"
      >
        <NewsCategory class="mb-16" title="More Articles" :tabs="tabs" />
      </div>
    </div>
    <div v-else class="px-6 py-8" style="background-color: #66869a">
      <p class="f-20 white--text">
        Empowers to achieve, Inspires to create the greatest Cobel Group promise is to empower, inspire and trigger
        ideas that make a significant impact in how we deliver solutions. Therefore, we invest on education; not only to
        our personnel, but to our stakeholders. Our education material are available to all.
      </p>
    </div>
    <NewsCard :class="['mt-10', !isMobile ? 'mx-12' : undefined]" />
    <HomeStoryTellers :small="!isMobile" />
  </div>
</template>

<script>
import NewsCard from '~/components/news/NewsCard';
import NewsCategory from '~/components/news/NewsCategory';
import HomeStoryTellers from '~/components/home/HomeStoryTellers';
export default {
  head() {
    return {
      title: this.$t('pageTitles.storytellers')
    };
  },
  components: { NewsCard, NewsCategory, HomeStoryTellers },
  data() {
    return {
      tabs: [
        { title: 'All', value: '' },
        { title: 'Best talent', value: '' },
        { title: 'Long-term value creation', value: '' },
        { title: 'Social responsibility', value: '' },
        { title: 'Localized know-how', value: '' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
