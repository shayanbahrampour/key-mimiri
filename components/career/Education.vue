<template>
  <v-form v-model="valid" class="mt-4 mb-16 mx-4" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Education
      </p>
      <v-row class="align-start justify-center">
        <v-col cols="12" md="4">
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Degree"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Country"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Graduation Year"
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Major"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="State"
            rounded
          ></v-text-field>
          <v-btn class="mt-2 ml-0" text style="text-transform: unset !important; color: #0a91df">
            <p class="mb-0 f-16">Add new education</p>
          </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="University name"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="City"
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-textarea
        :class="['mb-8', isMobile ? 'contact-background' : undefined]"
        dense
        filled
        height="140"
        hide-details
        label="Other training, certifications or licenses held..."
        rounded
      ></v-textarea>
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
