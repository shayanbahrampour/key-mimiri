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

          <v-btn class="f-18 ma-2 px-14" color="white" depressed exact large outlined rounded to="/contact">
            CONTACT US
          </v-btn>
          <v-btn class="f-18 ma-2 px-14" color="white" depressed exact large rounded to="/storytellers">
            ABOUT US
          </v-btn>
        </div>

        <v-row v-if="!isMobile" class="mt-16">
          <v-col v-for="(item, index) in items" :key="index" cols="12" lg="3" sm="6">
            <h4 class="mb-3 f-15 text-uppercase">{{ item.title }}</h4>

            <div class="d-flex flex-column align-start">
              <v-btn
                v-for="(link, j) in item.children"
                :key="j"
                :href="link.href ? link.href : undefined"
                :ripple="false"
                :to="link.to ? link.to : undefined"
                class="text-capitalize pa-0 f-15 bg-transparent"
                color="white"
                exact
                link
                min-width="0"
                text
              >
                {{ link.title }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-footer>

    <v-sheet v-if="!isMobile" class="custom-gradient w-full" height="5" />

    <v-sheet :color="isMobile ? 'slategrey' : 'rgba(76, 109, 128, 1)'" class="white--text text-center">
      <v-sheet
        :class="['mx-auto py-8 w-full white--text', isMobile ? 'px-6' : 'px-16']"
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

        <v-divider v-if="isMobile" class="white my-3" />

        <div>© 2023 Cobel Group. All Rights Reserved.</div>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Navigation',
          children: [
            { title: 'Feeds/ News', to: '/news' },
            { title: 'Cobel Group in Nut Shell', to: '/' },
            { title: 'Innovation', to: '/' },
            { title: 'Impact Stories', to: '/impact' },
            { title: 'People & Career', to: '/career' },
            { title: 'Reach Us', to: '/contact' }
          ]
        },
        {
          title: 'Life & Careers',
          children: [
            { title: 'Life at Cobel Group', to: '#' },
            { title: 'Careers', to: '#' },
            { title: 'Talent Pool', to: '#' }
          ]
        },
        {
          title: 'Legal',
          children: [
            { title: 'General Info', to: '#' },
            { title: 'Privacy Policy', to: '#' },
            { title: 'Terms of Service', to: '#' }
          ]
        },
        {
          title: 'Talk to Us',
          children: [
            { title: 'support@ercom.com', href: 'mailto:support@ercom.com' },
            { title: '+66 2399 1145', href: 'tel:+66 2399 1145' },
            { title: 'Contact Us', to: '/contact' }
          ]
        }
      ]
    };
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
</style>
