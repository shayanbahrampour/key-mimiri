<template>
  <div>
    <v-app-bar
      :height="isMobile ? 70 : 120"
      :scroll-threshold="isMobile ? 70 : 120"
      app
      class="appbar"
      color="white"
      elevate-on-scroll
      fixed
      flat
      tile
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
            min-height="50"
          >
            <span class="text-capitalize f-14">{{ $t(item.value) }}</span>
          </v-btn>
        </template>

        <v-btn
          :to="$i18n.locale === 'en' ? switchLocalePath('fa') : switchLocalePath('en')"
          color="primary"
          icon
          :ripple="false"
        >
          <template v-if="$i18n.locale === 'en'">Fa</template>
          <template v-else>En</template>
        </v-btn>

        <v-icon class="bg-transparent" v-if="$vuetify.breakpoint.smAndDown" @click="flag.showDrawer = !flag.showDrawer">
          <template v-if="flag.showDrawer">mdi-close</template>
          <template v-else>mdi-menu</template>
        </v-icon>
      </v-sheet>
    </v-app-bar>

    <v-expand-transition>
      <v-sheet
        v-if="$vuetify.breakpoint.smAndDown && flag.showDrawer"
        class="position-fixed start-0 end-0 w-screen z-11"
        color="transparent"
        style="top: 65px"
      >
        <v-card
          flat
          tile
          v-for="(item, index) in items"
          :key="index"
          :to="item.path ? item.path : undefined"
          color="#66869A"
          exact
          link
          style="opacity: 0.95; margin-bottom: 2px"
          class="text-center white--text py-4 f-18"
        >
          {{ $t(item.value) }}
        </v-card>
      </v-sheet>
    </v-expand-transition>
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
  watch: {
    $route() {
      this.flag.showDrawer = false;
    }
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
    box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.2) !important;

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
