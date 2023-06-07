<template>
  <video-player
    :id="ref"
    :ref="ref"
    :events="['fullscreenchange']"
    :options="{
      fluid: true,
      muted: true,
      fullscreen: true,
      responsive: true,
      controls: true,
      aspectRatio: '16:9',
      ...options
    }"
    :playsinline="true"
    :style="`${height && `height:${height};max-height:${height};`}${width && `;width:${width};max-width:${width};`}`"
    preload="none"
    @ended="
      flag.isPlaying = false;
      toggleFullscreen();
    "
    @fullscreenchange="onFullscreen"
    @pause="flag.isPlaying = false"
    @play="
      flag.isPlaying = true;
      toggleFullscreen();
    "
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

      this.player.fluid(typeof this.options.fluid === 'undefined' ? true : this.options.fluid);
      if (this.options.fill) this.player.fill(true);
      this.$emit('ready', this.player);
    }
  }
};
</script>

<style lang="scss"></style>
