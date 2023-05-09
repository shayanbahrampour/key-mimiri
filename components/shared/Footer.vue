<template>
  <div>
    <v-footer color="slategrey" :class="[isMobile ? 'pt-10' : 'py-16']">
      <v-sheet color="transparent" :max-width="globalMaxWidth" class="mx-auto px-8 w-full white--text">
        <div class="d-flex justify-center align-center flex-sm-row flex-column my-4">
          <v-img
            v-if="isMobile"
            alt="cobel"
            contain
            height="60"
            class="w-full mb-4"
            max-width="250"
            src="/images/logo-text-white.svg"
          />

          <v-btn large class="f-18 ma-2 px-14" exact rounded outlined depressed color="white"> CONTACT US </v-btn>
          <v-btn large class="f-18 ma-2 px-14" exact rounded depressed color="white"> ABOUT US </v-btn>
        </div>

        <v-row v-if="!isMobile" class="mt-16">
          <v-col v-for="(item, index) in items" :key="index" lg="3" md="6" cols="12">
            <h4 class="mb-3 f-15">{{ item.title }}</h4>

            <div class="d-flex flex-column align-start">
              <v-btn
                v-for="(link, j) in item.children"
                :key="j"
                :to="link.to ? link.to : undefined"
                :href="link.href ? link.href : undefined"
                class="text-capitalize pa-0 f-15 bg-transparent"
                text
                link
                exact
                min-width="0"
                color="white"
                :ripple="false"
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
      <v-sheet color="transparent" :max-width="globalMaxWidth" class="mx-auto px-8 py-8 w-full white--text">
        <div class="d-flex justify-center">
          <template v-if="!isMobile">
            <v-img alt="cobel" contain height="65" max-width="200" src="/images/logo-text-white.svg" />
            <v-spacer />
          </template>

          <v-btn depressed outlined color="white" min-width="55" width="55" height="55">
            <v-img src="/images/social/linkedin.svg" contain height="30" width="30" />
          </v-btn>
        </div>

        <v-divider class="white my-3" v-if="isMobile" />

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
            { title: 'Feeds/ News', to: '#' },
            { title: 'Cobel Group in Nut Shell', to: '#' },
            { title: 'Innovation', to: '#' },
            { title: 'Impact Stories', to: '#' },
            { title: 'People & Career', to: '#' },
            { title: 'Reach Us', to: '#' }
          ]
        },
        {
          title: 'Life & careers',
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
          title: 'Talk to us',
          children: [
            { title: 'support@ercom.com', href: 'mailto:support@ercom.com' },
            { title: '+66 2399 1145', href: 'tel:+66 2399 1145' },
            { title: 'Contact Us', to: '#' }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
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
