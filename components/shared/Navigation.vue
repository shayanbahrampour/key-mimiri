<template>
  <div>
    <v-app-bar
      id="navigation"
      :class="['appbar d-flex justify-center', { ltr: isRTL }]"
      :height="showDrawer ? 70 : screenHeight < 760 ? 80 : 120"
      app
      color="white"
      elevate-on-scroll
      fixed
      flat
      tile
      style="background: linear-gradient(to left, #232d3f, black) !important"
    >
      <v-sheet
        :class="[
          'mx-auto d-flex align-center w-full',
          { 'px-12': !showDrawer },
          isMobile ? 'sheet-container-mobile' : 'sheet-container'
        ]"
        color="transparent"
      >
        <div v-if="!showDrawer" :class="{ rtl: isRTL }" class="d-flex overflow-hidden justify-center">
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            :ripple="false"
            :to="item.path"
            :class="['bg-transparent grey--text button-appbar mx-4 px-4']"
            active-class="active-text"
            depressed
            exact
            min-height="50"
            width="150"
            tile
            outlined
            style="border: solid 2px grey; border-radius: 14px"
          >
            <v-divider />
            <span :class="['text-none', isRTL ? 'font-weight-regular f-16' : 'f-16']" style="font-family: Gabarito">
              {{ $t(item.title) }}
            </span>
          </v-btn>
        </div>
        <v-btn
          v-if="showDrawer"
          :ripple="false"
          class="pr-0 bg-transparent"
          color="black"
          icon
          @click="flag.showDrawer = !flag.showDrawer"
        >
          <v-icon color="white">
            <template v-if="flag.showDrawer">mdi-close</template>
            <template v-else>mdi-menu</template>
          </v-icon>
        </v-btn>
      </v-sheet>
    </v-app-bar>

    <v-expand-transition>
      <v-sheet
        v-if="showDrawer && flag.showDrawer"
        :style="`top: ${showDrawer ? '65px' : '58px'}; background: linear-gradient(to left, #232d3f, black) !important`"
        class="position-fixed start-0 end-0 w-screen z-11"
      >
        <v-card
          v-for="(item, index) in !flag.expandMenu ? items : expanded"
          :key="index"
          class="text-center white--text py-4 f-18"
          :to="item.path"
          color="transparent"
          exact
          flat
          link
          tile
          style="font-family: Gabarito"
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
        video: false,
        expandMenu: false,
        showDrawer: false,
        showDropdown: false,
        allowSwitcher: false
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
        { title: 'menu.home', path: '/' },
        { title: 'Projects', path: '/works' },
        { title: 'Say Hello', path: '/contact' }
      ];
    },
    expanded() {
      return [
        { title: 'menu.home', path: '/' },
        { title: 'Projects', path: '/works' },
        { title: 'Say Hello', path: '/contact' }
      ];
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateHeight);
  },
  mounted() {
    this.calculateHeight();
    window.addEventListener('resize', this.calculateHeight);

    this.flag.allowSwitcher = window.location.host.includes('redhat') || window.location.host.includes('localhost');
  },
  methods: {
    calculateHeight() {
      this.screenHeight = window.innerHeight;
    },
    showVideo() {
      this.$store.commit('SET', { povDialog: true });
    }
  }
};
</script>

<style lang="scss" scoped>
.active-text {
  color: white !important;
}
hr {
  display: none;
}
.button-appbar:hover {
  span {
    color: white !important;
  }
}

.appbar.v-app-bar {
  &,
  &.v-toolbar,
  .v-toolbar__content {
    transition: all ease-out 0.2s !important;
  }
}
.v-menu__content {
  box-shadow: none !important;
}
.button-menu:hover {
  padding-block: 24px !important;
}
</style>
