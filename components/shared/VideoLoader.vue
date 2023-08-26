<template>
  <video-player
    :id="ref"
    :ref="ref"
    :events="['fullscreenchange']"
    :options="{
      fluid: true,
      muted: false,
      fullscreen: true,
      responsive: true,
      controls: true,
      aspectRatio: '16:9',
      ...options
    }"
    :playsinline="true"
    :style="`${height && `height:${height};max-height:${maxSize || height};`}${
      width && `;width:${width};max-width:${maxSize || width};`
    };${minSize && `min-height:${minSize};min-width:${minSize}`}`"
    preload="none"
    @timeupdate="timeupdate"
    @ended="onVideoEnds"
    @fullscreenchange="onFullscreen"
    @error="onVideoErrors"
    @pause="onVideoPauses"
    @play="onVideoPlays"
    @ready="onReady"
  />
</template>

<script>
export default {
  props: {
    height: {
      type: Number | String,
      default: null
    },
    width: {
      type: Number | String,
      default: null
    },
    maxSize: {
      type: Number | String,
      default: null
    },
    minSize: {
      type: Number | String,
      default: null
    },
    options: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      ref: null,
      player: null,
      flag: {
        isPlaying: false
      }
    };
  },
  created() {
    this.ref = this.generateId();
  },
  beforeDestroy() {
    try {
      if (this.$refs[this.ref]) this.$refs[this.ref].$destroy();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    timeupdate(e) {
      if (!this.options.loop) return;
      if (this.options.duration && e.currentTime() >= this.options.duration) {
        e.currentTime(0);
      }
    },
    onVideoErrors() {
      console.log('video error');
    },
    onVideoPauses() {
      this.flag.isPlaying = false;
    },
    onVideoPlays() {
      this.flag.isPlaying = true;
      this.toggleFullscreen();
    },
    onVideoEnds() {
      this.flag.isPlaying = false;
      this.toggleFullscreen();
      this.$emit('ended');
    },
    onFullscreen(event) {
      this.$emit('toggleFullscreen', event.isFullscreen_);
      if (!event.isFullscreen_) {
        this.player.currentTime(0);
        this.pause();

        this.player.hasStarted(false);
        return;
      }

      this.play();
    },
    pause() {
      if (!this.player) return;
      if (!this.flag.isPlaying) return;

      try {
        this.player.pause();
      } catch (e) {
        console.log(e);
      }
    },
    play() {
      if (!this.player) return;
      if (this.flag.isPlaying) return;

      try {
        this.player.play();
      } catch (e) {
        console.log(e);
      }
    },
    toggleFullscreen() {
      if (!this.player) return;
      if (this.options.autoplay) return;

      try {
        this.player.requestFullscreen();
      } catch (e) {
        console.log(e);
      }
    },
    onReady() {
      if (this.player) return;
      this.player = this.$refs[this.ref].player;

      this.player.loop(typeof this.options.loop === 'undefined' ? true : this.options.loop);
      this.player.fluid(typeof this.options.fluid === 'undefined' ? true : this.options.fluid);
      if (this.options.fill) this.player.fill(true);
      this.$emit('ready', this.player);

      this.$nextTick(() => {
        if (this.options.autoplay) this.play();
      });
    }
  }
};
</script>

<style lang="scss">
.vjs-big-play-button {
  z-index: 2 !important;
}
</style>
