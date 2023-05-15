<template>
  <div class="mb-16">
    <HomeSlider />
    <HomeServices class="mb-16" />
    <HomeVideo class="my-16" />
    <HomeImpact class="my-16" />
    <HomeStoryTellers class="mt-16" />
    <HomeTellUsStory class="mb-16 pb-16" />
  </div>
</template>

<script>
import HomeVideo from '~/components/home/HomeVideo.vue';
import HomeImpact from '~/components/home/HomeImpact.vue';
import HomeSlider from '~/components/home/HomeSlider.vue';
import HomeTellUsStory from '~/components/home/HomeTellUsStory.vue';
import HomeStoryTellers from '~/components/home/HomeStoryTellers.vue';
import HomeServices from '~/components/home/HomeServices.vue';

export default {
  components: { HomeServices, HomeImpact, HomeStoryTellers, HomeTellUsStory, HomeVideo, HomeSlider },
  head() {
    return {
      title: this.$t('pageTitles.index')
    };
  }
};
</script>

<style lang="scss" scoped></style>
