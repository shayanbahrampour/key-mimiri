<template>
  <div>
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

          <v-btn class="f-18 ma-2 px-14" color="white" depressed exact large outlined rounded :to="`${locale}/contact`">
            {{ $t('footer.contact') }}
          </v-btn>
          <v-btn class="f-18 ma-2 px-14" color="white" depressed exact large rounded :to="`${locale}/storytellers`">
            {{ $t('footer.about') }}
          </v-btn>
        </div>

        <v-row v-if="!isMobile" class="mt-16">
          <v-col v-for="(item, index) in items" :key="index" cols="12" lg="3" sm="6">
            <h4 class="mb-3 f-15 text-uppercase">{{ $t(item.title) }}</h4>
            <div class="d-flex flex-column align-start">
              <v-btn
                v-for="(link, j) in item.children"
                :key="j"
                :href="link.href ? link.href : undefined"
                :ripple="false"
                :to="link.to ? link.to : undefined"
                :class="['pa-0 f-15 bg-transparent', link.name ? 'ltr text-lowercase' : 'text-capitalize']"
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
        </v-row>
      </v-sheet>
    </v-footer>

    <v-sheet v-if="!isMobile" class="custom-gradient w-full" height="5" />

    <v-sheet :color="isMobile ? 'slategrey' : 'rgba(76, 109, 128, 1)'" class="white--text text-center">
      <v-sheet
        :class="['mx-auto w-full white--text', isMobile ? 'px-6 pt-6 pb-8' : 'px-16 py-8']"
        :max-width="globalMaxWidth"
        color="transparent"
      >
        <div class="d-flex justify-center">
          <template v-if="!isMobile">
            <v-img alt="cobel" contain height="65" max-width="200" src="/images/logo-text-white.svg" />
            <v-spacer />
          </template>

          <v-btn color="white" depressed height="55" min-width="55" outlined width="55">
            <v-img contain height="30" src="/images/social/linkedin.svg" width="30" />
          </v-btn>
        </div>

        <v-divider v-if="isMobile" class="white my-6" style="opacity: 0.3" />

        <div>{{ $t('footer.copyright') }}</div>
      </v-sheet>
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
            { title: 'footer.links.life_at_cobel_group', to: '#' },
            { title: 'footer.links.careers', to: '/career' },
            { title: 'footer.links.talent_pool', to: '#' }
          ]
        },
        {
          title: 'footer.title.legal',
          children: [
            { title: 'footer.links.general_info', to: '#' },
            { title: 'footer.links.privacy_policy', to: '#' },
            { title: 'footer.links.terms_of_service', to: '#' }
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
      ].map((item) => ({
        ...item,
        children: item.children.map((path) => ({ ...path, to: path.to ? `${this.locale}${path.to}` : undefined }))
      }));
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
</style>
