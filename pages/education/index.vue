<template>
  <div class="d-flex flex-column">
    <v-img
      :class="['d-flex align-end', !isMobile ? 'px-16' : 'px-5']"
      :height="isMobile ? '30vh' : '65vh'"
      src="/images/education/header.png"
    >
      <h4 v-if="!isMobile" class="bel white--text f-70 font-weight-regular" style="margin-bottom: 140px">EDUCATION</h4>
      <h4 v-else class="bel white--text f-36 font-weight-regular mb-4">Education</h4>
    </v-img>
    <div v-if="!isMobile" class="d-flex flex-column align-start w-full white pr-4">
      <v-card
        :width="isMobile ? '90%' : undefined"
        class="rounded-r-xl white--text rounded-l-0 d-flex py-6 px-10 flex-column mr-16 align-center justify-center"
        color="slategrey"
        elevation="0"
        height="240"
        style="margin-top: -120px"
      >
        <p class="f-30 mb-0 mx-6">
          Empowers to achieve, Inspires to create the greatest Cobel Group promise is to empower, inspire and trigger
          ideas that make a significant impact in how we deliver solutions. Therefore, we invest on education; not only
          to our personnel, but to our stakeholders. Our education material are available to all.
        </p>
      </v-card>
      <div
        v-if="!isMobile"
        :class="['d-flex flex-column align-start mt-16 white w-full', !isMobile ? 'pl-10' : undefined]"
      >
        <NewsCategory :tabs="tabs" class="my-6 mx-6" title="More Articles" />
      </div>
    </div>
    <div v-else class="pa-6 slategrey">
      <p class="f-24 white--text mb-0" style="line-height: 30px">
        Empowers to achieve, Inspires to create the greatest Cobel Group promise is to empower, inspire and trigger
        ideas that make a significant impact in how we deliver solutions. Therefore, we invest on education; not only to
        our personnel, but to our stakeholders. Our education material are available to all.
      </p>
    </div>
    <NewsCard :class="['mt-10', !isMobile ? 'mx-16' : undefined]" title="More Articles" />
    <HomeStoryTellers :class="[isMobile ? 'mt-0' : 'mt-6']" />
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
