<template>
  <v-form v-model="valid" class="mt-4 mb-16 mx-4" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Attach files
      </p>
      <v-row class="align-start justify-center">
        <v-col cols="12" md="6">
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Cover letter"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Letter addressing key selection criteria"
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Curriculum Vitae"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-6', isMobile ? 'contact-background' : undefined]"
            dense
            filled
            hide-details
            label="Supplementary material (optional)"
            rounded
          ></v-text-field>
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
