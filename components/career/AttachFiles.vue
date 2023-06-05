<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mx-4 mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Attach files
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="6">
          <v-file-input
            v-model="model.coverLetter"
            :append-icon="model.coverLetter ? false : 'mdi-file-upload slategrey--text'"
            :prepend-icon="false"
            class="mb-9"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            label="Cover letter"
            rounded
          ></v-file-input>
          <v-file-input
            v-model="model.address"
            :append-icon="model.address ? false : 'mdi-file-upload slategrey--text'"
            :prepend-icon="false"
            class="mb-9"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            label="Letter addressing key selection criteria"
            rounded
          ></v-file-input>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="6">
          <v-file-input
            v-model="model.vitae"
            :append-icon="model.vitae ? false : 'mdi-file-upload slategrey--text'"
            :prepend-icon="false"
            class="mb-9"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            label="Curriculum Vitae"
            rounded
          ></v-file-input>
          <v-file-input
            v-model="model.material"
            :append-icon="model.material ? false : 'mdi-file-upload slategrey--text'"
            :prepend-icon="false"
            class="mb-9"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            label="Supplementary material (optional)"
            rounded
          ></v-file-input>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: null,
      model: {
        coverLetter: null,
        material: null,
        address: null,
        vitae: null
      }
    };
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
