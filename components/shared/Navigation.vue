<template>
  <div>
    <v-app-bar
      id="navigation"
      :class="['appbar', { ltr: isRTL }]"
      :height="showDrawer ? 70 : screenHeight < 760 ? 80 : 120"
      app
      color="white"
      elevate-on-scroll
      fixed
      flat
      tile
    >
      <v-sheet :class="['mx-auto d-flex align-center h-full w-full', { 'px-12': !showDrawer }]" color="transparent">
        <nuxt-link :to="localePath('/')" class="pointer" exact>
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
              <v-img alt="cobel" contain height="56" max-width="160" src="/images/logo-text.svg" />
            </div>
            <div class="position-relative">
              <v-img alt="cobel" contain height="60" max-width="160" src="/images/logo.png" />
            </div>
          </div>
        </nuxt-link>

        <v-spacer />

        <div v-if="!showDrawer" :class="{ rtl: isRTL }" class="d-flex overflow-hidden">
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            :ripple="false"
            :to="item.path && item.path !== 'video' ? localePath(item.path) : undefined"
            active-class="primary--text"
            class="bg-transparent px-2"
            color="transparent"
            depressed
            exact
            min-height="50"
            tile
            @click="item.path === 'video' ? showVideo() : undefined"
          >
            <span :class="['text-capitalize', isRTL ? 'font-weight-bold f-16' : 'f-14']">{{ $t(item.title) }}</span>
          </v-btn>
        </div>

        <v-btn
          :class="showDrawer ? 'mr-n2' : 'mr-n4'"
          :ripple="false"
          :to="$i18n.locale === 'en' ? switchLocalePath('fa') : switchLocalePath('en')"
          color="primary"
          icon
          small
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
          :class="['text-center white--text py-4 f-18', isRTL && 'font-weight-bold']"
          :to="item.path ? localePath(item.path) : undefined"
          color="#66869A"
          exact
          flat
          link
          style="opacity: 0.95; margin-bottom: 2px"
          tile
          @click="flag.showDrawer = false"
        >
          {{ $t(item.title) }}
        </v-card>
      </v-sheet>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      screenHeight: 1080,
      flag: {
        showDrawer: false,
        video: false
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
        { title: 'menu.point_of_view', path: 'video' },
        { title: 'menu.impact_stories', path: '/impact' },
        { title: 'menu.education', path: '/EducationAndEmpowerment' },
        { title: 'menu.people_careers', path: '/career' },
        { title: 'menu.companies', path: '/timeline' },
        { title: 'menu.contact_us', path: '/contact' }
      ];
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateHeight);
  },
  mounted() {
    this.calculateHeight();
    window.addEventListener('resize', this.calculateHeight);
  },
  methods: {
    calculateHeight() {
      this.screenHeight = window.innerHeight;
    },
    showVideo() {
      this.status = !this.status;
      this.$emit('changed', this.status);
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
