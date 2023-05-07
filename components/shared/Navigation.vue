<template>
  <div>
    <v-app-bar class="appbar" :height="height" app color="white" fixed flat shrink-on-scroll tile>
      <v-sheet :max-width="globalMaxWidth" class="mx-auto d-flex align-center h-full w-full">
        <nuxt-link exact to="/">
          <v-img
            v-if="isPWA"
            alt="cobel"
            class="logo transition-fast-out-slow-in"
            contain
            height="60"
            max-width="85"
            src="/images/logo-shape.png"
          />
          <v-img
            v-else
            alt="cobel"
            class="logo transition-fast-out-slow-in"
            contain
            height="60"
            max-width="190"
            src="/images/logo.png"
          />
        </nuxt-link>

        <v-spacer />

        <template v-if="!isPWA">
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            :to="item.path ? item.path : undefined"
            color="transparent"
            class="bg-transparent"
            active-class="primary--text"
            depressed
            exact
            tile
          >
            <span class="text-capitalize f-14">{{ $t(item.value) }}</span>
          </v-btn>
        </template>

        <v-icon v-if="isPWA" @click="flag.showDrawer = !flag.showDrawer">mdi-menu</v-icon>

        <v-btn v-if="$i18n.locale === 'en'" :to="switchLocalePath('fa')" class="mx-1" color="primary" icon> Fa</v-btn>
        <v-btn v-else :to="switchLocalePath('en')" class="mx-1" color="primary" icon>En</v-btn>
      </v-sheet>
    </v-app-bar>

    <v-navigation-drawer v-if="isPWA" v-model="flag.showDrawer" app fixed>
      <v-list class="my-4" nav>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" :to="item.path ? item.path : undefined" color="primary" exact link>
            <v-list-item-content class="px-2">
              <v-list-item-title class="overflow-visible">
                <span class="text-capitalize">{{ $t(item.value) }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: {
        showDrawer: false
      },
      height: 120
    };
  },
  computed: {
    items() {
      return [
        { value: 'menu.point_of_view', path: '/about' },
        { value: 'menu.impact_stories', path: '/impact' },
        { value: 'menu.education', path: '/about' },
        { value: 'menu.people_careers', path: '/about' },
        { value: 'menu.press_center', path: '/news' }
      ];
    }
  }
};
</script>

<style lang="scss">
.appbar {
  .v-app-bar--is-scrolled {
    .logo {
      max-width: 50px !important;
    }
  }
}
</style>
