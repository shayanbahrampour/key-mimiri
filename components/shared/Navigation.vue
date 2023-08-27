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
        :class="[
          'mx-auto d-flex align-center w-full',
          { 'px-12': !showDrawer },
          isMobile ? 'sheet-container-mobile' : 'sheet-container'
        ]"
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
              <v-img alt="cobel" contain height="60" max-width="180" src="/images/logo.png" />
            </div>
          </div>
        </nuxt-link>

        <v-spacer />

        <div v-if="!showDrawer" :class="{ rtl: isRTL }" class="d-flex overflow-hidden justify-center">
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
            :class="['bg-transparent', item.title !== 'menu.empowerment' ? (isRTL ? 'px-6' : 'px-6') : undefined]"
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
              :class="['text-none', isRTL ? 'font-weight-regular f-16' : 'f-16']"
              >{{ $t(item.title) }}</span
            >
            <v-menu
              v-else
              offset-y
              rounded="0"
              v-model="flag.showDropdown"
              open-on-hover
              width="200"
              style="box-shadow: none !important"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :class="['text-none ma-0 button-menu', isRTL ? 'font-weight-regular f-16' : 'f-14']"
                  elevation="0"
                  :color="flag.showDropdown ? '#D9D9D9' : 'transparent'"
                  :width="isRTL ? (flag.showDropdown ? '160' : undefined) : '140'"
                  v-bind="attrs"
                  :style="`${flag.showDropdown ? 'border-radius: 15px 15px 0px 0px; opacity: 0.8' : undefined}`"
                  v-on="on"
                >
                  <span
                    :class="['text-none', isRTL ? 'font-weight-regular f-16' : 'f-16']"
                    :style="`${flag.showDropdown ? 'color: #1e1e1e !important' : undefined}`"
                    >{{ $t(item.title) }}</span
                  >
                  <v-icon :color="flag.showDropdown ? 'grey' : undefined" style="width: 16px !important"
                    >mdi-chevron-down</v-icon
                  >
                </v-btn>
              </template>
              <v-list class="bg-transparent pa-0" :width="isRTL ? '160' : '140'">
                <v-list-item
                  v-for="(item, index) in dropdown"
                  :key="index"
                  :to="localePath(item.path)"
                  dense
                  class="slategrey"
                  :disabled="!item.path"
                  :style="`${`margin-bottom:${
                    item.title === 'menu.storytellers' ? '0px' : '1px'
                  }; height: 50px !important`}; ${
                    item.title === 'menu.storytellers' ? 'border-radius: 0px 0px 15px 15px' : undefined
                  }`"
                >
                  <v-list-item-title
                    :class="[
                      'text-none bg-transparent text-center z-9',
                      isRTL ? 'font-weight-regular f-14' : 'f-16',
                      item.path ? 'white--text' : 'lightgrey--text'
                    ]"
                    style="line-height: 2rem !important"
                    >{{ $t(item.title) }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>
        </div>

        <v-btn
          :class="showDrawer ? 'mr-n2' : 'mr-n4 f-16'"
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
          :class="[
            'text-center py-4 f-18',
            isRTL && 'font-weight-regular',
            item.path ? 'white--text' : 'lightgrey--text'
          ]"
          :to="item.path && item.title !== 'menu.empowerment' ? localePath(item.path) : undefined"
          color="slategrey"
          exact
          :elevation="item.title === 'menu.empowerment' && flag.expandMenu ? 20 : undefined"
          flat
          link
          :style="`${`opacity:${
            item.title === 'menu.impact_stories' ||
            item.title === 'menu.storytellers' ||
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
        video: false,
        showDrawer: false,
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
        { title: 'menu.contact_us', path: '/contact' }
      ];
    },
    dropdown() {
      return [
        { title: 'menu.impact_stories', path: '/impact-stories' },
        { title: 'menu.storytellers', path: '/storytellers' }
      ];
    },
    expanded() {
      return [
        { title: 'menu.home', path: '/' },
        { title: 'menu.point_of_view', path: 'video' },
        { title: 'menu.empowerment', path: '/' },
        { title: 'menu.impact_stories', path: '/impact-stories' },
        { title: 'menu.storytellers', path: '/storytellers' },
        { title: 'menu.people_careers', path: '/PeopleAndCareer' },
        { title: 'menu.companies', path: '/ourcompanies' },
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
      this.$emit('changed', !this.status);
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  display: none;
}
.appbar.v-app-bar {
  &.v-app-bar--is-scrolled {
    transform: none !important;
    transition: all ease-in 0.2s !important;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05) !important;
    &,
    .v-toolbar__content {
      height: 56px !important;
      display: flex;
      align-items: center;
    }

    .sheet-container {
      width: 100vw !important;
      padding-right: 80px !important;
    }
    .sheet-container-mobile {
      width: 90vw !important;
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
  box-shadow: none !important;
}
.button-menu:hover {
  padding-block: 24px !important;
}
</style>
