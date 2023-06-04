<template>
  <video-player
    :id="ref"
    :ref="ref"
    :options="{
      fluid: true,
      muted: true,
      fullscreen: true,
      responsive: true,
      controls: true,
      aspectRatio: '16:9',
      ...options
    }"
    preload="none"
    playsinline
    :style="height ? `height: ${height}px; max-height: ${height}px; min-height: ${height}px;` : ''"
    :events="['fullscreenchange']"
    @fullscreenchange="onFullscreen"
    @ready="onReady"
    @pause="flag.isPlaying = false"
    @ended="
      flag.isPlaying = false;
      toggleFullscreen();
    "
    @play="
      flag.isPlaying = true;
      toggleFullscreen();
    "
  />
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
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
    onFullscreen(event) {
      if (!event.isFullscreen_) this.pause();
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
