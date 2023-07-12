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
          <VideoLoader
            v-if="src"
            :options="{
              autoplay: true,
              sources: [
                {
                  type: 'video/mp4',
                  src
                }
              ]
            }"
            class="vjs-theme-sea"
            @ready="$emit('ready', $event)"
            @toggleFullscreen="$emit('toggleFullscreen', $event)"
            @ended="dialog = false"
          /> </client-only
      ></v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import Footer from '~/components/shared/Footer.vue';
import Navigation from '~/components/shared/Navigation.vue';
import VideoLoader from '~/components/shared/VideoLoader';

export default {
  components: { Footer, Navigation, VideoLoader },
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
