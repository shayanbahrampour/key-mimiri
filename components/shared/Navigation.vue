<template>
  <div>
    <v-app-bar
      :height="showDrawer ? 70 : 120"
      :scroll-threshold="showDrawer ? 70 : 120"
      app
      :class="['appbar', { ltr: isRTL }]"
      color="white"
      elevate-on-scroll
      fixed
      flat
      tile
    >
      <v-sheet
        :class="['mx-auto d-flex align-center h-full w-full', { 'px-12': !showDrawer }]"
        :max-width="globalMaxWidth"
        color="transparent"
      >
        <nuxt-link :to="localePath('/')" exact class="pointer">
          <v-img
            v-if="showDrawer"
            alt="cobel"
            class="logo"
            contain
            height="40"
            max-width="130"
            src="/images/logo.png"
          />

          <div v-else class="logo-container overflow-hidden">
            <div class="position-relative">
              <v-img alt="cobel" contain height="56" max-width="190" src="/images/logo-text.svg" />
            </div>
            <div class="position-relative">
              <v-img alt="cobel" contain height="60" max-width="190" src="/images/logo.png" />
            </div>
          </div>
        </nuxt-link>

        <v-spacer />

        <div v-if="!showDrawer" :class="{ rtl: isRTL }">
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            :ripple="false"
            :to="item.path ? localePath(item.path) : undefined"
            active-class="primary--text"
            class="bg-transparent px-3"
            color="transparent"
            depressed
            exact
            min-height="50"
            tile
          >
            <span :class="['text-capitalize', isRTL ? 'font-weight-600 f-16' : 'f-14']">{{ $t(item.value) }}</span>
          </v-btn>
        </div>

        <v-btn
          :class="showDrawer ? 'mr-n2' : 'mr-n4'"
          :ripple="false"
          :to="$i18n.locale === 'en' ? switchLocalePath('fa') : switchLocalePath('en')"
          color="primary"
          icon
        >
          <template v-if="$i18n.locale === 'en'">Fa</template>
          <template v-else>En</template>
        </v-btn>

        <v-btn
          v-if="showDrawer"
          :ripple="false"
          class="pr-0 bg-transparent mr-n4"
          color="black"
          icon
          @click="flag.showDrawer = !flag.showDrawer"
        >
          <v-icon>
            <template v-if="flag.showDrawer">mdi-close</template>
            <template v-else>mdi-menu</template>
          </v-icon>
        </v-btn>
      </v-sheet>
    </v-app-bar>

    <v-expand-transition>
      <v-sheet
        v-if="showDrawer && flag.showDrawer"
        :style="`top: ${showDrawer ? '65px' : '58px'}`"
        class="position-fixed start-0 end-0 w-screen z-11"
        color="transparent"
      >
        <v-card
          v-for="(item, index) in items"
          :key="index"
          :to="item.path ? item.path : undefined"
          class="text-center white--text py-4 f-18"
          color="#66869A"
          exact
          flat
          link
          style="opacity: 0.95; margin-bottom: 2px"
          tile
          @click="flag.showDrawer = false"
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
    showDrawer() {
      return this.$vuetify.breakpoint.smAndDown;
    },
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
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05) !important;

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
