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
      <v-sheet
        :class="['mx-auto d-flex align-center h-full w-full sheet-container', { 'px-12': !showDrawer }]"
        color="transparent"
      >
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
            :to="
              item.path && item.path !== 'video' && item.title !== 'menu.empowerment'
                ? localePath(item.path)
                : undefined
            "
            active-class="primary--text"
            class="bg-transparent px-2"
            color="transparent"
            depressed
            exact
            min-height="50"
            tile
            @click="item.path === 'video' ? showVideo() : undefined"
          >
            <v-divider></v-divider>
            <span
              v-if="item.title !== 'menu.empowerment'"
              :class="['text-none', isRTL ? 'font-weight-bold f-16' : 'f-14']"
              >{{ $t(item.title) }}</span
            >
            <v-menu v-else offset-y rounded="0" v-model="flag.showDropdown" style="top: 80px !important">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :class="['text-none bg-transparent ma-0 pa-0', isRTL ? 'font-weight-bold f-16' : 'f-14']"
                  elevation="0"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span :class="['text-none px-0', isRTL ? 'font-weight-bold f-16' : 'f-14']">{{
                    $t(item.title)
                  }}</span>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list class="cobelgrey pa-0">
                <v-list-item
                  v-for="(item, index) in dropdown"
                  :key="index"
                  @click="$router.push(item.path)"
                  dense
                  class="slategrey"
                  :disabled="!item.path"
                  :style="`${`margin-bottom:${item.title === 'menu.education' ? '0px' : '1px'}`}`"
                >
                  <v-list-item-title
                    :class="[
                      'text-none bg-transparent text-center',
                      isRTL ? 'font-weight-bold f-16' : 'f-14',
                      item.path ? 'white--text' : 'lightgrey--text'
                    ]"
                    >{{ $t(item.title) }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
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
          v-for="(item, index) in !flag.expandMenu ? items : expanded"
          :key="index"
          :class="['text-center py-4 f-18', isRTL && 'font-weight-bold', item.path ? 'white--text' : 'lightgrey--text']"
          :to="item.path && item.title !== 'menu.empowerment' ? localePath(item.path) : undefined"
          color="slategrey"
          exact
          :elevation="item.title === 'menu.empowerment' && flag.expandMenu ? 20 : undefined"
          flat
          link
          :style="`${`opacity:${
            item.title === 'menu.education' ||
            item.title === 'menu.impact_stories' ||
            item.title === 'menu.innovation' ||
            (item.title === 'menu.empowerment' && flag.expandMenu)
              ? '1'
              : '0.91'
          }`}; margin-bottom: ${
            (item.title === 'menu.empowerment' ||
              item.title === 'menu.impact_stories' ||
              item.title === 'menu.innovation') &&
            flag.expandMenu
              ? '0'
              : '2'
          }px;border-bottom: ${
            item.title === 'menu.impact_stories' || item.title === 'menu.innovation'
              ? '2px solid grey !important'
              : undefined
          }; box-shadow: ${
            item.title === 'menu.empowerment' && flag.expandMenu
              ? '0px 4px 10px 0px rgba(0, 0, 0, 0.3) !important'
              : undefined
          }; z-index: ${item.title === 'menu.empowerment' && flag.expandMenu ? '1 !important' : undefined}`"
          tile
          @click="item.title === 'menu.empowerment' ? (flag.expandMenu = !flag.expandMenu) : (flag.showDrawer = false)"
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
        video: false,
        showDropdown: false,
        expandMenu: false
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
        { title: 'menu.point_of_view', path: 'video' },
        { title: 'menu.empowerment', path: '/' },
        { title: 'menu.people_careers', path: '/PeopleAndCareer' },
        { title: 'menu.companies', path: '/ourcompanies' },
        { title: 'menu.press', path: '/PressCenter' },
        { title: 'menu.contact_us', path: '/contact' }
      ];
    },
    dropdown() {
      return [
        { title: 'menu.impact_stories', path: '/impact-stories' },
        { title: 'menu.innovation', path: undefined },
        { title: 'menu.education', path: undefined }
      ];
    },
    expanded() {
      return [
        { title: 'menu.home', path: '/' },
        { title: 'menu.point_of_view', path: 'video' },
        { title: 'menu.empowerment', path: '/' },
        { title: 'menu.impact_stories', path: '/impact-stories' },
        { title: 'menu.innovation', path: undefined },
        { title: 'menu.education', path: undefined },
        { title: 'menu.people_careers', path: '/PeopleAndCareer' },
        { title: 'menu.companies', path: '/ourcompanies' },
        { title: 'menu.press', path: '/PressCenter' },
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

<style lang="scss" scoped>
.appbar.v-app-bar {
  &.v-app-bar--is-scrolled {
    transform: none !important;
    transition: all ease-in 0.2s !important;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05) !important;

    &,
    .v-toolbar__content {
      height: 56px !important;
    }
    .sheet-container {
      margin-bottom: 24px !important;
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
.v-menu__content {
  top: 70px !important;
}
</style>
