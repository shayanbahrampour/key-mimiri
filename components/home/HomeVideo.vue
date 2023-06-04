<template>
  <div>
    <VideoLoader
      :options="{
        poster: '/images/temp/cover-6.png',
        sources: [
          {
            type: 'video/mp4',
            src: '/video/temp.mp4'
          }
        ]
      }"
      class="w-full"
    />
    <HomeVideoContents />
  </div>
</template>

<script>
import VideoLoader from '~/components/shared/VideoLoader.vue';
import HomeVideoContents from '~/components/home/HomeVideoContents.vue';

export default {
  components: { HomeVideoContents, VideoLoader }
};
</script>

<style lang="scss" scoped></style>
