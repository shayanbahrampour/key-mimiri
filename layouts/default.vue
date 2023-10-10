<template>
  <v-app>
    <v-main style="background: linear-gradient(to left, #232d3f, black) !important">
      <Navigation />

      <v-fade-transition hide-on-leave leave-absolute>
        <Nuxt />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '~/components/shared/Navigation';

export default {
  components: { Navigation },
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
      this.$store.commit('SET', { povDialog: event });
    }
  }
};
</script>

<style lang="scss"></style>
