<template>
  <v-app-bar :height="150" color="transparent" hide-on-scroll elevate-on-scroll app flat tile>
    <v-container fluid>
      <div class="d-flex align-center h-full">
        <v-img src="/images/logo.png" alt="" height="74" max-width="250" contain />

        <v-spacer />

        <v-btn
          v-for="(item, index) in items"
          :key="index"
          tile
          color="white"
          exact
          depressed
          :to="item.path ? item.path : undefined"
        >
          <span class="text-capitalize">{{ $t(item.value) }}</span>
        </v-btn>

        <v-btn v-if="$i18n.locale === 'en'" :to="switchLocalePath('fa')" class="mx-1" color="primary" icon> Fa </v-btn>
        <v-btn v-else :to="switchLocalePath('en')" class="mx-1" color="primary" icon>En</v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    items() {
      return [
        { value: 'menu.point_of_view', path: '/about' },
        { value: 'menu.impact_stories', path: '/impact' },
        { value: 'menu.education', path: '/about' },
        { value: 'menu.people_careers', path: '/about' },
        { value: 'menu.press_center', path: '/about' }
      ];
    }
  }
};
</script>

<style scoped></style>
