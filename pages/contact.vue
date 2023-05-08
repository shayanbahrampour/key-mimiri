<template>
  <div class="d-flex flex-column" style="background-color: #66869a">
    <div class="d-flex px-16 my-16 justify-space-between">
      <div class="d-flex">
        <div class="d-flex flex-column justify-center ml-4" style="max-width: 380px">
          <p class="bel f-60 white--text mb-0 text--darken-3 font-weight-regular">Central office</p>
          <p class="bel f-20 white--text mb-0 text--darken-3">
            Address: No. 39, Alvand St., Argentine Square, Tehran / IRAN ZIP Code: 1516673115
          </p>
        </div>
      </div>
      <div>
        <v-btn outlined color="white" height="50" min-width="50" style="border-radius: 30%">
          <v-img src="/images/icons/linkedin.png" max-width="20" height="20" />
        </v-btn>
      </div>
    </div>
    <v-img contain src="/images/contact/map.png" />
    <div class="h-full white px-16">
      <h4 class="bel mt-16 f-40 text--darken-3 font-weight-regular" style="color: #59595b">Contact form</h4>
      <ContactForum />
    </div>
  </div>
</template>

<script>
import ContactForum from '~/components/contact/ContactForum';
export default {
  head() {
    return {
      title: this.$t('pageTitles.storytellers')
    };
  },
  components: { ContactForum }
};
</script>

<style lang="scss" scoped></style>
