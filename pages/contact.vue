<template>
  <div :class="['d-flex flex-column', isMobile ? 'align-center' : undefined]" style="background-color: #66869a">
    <div :class="['d-flex px-16 justify-space-between', isMobile ? 'mt-16' : 'my-16']">
      <div class="d-flex">
        <div class="d-flex flex-column justify-center ml-4" style="max-width: 380px">
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
    <div v-if="isMobile" :class="[isMobile ? 'my-8' : undefined]">
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
    <v-img :contain="!isMobile" src="/images/contact/map.png" :height="isMobile ? '200' : undefined" />
    <div v-if="!isMobile" class="h-full white px-16">
      <h4 class="bel mt-16 f-40 text--darken-3 font-weight-regular" style="color: #59595b">Contact form</h4>
      <ContactForum />
    </div>
    <div v-else class="d-flex flex-column white h-full w-full">
      <h4 class="bel mt-16 f-40 text--darken-3 font-weight-regular text-center" style="color: #66869a">Contact form</h4>
      <ContactForum class="px-4" />
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
