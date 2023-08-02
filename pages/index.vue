<template>
  <div class="mb-16">
    <HomeSlider />
    <HomeServices />
    <HomeVideo />
    <HomeImpact />
    <HomeStoryTellers />
    <CTAContent path="story" />
  </div>
</template>

<script>
import HomeVideo from '~/components/home/HomeVideo.vue';
import HomeServices from '~/components/home/HomeServices';
import HomeImpact from '~/components/home/HomeImpact.vue';
import HomeSlider from '~/components/home/HomeSlider.vue';
import HomeStoryTellers from '~/components/home/HomeStoryTellers.vue';
import CTAContent from '~/components/shared/CTAContent.vue';
import VideoLoader from '~/components/shared/VideoLoader.vue';

export default {
  components: { VideoLoader, HomeServices, HomeImpact, HomeStoryTellers, HomeVideo, HomeSlider, CTAContent },
  head() {
    return {
      title: this.$t('pageTitles.index')
    };
  }
};
</script>

<style lang="scss" scoped></style>
