<template>
  <div>
    <v-app-bar
      :height="isMobile ? 70 : 120"
      class="appbar"
      color="white"
      elevate-on-scroll
      fixed
      app
      flat
      tile
      :scroll-threshold="isMobile ? 70 : 120"
    >
      <v-sheet
        :class="['mx-auto d-flex align-center h-full w-full', { 'px-12': !isMobile }]"
        :max-width="globalMaxWidth"
        color="transparent"
      >
        <nuxt-link :to="localePath('/')" exact>
          <v-img v-if="isMobile" alt="cobel" class="logo" contain height="40" max-width="130" src="/images/logo.png" />

          <div v-else class="logo-container overflow-hidden">
            <div class="position-relative">
              <v-img alt="cobel" contain height="60" max-width="190" src="/images/logo-text.svg" />
            </div>
            <div class="position-relative">
              <v-img alt="cobel" contain height="60" max-width="190" src="/images/logo.png" />
            </div>
          </div>
        </nuxt-link>

        <v-spacer />

        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            :ripple="false"
            :to="item.path ? localePath(item.path) : undefined"
            active-class="primary--text"
            class="bg-transparent"
            color="transparent"
            depressed
            exact
            tile
          >
            <span class="text-capitalize f-14">{{ $t(item.value) }}</span>
          </v-btn>
        </template>

        <v-icon v-if="$vuetify.breakpoint.smAndDown" @click="flag.showDrawer = !flag.showDrawer">mdi-menu</v-icon>

        <v-btn v-if="$i18n.locale === 'en'" :to="switchLocalePath('fa')" class="mx-1" color="primary" icon> Fa</v-btn>
        <v-btn v-else :to="switchLocalePath('en')" class="mx-1" color="primary" icon>En</v-btn>
      </v-sheet>
    </v-app-bar>

    <v-navigation-drawer v-if="$vuetify.breakpoint.smAndDown" v-model="flag.showDrawer" :right="isRTL" app fixed>
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
      }
    };
  },
  computed: {
    items() {
      return [
        { value: 'menu.point_of_view', path: '/' },
        { value: 'menu.impact_stories', path: '/impact' },
        { value: 'menu.education', path: '/education' },
        { value: 'menu.people_careers', path: '/career' },
        { value: 'menu.press_center', path: '/news' }
      ];
    }
  }
};
</script>

<style lang="scss">
.appbar.v-app-bar {
  &.v-app-bar--is-scrolled {
    transform: none !important;
    transition: all ease-in 0.2s !important;
    box-shadow: 0 17px 13px -13px rgba(0, 0, 0, 0.2) !important;

    &,
    .v-toolbar__content {
      height: 56px !important;
    }

    .logo-container {
      height: 56px;
      transition: all ease-in 0.2s !important;

      > div {
        bottom: 0;
        min-height: 90px;
        transition: all ease-in 0.2s !important;
      }
    }
  }

  .logo-container {
    height: 120px;
    transition: all ease-out 0.2s !important;

    > div {
      bottom: 90px;
      min-height: 120px;
      transition: all ease-out 0.2s !important;
    }
  }

  &,
  &.v-toolbar,
  .v-toolbar__content {
    transition: all ease-out 0.2s !important;
  }
}
</style>
