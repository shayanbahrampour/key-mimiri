<template>
  <v-app>
    <v-main>
      <Navigation :status="dialog" />

      <v-fade-transition hide-on-leave leave-absolute>
        <Nuxt />
      </v-fade-transition>

      <Footer />

      <v-dialog :value="povDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <client-only>
          <VideoScroller v-if="povDialog" />
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
import { mapGetters } from 'vuex';

export default {
  components: { Footer, Navigation, VideoLoader, VideoScroller },
  data() {
    return {
      dialog: false,
      src: '/video/pov.mp4'
    };
  },
  computed: {
    ...mapGetters({
      povDialog: 'povDialog'
    })
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler: 'changeDirection'
    }
  },
  methods: {
    showVideo(event) {
      this.$store.commit('SET', { povDialog: event });
    }
  }
};
</script>

<style lang="scss"></style>
