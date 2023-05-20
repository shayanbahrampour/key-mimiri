<template>
  <v-form v-model="valid" class="mt-4 mb-16 mx-4" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Skills
      </p>
      <v-row class="align-start justify-center">
        <v-col cols="12" md="4">
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Company name"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Date (from)"
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Position"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Date (to)"
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex flex-column align-start">
            <v-btn class="mb-12 ml-0" text style="text-transform: unset !important; color: #0a91df">
              <p class="mb-0 f-16">Add new <span class="font-weight-bold">Skills</span></p>
            </v-btn>
            <v-btn class="mt-0 ml-0" text style="text-transform: unset !important; color: #0a91df">
              <p class="mb-0 f-16">Add new <span class="font-weight-bold">Skills</span></p>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: null
    };
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
