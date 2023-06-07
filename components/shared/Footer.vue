<template>
  <div class="mt-10">
    <v-sheet v-if="isMobile" class="custom-gradient w-full" height="5" />
    <v-footer :class="[isMobile ? 'pt-10' : 'py-16 px-0']" color="slategrey">
      <div :style="`max-width: ${globalMaxWidth}px`" class="mx-auto w-full">
        <v-sheet
          :class="['white--text', isMobile ? 'px-6' : $vuetify.breakpoint.xl ? 'px-12' : 'px-16']"
          color="transparent"
        >
          <div v-if="isMobile" class="d-flex justify-center align-center flex-sm-row flex-column my-4">
            <v-img
              alt="cobel"
              class="w-full mb-4"
              contain
              height="35"
              max-width="250"
              src="/images/logo-text-white.svg"
            />
          </div>
          <v-row v-if="!isMobile" class="justify-center">
            <v-col v-for="(item, index) in items" :key="index" cols="12" lg="2" order="2" sm="6">
              <h4 class="mb-3 f-15 text-start font-weight-regular pb-2 footer-title">
                {{ $t(item.title) }}
              </h4>
              <div class="d-flex flex-column align-start">
                <v-btn
                  v-for="(link, j) in item.children"
                  :key="j"
                  :class="['pa-0 f-15 bg-transparent', link.name ? 'ltr text-lowercase' : 'text-capitalize']"
                  :href="link.href ? link.href : undefined"
                  :ripple="false"
                  :to="link.to ? localePath(link.to) : undefined"
                  color="white"
                  exact
                  link
                  min-width="0"
                  text
                >
                  {{ link.title ? $t(link.title) : link.name }}
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" lg="4" order="1" order-lg="3" xl="4">
              <div class="d-flex flex-lg-column align-lg-end align-center justify-center mb-lg-0 mb-12">
                <v-btn
                  :to="localePath('/storytellers')"
                  class="f-18 mb-lg-4 mx-lg-0 mx-3"
                  color="white"
                  depressed
                  exact
                  large
                  rounded
                  width="200"
                >
                  {{ $t('footer.about') }}
                </v-btn>
                <v-btn
                  :to="localePath('/contact')"
                  class="f-18 mx-lg-0 mx-3"
                  color="white"
                  depressed
                  exact
                  large
                  outlined
                  rounded
                  width="200"
                >
                  {{ $t('footer.contact') }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </v-footer>

    <v-sheet v-if="!isMobile" class="custom-gradient w-full" height="5" />

    <v-sheet :color="isMobile ? 'slategrey' : 'rgba(76, 109, 128, 1)'" class="white--text text-center">
      <div :style="`max-width: ${globalMaxWidth}px`" class="mx-auto w-full">
        <v-sheet
          :class="[
            'w-full white--text',
            isMobile ? 'px-6 pt-6 pb-8' : $vuetify.breakpoint.xl ? 'px-12 py-8' : 'px-16 py-8'
          ]"
          color="transparent"
          style="margin-top: -2px"
        >
          <div v-if="isMobile" class="d-flex flex-column align-center mb-6">
            <v-btn
              :to="localePath('/storytellers')"
              class="f-18 mb-4"
              color="white"
              depressed
              exact
              large
              rounded
              width="200"
            >
              {{ $t('footer.about') }}
            </v-btn>
            <v-btn
              :to="localePath('/contact')"
              class="f-18"
              color="white"
              depressed
              exact
              large
              outlined
              rounded
              width="200"
            >
              {{ $t('footer.contact') }}
            </v-btn>
          </div>
          <div :class="['d-flex', !isMobile ? 'justify-space-between align-center' : 'justify-center']">
            <template v-if="!isMobile">
              <v-img alt="cobel" contain height="65" max-width="200" src="/images/logo-text-white.svg" />
              <div v-if="!isMobile" class="ltr f-13" style="margin-right: 120px">{{ $t('footer.copyright') }}</div>
            </template>

            <v-btn
              color="white"
              depressed
              height="55"
              min-width="55"
              outlined
              style="border-radius: 35%; border: 3px solid white"
              width="55"
            >
              <v-img contain height="24" src="/images/social/linkedin.svg" width="24" />
            </v-btn>
          </div>

          <v-divider v-if="isMobile" class="white my-6 f-13" style="opacity: 0.3" />

          <div v-if="isMobile" class="ltr">{{ $t('footer.copyright') }}</div>
        </v-sheet>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return [
        {
          title: 'footer.title.navigation',
          children: [
            { title: 'footer.links.point_of_view', to: '/' },
            { title: 'footer.links.impact_stories', to: '/impact' },
            { title: 'footer.links.education', to: '/education' },
            { title: 'footer.links.people_careers', to: '/career' },
            { title: 'footer.links.press_center', to: '/news' },
            { title: 'footer.links.storytellers', to: '/storytellers' },
            { title: 'footer.links.timeline', to: '/timeline' }
          ]
        },
        {
          title: 'footer.title.life',
          children: [
            { title: 'footer.links.life_at_cobel_group', to: '/career' },
            { title: 'footer.links.careers', to: '/career' },
            { title: 'footer.links.talent_pool', to: '/career' }
          ]
        },
        {
          title: 'footer.title.HRQoL',
          children: [
            { title: 'footer.links.psychological_health', to: '/psychological' },
            { title: 'footer.links.physical_health', to: '/physical' },
            { title: 'footer.links.social_health', to: '/social' }
          ]
        },
        {
          title: 'footer.title.talk_to_us',
          children: [
            { name: 'support@ercom.com', href: 'mailto:support@ercom.com' },
            { name: '(+66) 2399 1145', href: 'tel:+6623991145' },
            { title: 'footer.links.contact', to: '/contact' }
          ]
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.text-lowercase {
  text-transform: lowercase !important;
}

.footer-title {
  position: relative;
  z-index: 1;

  &:before {
    left: 0;
    bottom: 0;
    width: 30%;
    content: '';
    height: 1px;
    position: absolute;
    border-bottom: 1px solid white;
    opacity: 0.2;
  }
}

.v-application--is-rtl {
  .footer-title:before {
    left: auto !important;
    right: 0;
  }
}
</style>
