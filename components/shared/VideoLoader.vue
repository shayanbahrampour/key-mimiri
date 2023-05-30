<template>
  <div class="position-relative">
    <video-player
      :id="ref"
      :ref="ref"
      :options="{
        fluid: true,
        muted: true,
        controls: true,
        autoplay: false,
        fullscreen: true,
        responsive: true,
        aspectRatio: '16:9',
        ...options
      }"
      class="vjs-theme-sea w-full overflow-hidden"
      playsinline
      :events="['fullscreenchange']"
      @ready="onReady"
      @ended="onEnded"
      @fullscreenchange="onFullscreen"
      :style="height ? `height: ${height}px; max-height: ${height}px; min-height: ${height}px;` : ''"
    />

    <v-img
      v-if="!options.autoplay"
      :height="isMobile ? 40 : 120"
      :max-height="isMobile ? 40 : 120"
      :max-width="isMobile ? 40 : 120"
      :width="isMobile ? 40 : 120"
      class="ma-auto position-absolute top-0 bottom-0 end-0 start-0 z-2 pointer"
      contain
      src="/images/icons/play-btn.svg"
      @click="play"
    />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 700
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

      console.log(this.player);
      this.flag.isPlaying = true;

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
      this.flag.isPlaying = false;
    },
    onReady() {
      if (this.flag.ready) return;

      this.flag.ready = true;
      this.player = this.$refs[this.ref].player;

      this.player.fluid(this.options.fluid || false);
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
