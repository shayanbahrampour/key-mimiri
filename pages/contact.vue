<template>
  <div>
    <div :class="['slategrey', !isMobile ? 'pr-4' : undefined]">
      <v-sheet :class="['mx-auto', isMobile ? 'px-8 py-8' : 'pa-16']" :max-width="globalMaxWidth" color="transparent">
        <div class="d-flex justify-space-between">
          <div class="d-flex">
            <div class="d-flex flex-column justify-center" style="max-width: 380px">
              <p
                :class="[
                  'bel white--text mb-0 text--darken-3 font-weight-regular',
                  isMobile ? 'text-center f-40' : 'f-60 '
                ]"
              >
                Central office
              </p>
              <p
                :class="[
                  'white--text mb-0 text--darken-3',
                  isMobile ? 'mt-4 text-center font-weight-light f-16' : 'bel f-20'
                ]"
              >
                Address: No. 39, Alvand St., Argentine Square, Tehran / IRAN ZIP Code: 1516673115
              </p>
            </div>
          </div>
          <div>
            <v-btn
              v-if="!isMobile"
              class="rounded d-flex align-center"
              color="white"
              height="40"
              min-width="160"
              outlined
            >
              <span class="bel mt-1 f-20 text-capitalize">Follow us</span>
              <v-divider class="mr-4 ml-6 white" vertical></v-divider>
              <v-img class="ma-0" height="20" max-width="20" src="/images/icons/linkedin.png" />
            </v-btn>
          </div>
        </div>
        <div v-if="isMobile" class="mt-8 d-flex justify-center">
          <v-btn class="rounded d-flex align-center" color="white" height="40" min-width="160" outlined>
            <span class="bel mt-1 f-20 text-capitalize">Follow us</span>
            <v-divider class="mr-4 ml-6 white" vertical></v-divider>
            <v-img class="ma-0" height="20" max-width="20" src="/images/icons/linkedin.png" />
          </v-btn>
        </div>
      </v-sheet>
    </div>

    <iframe
      :height="isMobile ? 200 : 450"
      allowfullscreen=""
      class="w-full"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3238.6849581305514!2d51.412408744507445!3d35.73396579999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e014b7ff9ee1b%3A0xe809a37053a07c44!2sCobel%20Darou%202!5e0!3m2!1sen!2sca!4v1684156822378!5m2!1sen!2sca"
      style="border: 0"
    />

    <v-sheet :class="['mx-auto', isMobile ? 'px-4' : 'px-16']" :max-width="globalMaxWidth">
      <h4
        :class="[
          'bel mt-16 f-40 text--darken-3 font-weight-regular',
          isMobile ? 'text-center slategrey--text' : 'cobelgrey--text'
        ]"
      >
        Contact form
      </h4>
      <ContactForm :class="!isMobile ? 'mr-4' : undefined" />
    </v-sheet>
  </div>
</template>

<script>
import ContactForm from '~/components/contact/ContactForm';

export default {
  components: { ContactForm },
  head() {
    return {
      title: this.$t('pageTitles.contact')
    };
  }
};
</script>

<style lang="scss" scoped></style>
