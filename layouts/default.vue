<template>
  <v-app>
    <v-main>
      <Navigation />

      <v-fade-transition hide-on-leave leave-absolute>
        <Nuxt />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '~/components/shared/Navigation.vue';

export default {
  components: { Navigation }
};
</script>

<style lang="scss"></style>
