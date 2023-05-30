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
    playsinline
    :events="['fullscreenchange']"
    @ready="onReady"
    @ended="onEnded"
    @pause="flag.isPlaying = false"
    @play="flag.isPlaying = true"
    @fullscreenchange="onFullscreen"
    :style="height ? `height: ${height}px; max-height: ${height}px; min-height: ${height}px;` : ''"
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
        ready: false,
        isEnded: false,
        isMuted: false,
        isPlaying: false
      }
    };
  },
  beforeDestroy() {
    try {
      if (this.$refs[this.ref]) this.$refs[this.ref].$destroy();
    } catch (e) {
      console.log(e);
    }
  },
  created() {
    this.ref = this.generateId();
  },
  methods: {
    onFullscreen(event) {
      if (!event.isFullscreen_) this.pause();
    },
    play() {
      if (!this.player) return;
      if (this.flag.isPlaying) return;

      try {
        this.player.play();
        this.player.requestFullscreen();
      } catch (e) {
        console.log(e);
      }
    },
    pause() {
      if (!this.player) return;
      if (!this.flag.isPlaying) return;

      this.player.pause();
    },
    onReady() {
      if (this.flag.ready) return;
      if (this.player) return;

      this.flag.ready = true;
      this.player = this.$refs[this.ref].player;

      this.player.fluid(typeof this.options.fluid === 'undefined' ? true : this.options.fluid);
      if (this.options.fill) this.player.fill(true);

      this.$emit('ready', this.player);
    },
    onEnded() {
      this.flag.isPlaying = false;
      this.flag.isEnded = true;
    }
  }
};
</script>

<style scoped lang="scss"></style>
