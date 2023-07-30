<template>
  <div class="position-relative">
    <VideoContents
      class="w-full overflow-hidden d-flex align-center"
      poster="/images/temp/cover-10.jpg"
      src="/video/index-video.mp4"
      style="max-height: calc(100vh - 90px)"
    />
    <HomeVideoContents />
  </div>
</template>

<script>
import HomeVideoContents from '~/components/home/HomeVideoContents.vue';
import VideoContents from '~/components/shared/VideoContents.vue';

export default {
  components: { VideoContents, HomeVideoContents }
};
</script>

<style lang="scss" scoped></style>
