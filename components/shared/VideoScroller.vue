<template>
  <div id="bound-one" class="video-scroll">
    <div class="content">
      <div v-if="showIcon" class="scroll-helper">
        <h1>Scroll To Play</h1>
        <v-icon color="white" size="36">mdi-chevron-double-down</v-icon>
      </div>
      <v-icon class="exit-scroll" color="white" size="36" @click="$emit('close')">mdi-close-box</v-icon>

      <video id="povVideoLoader" width="95%" muted style="width: 100vw !important">
        <source src="/video/pov.mp4" type="video/mp4" />
        <p>Your user agent does not support the HTML5 Video element.</p>
      </video>
    </div>
  </div>
</template>

<script>
import VideoLoader from '~/components/shared/VideoLoader.vue';

export default {
  components: { VideoLoader },
  data() {
    return {
      interval: null,
      isPlaying: false,
      showIcon: true
    };
  },
  beforeDestroy() {
    if (this.interval) clearInterval(this.interval);
  },
  mounted() {
    this.onReady();
  },
  methods: {
    onReady() {
      this.$nextTick(() => {
        window.addEventListener('wheel', this.registerVideo);
      });
    },
    registerVideo(event) {
      if (this.isPlaying) return;

      this.isPlaying = true;
      if (this.interval) clearInterval(this.interval);

      const video = document.querySelector('#povVideoLoader');
      if (!video) return;

      const ratio = 1; // video scrolling speed
      const delta = event.deltaY;
      const duration = video.duration;
      const currentTime = video.currentTime;

      this.showIcon = currentTime === 0;

      let target = currentTime;

      if (delta > 0) {
        // scroll down
        target += ratio;
      } else {
        // scroll up
        target -= ratio;
      }

      if (target >= duration) {
        video.currentTime = duration;
        return;
      }

      if (target <= 0) {
        video.currentTime = 0;
        return;
      }

      try {
        this.playVideo(video, currentTime, target);
      } catch (e) {
        this.isPlaying = false;
        console.log(e);
      }
    },
    clearInterval() {
      this.isPlaying = false;
      clearInterval(this.interval);
    },
    playVideo(video, start, end) {
      let startTime = start;
      const ratio = 30; // frame ratio

      this.interval = setInterval(() => {
        if (end > start) {
          // forward
          startTime += 1 / ratio;

          if (startTime > end) {
            this.clearInterval();
            return;
          }
        } else {
          // backward
          startTime -= 1 / ratio;

          if (startTime < end) {
            this.clearInterval();
            return;
          }
        }

        console.log('interval', startTime);
        video.currentTime = startTime;
      }, 1000 / ratio);
    }
  }
};
</script>

<style scoped lang="scss">
.video-scroll {
  height: 1000vh;
  background: #d0d8db;

  .content {
    height: 100vh !important;
    width: 100vw;
    position: sticky;
    top: 0;
    bottom: 0;
  }

  video {
    width: 100vw !important;
  }

  .scroll-helper {
    position: fixed;
    top: 47%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 99;
    font-size: 20px;
    text-align: center;
    color: white;
  }

  .exit-scroll {
    position: fixed;
    top: 3%;
    left: 3%;
    transform: translate(-50%, -50%);
    z-index: 99;
    font-size: 20px;
    text-align: center;
    color: white;
  }
}
</style>
