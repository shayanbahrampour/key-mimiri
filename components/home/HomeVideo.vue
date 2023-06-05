<template>
  <div>
    <VideoContents class="w-full" poster="/images/temp/cover-6.png" src="/video/temp.mp4" />
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
