<template>
  <div class="mt-10">
    <v-sheet v-if="isMobile" class="custom-gradient w-full" height="5" />
    <v-footer :class="[isMobile ? 'pt-10' : 'py-16 px-0']" color="slategrey">
      <v-sheet
        :class="['mx-auto w-full white--text', isMobile ? 'px-6' : 'px-16']"
        :max-width="globalMaxWidth"
        color="transparent"
      >
        <div class="d-flex justify-center align-center flex-sm-row flex-column my-4">
          <v-img
            v-if="isMobile"
            alt="cobel"
            class="w-full mb-4"
            contain
            height="60"
            max-width="250"
            src="/images/logo-text-white.svg"
          />

          <template v-if="!horizontal">
            <v-btn
              :to="localePath('/contact')"
              class="f-18 ma-2 px-14"
              color="white"
              depressed
              exact
              large
              outlined
              rounded
            >
              {{ $t('footer.contact') }}
            </v-btn>
            <v-btn
              :to="localePath('/storytellers')"
              class="f-18 ma-2 px-14"
              color="white"
              depressed
              exact
              large
              rounded
            >
              {{ $t('footer.about') }}
            </v-btn>
          </template>
        </div>

        <v-row v-if="!isMobile" :class="['justify-center', { 'mt-16': !horizontal }]">
          <v-col v-for="(item, index) in items" :key="index" :lg="horizontal ? 2 : 3" cols="12" sm="6">
            <h4 class="mb-3 f-15 text-start text-uppercase font-weight-regular pb-2 footer-title">
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
          <v-col v-if="horizontal" cols="12" lg="3" sm="6">
            <div class="d-flex flex-column align-center">
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
          </v-col>
        </v-row>
      </v-sheet>
    </v-footer>

    <v-sheet v-if="!isMobile" class="custom-gradient w-full" height="5" />

    <v-sheet :color="isMobile ? 'slategrey' : 'rgba(76, 109, 128, 1)'" class="white--text text-center">
      <v-sheet
        :class="['mx-auto w-full white--text', isMobile ? 'px-6 pt-6 pb-8' : 'px-16 py-8']"
        :max-width="globalMaxWidth"
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
        <div :class="['d-flex', !isMobile ? 'justify-space-between align-center px-6' : 'justify-center']">
          <template v-if="!isMobile">
            <v-img alt="cobel" contain height="65" max-width="200" src="/images/logo-text-white.svg" />
            <div v-if="!isMobile" class="ltr" style="margin-right: 120px">{{ $t('footer.copyright') }}</div>
          </template>

          <v-btn
            color="white"
            depressed
            height="55"
            min-width="55"
            outlined
            width="55"
            style="border-radius: 35%; border: 3px solid white"
          >
            <v-img contain height="24" src="/images/social/linkedin.svg" width="24" />
          </v-btn>
        </div>

        <v-divider v-if="isMobile" class="white my-6" style="opacity: 0.3" />

        <div v-if="isMobile" class="ltr">{{ $t('footer.copyright') }}</div>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    items() {
      return [
        {
          title: 'footer.title.navigation',
          children: [
            { title: 'footer.links.feeds', to: '/news' },
            { title: 'footer.links.cobel_group_in_nut_shell', to: '/' },
            { title: 'footer.links.innovation', to: '/' },
            { title: 'footer.links.impact_stories', to: '/impact' },
            { title: 'footer.links.people_career', to: '/career' },
            { title: 'footer.links.reach_us', to: '/contact' }
          ]
        },
        {
          title: 'footer.title.life',
          children: [
            { title: 'footer.links.life_at_cobel_group', to: '/' },
            { title: 'footer.links.careers', to: '/career' },
            { title: 'footer.links.talent_pool', to: '/' }
          ]
        },
        {
          title: 'footer.title.legal',
          children: [
            { title: 'footer.links.general_info', to: '/' },
            { title: 'footer.links.privacy_policy', to: '/' },
            { title: 'footer.links.terms_of_service', to: '/' }
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
.custom-gradient {
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: -moz-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: -o-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
}

.text-lowercase {
  text-transform: lowercase !important;
}

.footer-title {
  position: relative;
  z-index: 1;
}

.footer-title:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 30%;
  border-bottom: 1px solid white;
  opacity: 0.2;
}
</style>
