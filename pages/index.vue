<template>
  <div class="mb-16">
    <HomeSlider />
    <HomeServices class="mb-16" />
    <HomeVideo :class="['my-16', { 'pt-12': !isMobile }]" />
    <HomeImpact class="my-16" />
    <HomeStoryTellers class="mt-16" />
    <HomeTellUsStory />
  </div>
</template>

<script>
import HomeVideo from '~/components/home/HomeVideo.vue';
import HomeServices from '~/components/home/HomeServices';
import HomeImpact from '~/components/home/HomeImpact.vue';
import HomeSlider from '~/components/home/HomeSlider.vue';
import HomeTellUsStory from '~/components/home/HomeTellUsStory.vue';
import HomeStoryTellers from '~/components/home/HomeStoryTellers.vue';
import VideoLoader from '~/components/shared/VideoLoader.vue';

export default {
  components: { VideoLoader, HomeServices, HomeImpact, HomeStoryTellers, HomeTellUsStory, HomeVideo, HomeSlider },
  head() {
    return {
      title: this.$t('pageTitles.index')
    };
  }
};
</script>

<style lang="scss" scoped></style>
