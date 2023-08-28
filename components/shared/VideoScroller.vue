<template>
  <div id="bound-one" class="video-scroll black d-flex align-center justify-center h-screen">
    <v-btn icon large @click="$store.commit('SET', { povDialog: false })" fixed class="top-0 end-0 ma-4 z-10">
      <v-icon color="white" size="40">mdi-close</v-icon>
    </v-btn>

    <div class="content d-flex align-center justify-center h-screen">
      <div v-if="showIcon" class="scroll-helper">
        <h1 class="bel">Scroll To Play</h1>
        <v-icon color="white" size="36">mdi-chevron-double-down</v-icon>
      </div>

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
      showIcon: true,
      touchstart: 0
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
        window.addEventListener('touchstart', (event) => {
          this.touchstart = event;
        });
        window.addEventListener('touchmove', this.registerVideo);
      });
    },
    clearInterval() {
      this.isPlaying = false;
      if (this.interval) clearInterval(this.interval);
    },
    registerVideo(event) {
      if (this.isPlaying) return;

      this.isPlaying = true;
      if (this.interval) clearInterval(this.interval);

      const video = document.querySelector('#povVideoLoader');
      if (!video) return;

      this.showIcon = false;

      const scrollSpeed = 3; // video speed per seconds
      const delta =
        event.deltaY || this.isMobile
          ? this.touchstart.targetTouches[0].screenY > event.targetTouches[0].screenY
            ? 1
            : 0
          : 0;
      const duration = video.duration;
      const currentTime = video.currentTime;

      let target = currentTime || 0;

      if (delta > 0) {
        target += scrollSpeed; // scroll down
      } else {
        target -= scrollSpeed; // scroll up
      }

      if (target >= duration) {
        video.currentTime = duration;
        return;
      }

      if (target <= 0) target = 0;

      try {
        this.playVideo(video, currentTime, target);
      } catch (e) {
        this.isPlaying = false;
        console.log(e);
      }
    },
    playVideo(video, start, end) {
      let startTime = start;
      const frameRatio = 24; // frame ratio

      this.interval = setInterval(() => {
        if (end > start) {
          startTime += 1 / frameRatio; // forward

          if (startTime > end) {
            this.clearInterval();
            return;
          }
        } else {
          startTime -= 1 / frameRatio; // backward

          if (startTime < end) {
            this.clearInterval();
            return;
          }
        }

        video.currentTime = startTime;
      }, 1000 / frameRatio);
    }
  }
};
</script>

<style scoped lang="scss">
.video-scroll {
  height: 1000vh;

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
    bottom: 1%;
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
