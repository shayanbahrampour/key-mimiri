<template>
  <v-sheet
    :height="isMobile ? 'calc(100vh - 130px)' : `calc(100vh - ${screenHeight < 760 ? 80 : 120}px)`"
    class="position-relative mx-auto home-slider overflow-hidden d-flex d-flex align-center"
    color="transparent"
  >
    <v-sheet
      :class="['position-relative z-1 mx-auto d-flex align-center', isMobile ? 'px-8' : 'px-16']"
      color="transparent"
      height="100%"
      min-height="500"
    >
      <div class="d-flex flex-column align-end justify-space-between" :style="!isMobile && `height: 90%`">
        <h1
          :class="[
            'white--text text--darken-2 font-weight-regular',
            isMobile ? 'f-40' : 'f-40',
            isRTL && isMobile && 'text-center'
          ]"
          style="font-family: IBM Plex Mono; line-height: 1.4"
        >
          Shaw Bahrampour:<br />
          Riding the Data Wave with Retro Vibes - A Front-End Developer's Paradise
        </h1>
        <v-sheet
          v-if="!isMobile"
          class="rounded d-flex flex-column align-center mt-4"
          color="transparent"
          width="100%"
          height="100%"
          max-height="250"
          style="border: solid 2px grey !important"
        >
          <iframe
            title="Spotify Embed: Recommendation Playlist "
            src="https://open.spotify.com/embed/playlist/1UNUQqWRrpTgigGsXA7Fiy?utm_source=generator&theme=0"
            width="100%"
            height="180"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            class="rounded"
          />
          <span class="white--text f-24" style="font-family: IBM Plex Mono">In Praise of the Palm Tree🌴</span>
        </v-sheet>
      </div>
    </v-sheet>
    <v-sheet
      v-if="!isMobile"
      class="mr-16 rounded overflow-hidden"
      height="90%"
      min-width="35%"
      color="transparent"
      style="border: solid 2px grey !important"
    >
      <iframe
        src="https://my.spline.design/darkspideycopy-064a63ac1ff82ba5aeebc45c26b69ec8/"
        frameborder="0"
        width="100%"
        height="115%"
        style="border-radius: 14px"
      ></iframe>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      screenHeight: 1080,
      flag: {
        showFullscreen: false,
        video: false
      }
    };
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateHeight);
  },
  mounted() {
    this.calculateHeight();
    window.addEventListener('resize', this.calculateHeight);
  },
  methods: {
    calculateHeight() {
      this.screenHeight = window.innerHeight;
    }
  }
};
</script>

<style lang="scss">
.home-slider {
  video {
    object-fit: cover;
  }

  .vjs-fullscreen-control {
    cursor: default !important;
    margin: 0 !important;
    opacity: 0 !important;
    visibility: hidden;
    z-index: -1;
  }
}
</style>
