<template>
  <div
    id="bound-one"
    class="video-scroll black d-flex align-center justify-center h-screen position-fixed top-0 left-0"
  >
    <v-btn icon large @click="$store.commit('SET', { povDialog: false })" fixed class="top-0 end-0 ma-4 z-10">
      <v-icon color="white" size="40">mdi-close</v-icon>
    </v-btn>

    <div class="content d-flex align-center justify-center h-screen">
      <div v-if="showIcon" class="scroll-helper">
        <div :class="['bel font-weight-bold', isMobile ? 'f-30' : 'f-40']">Scroll To Play</div>
        <v-icon color="white" size="36">mdi-chevron-double-down</v-icon>
      </div>

      <video
        preload="auto"
        id="povVideoLoader"
        ref="videoPlayer"
        class="h-full video-js vjs-default-skin"
        width="100%"
        playsInline
        muted
        style="width: 100vw !important"
      >
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
      desiredTime: 0,
      touchstart: 0,

      player: null,
      interval: null,
      isPlaying: false,
      showIcon: true
    };
  },
  mounted() {
    // Initialize Video.js player
    this.player = this.$videojs(this.$refs.videoPlayer, {
      fluid: true,
      muted: true,
      preload: 'auto',
      fullscreen: true,
      responsive: true,
      controls: false,
      aspectRatio: '16:9'
    });

    this.$nextTick(() => {
      window.addEventListener('wheel', this.registerVideo);
      window.addEventListener('touchstart', (event) => {
        this.touchstart = event;
      });
      window.addEventListener('touchmove', this.registerVideo);
    });
  },
  beforeDestroy() {
    if (this.player) this.player.dispose();
    if (this.interval) clearInterval(this.interval);
    this.player.off('timeupdate', this.listenToStop);
  },
  methods: {
    registerVideo(event) {
      if (this.isPlaying) return;

      this.isPlaying = true;
      if (this.interval) clearInterval(this.interval);

      this.showIcon = false;

      const scrollSpeed = 3; // video speed per seconds
      let delta = event.deltaY;

      if (this.isMobile && this.touchstart) {
        delta = this.touchstart.targetTouches[0].screenY > event.targetTouches[0].screenY;
      }

      const duration = this.player.duration();
      this.desiredTime = this.player.currentTime();

      if (delta > 0) {
        this.desiredTime += scrollSpeed; // scroll down
      } else {
        this.desiredTime -= scrollSpeed; // scroll up
      }

      if (this.desiredTime >= duration) {
        this.player.currentTime(duration);
        return;
      }

      if (this.desiredTime <= 0) this.desiredTime = 0;
      this.seekToTime();
    },
    listenToStop() {
      if (!this.player) return;
      if (this.player.paused()) return;
      const currentTime = this.player.currentTime();

      if (currentTime >= this.desiredTime) {
        this.pause();
        this.isPlaying = false;
        this.player.off('timeupdate', this.listenToStop);
        if (this.desiredTime === 0) this.player.currentTime(this.desiredTime);
      }
    },
    pause() {
      if (!this.player) return;
      this.player.pause();
      this.isPlaying = false;
    },
    play() {
      if (!this.player) return;
      this.player.play();
    },
    seekToTime() {
      const currentTime = this.player.currentTime();
      if (currentTime > this.desiredTime) {
        let current = currentTime;
        this.interval = setInterval(() => {
          if (current <= this.desiredTime) {
            if (this.interval) clearInterval(this.interval);
            this.isPlaying = false;
            // this.seekToTime();
          } else {
            current = current - 0.125;
            this.player.currentTime(current);
          }
        }, 80);

        return;
      }

      this.player.off('timeupdate', this.listenToStop);

      setTimeout(() => {
        this.player.on('timeupdate', this.listenToStop);

        this.play();
      }, 500);
    }
  }
};
</script>

<style scoped lang="scss">
.video-scroll {
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
