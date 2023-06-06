<template>
  <div class="position-relative">
    <VideoContents
      class="w-full overflow-hidden"
      poster="/images/temp/cover-6.png"
      src="/video/temp.mp4"
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
