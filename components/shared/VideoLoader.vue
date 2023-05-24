<template>
  <v-sheet
    v-if="src"
    :id="`${ref}-sheet`"
    :class="[
      'flex-shrink-0 d-flex align-center justify-center text-center mx-auto position-relative overflow-hidden',
      { 'fill-poster': !withPreview },
      { pointer: withPreview },
      { autoplay }
    ]"
    :height="height"
    :width="width"
    color="transparent"
    min-height="50"
  >
    <template v-if="autoplay">
      <div class="pa-2 top-0 start-0 z-2 position-absolute">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          depressed
          fab
          height="35"
          style="backdrop-filter: blur(2px)"
          width="35"
          @click="toggleFullscreen"
        >
          <v-icon color="white" size="16"> fas fa-regular fa-expand</v-icon>
        </v-btn>
      </div>

      <div class="pa-2 top-0 end-0 z-2 position-absolute">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          depressed
          fab
          height="35"
          style="backdrop-filter: blur(2px)"
          width="35"
          @click="toggleMute"
        >
          <v-icon color="white" size="15">
            <template v-if="flag.isMuted"> fas fa-volume-mute</template>
            <template v-else> fas fa-volume-high</template>
          </v-icon>
        </v-btn>
      </div>
    </template>
    <div
      v-intersect="
        autoplay
          ? {
              handler: onAutoPlay,
              options: {
                threshold: 1
              }
            }
          : {}
      "
      class="position-absolute top-0 bottom-0 start-0 end-0 ma-auto z-1 h-100 w-100 d-flex align-center justify-center"
      @click.prevent="togglePlay"
    >
      <v-btn
        v-if="showPlayButton"
        color="rgba(0, 0, 0, 0.2)"
        depressed
        fab
        height="50"
        style="backdrop-filter: blur(2px)"
        width="50"
      >
        <v-icon color="white" size="25">far fa-play</v-icon>
      </v-btn>
    </div>
    <videoPlayer
      :ref="ref"
      :events="['fullscreenchange']"
      :options="playerOptions"
      class="position-relative z-0 w-full vjs-theme-sea"
      playsinline
      @ended="onEnded"
      @error="onRetry"
      @fullscreenchange="onFullscreen"
      @pause="flag.isPlaying = false"
      @play="flag.isPlaying = true"
      @ready="onReady"
    />
  </v-sheet>
</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player/dist/ssr';

import FileMixin from '~/mixins/mixin.file';

export default {
  name: 'VideoLoader',
  mixins: [FileMixin],
  components: {
    videoPlayer
  },
  data() {
    return {
      player: null,
      cardHeight: 0,
      retry: 0,
      flag: {
        ready: false,
        isEnded: false,
        isMuted: true,
        hasError: false,
        isPlaying: false,
        isIntersecting: false,
        showPlayIcon: true
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
  watch: {
    getMediaRef() {
      if (!this.player) return;
      if (!this.flag.isPlaying) return;

      if (this.ref !== this.getMediaRef) this.pause();
    }
  },
  computed: {
    showPlayButton() {
      if (this.flag.hasError) return false;

      return (
        (this.withPreview && this.flag.ready && !this.flag.isPlaying) ||
        (this.autoplay && !this.flag.isPlaying && !this.flag.isEnded)
      );
    },
    playerOptions() {
      console.log(this.poster);
      return {
        fluid: true,
        muted: true,
        language: 'fa',
        aspectRatio: '16:9',
        poster: this.poster || undefined,
        fullscreen: !this.autoplay,
        controls: this.withPreview,
        sources: this.src
          ? [
              {
                type: 'video/mp4',
                src: this.src
              }
            ]
          : [],
        ...this.options
      };
    }
  },
  methods: {
    onAutoPlay(entries) {
      this.flag.isIntersecting = entries[0].isIntersecting;
      if (!this.flag.isEnded) this.checkToPlay();
    },
    toggleMute() {
      if (!this.player) return;

      try {
        this.player.muted(!this.flag.isMuted);
        this.flag.isMuted = !this.flag.isMuted;
      } catch (e) {
        console.log(e);
      }
    },
    checkToPlay() {
      if (!this.src) return;
      if (this.flag.isIntersecting) return this.play();

      this.pause();
    },
    togglePlay() {
      if (this.flag.isPlaying) return this.pause();
      this.play();
    },
    toggleFullscreen() {
      this.play();
      this.player.requestFullscreen();
    },
    play() {
      if (!this.player) return;
      if (this.flag.hasError) return;
      if (this.flag.isPlaying) return;

      this.$store.commit('mediaPlayer/SET', { ref: this.ref });
      if (this.autoplay && this.flag.isIntersecting) this.player.play();

      if (this.withPreview) {
        this.player.play();
        if (this.player) this.player.requestFullscreen();
      }

      setTimeout(() => {
        if (this.flag.isMuted) this.toggleMute();
      }, 500);
    },
    pause() {
      if (!this.player) return;
      if (!this.flag.isPlaying) return;

      this.player.pause();
    },
    onFullscreen(event) {
      if (!event.isFullscreen_) this.pause();
    },
    onRetry() {
      if (!this.player) return;
      this.flag.hasError = true;
      if (this.retry > 3) return;

      this.retry++;
      const time = this.player.currentTime();

      try {
        switch (this.player.error().code) {
          case 2:
            this.player.error(null).pause().load().currentTime(time).play();
            break;
        }
      } catch (e) {
        console.log(e);
      }
    },
    onReady() {
      this.flag.hasError = false;
      if (this.flag.ready) return;
      this.flag.ready = true;
      this.player = this.$refs[this.ref].player;

      this.$nextTick(() => {
        const elm = document.getElementById(`${this.ref}-sheet`);
        this.cardHeight = elm ? elm.offsetHeight : 120;

        if (this.autoplay && this.player && this.flag.isIntersecting && !this.flag.isPlaying) {
          this.play();
        } else {
          this.player.duration(1);
        }
      });
    },
    onEnded() {
      this.flag.isPlaying = false;
      this.flag.isEnded = true;
    }
  }
};
</script>

<style lang="scss"></style>
