<template>
  <v-app>
    <v-main>
      <Navigation @changed="showVideo($event)" :status="dialog" />

      <v-fade-transition hide-on-leave leave-absolute>
        <Nuxt />
      </v-fade-transition>

      <Footer @changed="showVideo($event)" :status="dialog" />

      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <client-only>
          <VideoScroller @close="dialog = !dialog" />
        </client-only>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import Footer from '~/components/shared/Footer';
import Navigation from '~/components/shared/Navigation';
import VideoLoader from '~/components/shared/VideoLoader';
import VideoScroller from '~/components/shared/VideoScroller';

export default {
  components: { Footer, Navigation, VideoLoader, VideoScroller },
  data() {
    return {
      dialog: false,
      src: '/video/pov.mp4'
    };
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler: 'changeDirection'
    }
  },
  methods: {
    showVideo(event) {
      this.dialog = event;
    }
  }
};
</script>

<style lang="scss"></style>
