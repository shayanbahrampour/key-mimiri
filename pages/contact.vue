<template>
  <div>
    <div style="background-color: #66869a">
      <v-sheet color="transparent" :max-width="globalMaxWidth" :class="['mx-auto py-10', isMobile ? 'px-8' : 'px-9']">
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
            <v-btn v-if="!isMobile" outlined color="white" height="50" min-width="50" style="border-radius: 30%">
              <v-img src="/images/icons/linkedin.png" max-width="20" height="20" />
            </v-btn>
          </div>
        </div>
        <div v-if="isMobile" class="mt-8 d-flex justify-center">
          <v-btn outlined color="white" height="50" min-width="50" style="border-radius: 30%">
            <v-img src="/images/icons/linkedin.png" max-width="20" height="20" />
          </v-btn>
          <v-btn outlined class="ml-4" color="white" height="50" min-width="50" style="border-radius: 30%">
            <v-img src="/images/icons/whatsapp.png" max-width="20" height="20" />
          </v-btn>
          <v-btn outlined class="ml-4" color="white" height="50" min-width="50" style="border-radius: 30%">
            <v-img src="/images/icons/telegram.png" max-width="20" height="20" />
          </v-btn>
        </div>
      </v-sheet>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3238.6849581305514!2d51.412408744507445!3d35.73396579999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e014b7ff9ee1b%3A0xe809a37053a07c44!2sCobel%20Darou%202!5e0!3m2!1sen!2sca!4v1684156822378!5m2!1sen!2sca"
      :height="isMobile ? 200 : 450"
      class="w-full"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />

    <v-sheet :max-width="globalMaxWidth" :class="['mx-auto', isMobile ? 'px-8' : 'px-9']">
      <h4
        :class="['bel mt-16 f-40 text--darken-3 font-weight-regular', { 'text-center': isMobile }]"
        style="color: #59595b"
      >
        Contact form
      </h4>
      <ContactForm />
    </v-sheet>
  </div>
</template>

<script>
import ContactForm from '~/components/contact/ContactForm';

export default {
  components: { ContactForm },
  head() {
    return {
      title: this.$t('pageTitles.storytellers')
    };
  }
};
</script>

<style lang="scss" scoped></style>
