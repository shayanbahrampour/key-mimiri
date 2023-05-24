<template>
  <v-app>
    <v-main>
      <Navigation />

      <v-fade-transition hide-on-leave leave-absolute>
        <Nuxt />
      </v-fade-transition>

      <Footer :horizontal="false" />
    </v-main>
  </v-app>
</template>

<script>
import Footer from '~/components/shared/Footer.vue';
import Navigation from '~/components/shared/Navigation.vue';

export default {
  components: { Footer, Navigation },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler: 'changeDirection'
    }
  }
};
</script>

<style lang="scss"></style>
