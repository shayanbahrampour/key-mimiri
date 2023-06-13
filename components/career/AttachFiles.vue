<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="[
          'mb-4 text--darken-3 font-weight-regular',
          isRTL
            ? isMobile
              ? 'text-center f-36 ravi mb-10'
              : 'ravi f-36 mt-10 mb-8'
            : isMobile
            ? 'text-center f-36 bel'
            : 'f-50 mt-10 bel'
        ]"
        style="color: #59595b"
      >
        {{ $t('career.steps.file.title') }}
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="6">
          <v-file-input
            v-model="model.coverLetter"
            :append-icon="model.coverLetter ? false : 'mdi-file-upload slategrey--text'"
            :class="['mb-9 attach-file', isRTL ? 'ravi text-end' : undefined]"
            :label="$t('career.steps.file.letter')"
            :prepend-icon="false"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            rounded
          ></v-file-input>
          <v-file-input
            v-model="model.address"
            :append-icon="model.address ? false : 'mdi-file-upload slategrey--text'"
            :class="['mb-9 attach-file', isRTL ? 'ravi text-end' : undefined]"
            :dense="!isMobile || !isRTL"
            :height="isMobile && isRTL ? '60' : undefined"
            :label="$t('career.steps.file.address')"
            :prepend-icon="false"
            clear-icon="mdi-delete black--text"
            filled
            hide-details
            rounded
          ></v-file-input>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="6">
          <v-file-input
            v-model="model.vitae"
            :append-icon="model.vitae ? false : 'mdi-file-upload slategrey--text'"
            :class="['mb-9 attach-file', isRTL ? 'ravi text-end' : undefined]"
            :label="$t('career.steps.file.vitae')"
            :prepend-icon="false"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            rounded
          ></v-file-input>
          <v-file-input
            v-model="model.material"
            :append-icon="model.material ? false : 'mdi-file-upload slategrey--text'"
            :class="['mb-9 attach-file', isRTL ? 'ravi text-end' : undefined]"
            :label="$t('career.steps.file.material')"
            :prepend-icon="false"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
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

.attach-file .v-file-input__text {
  cursor: pointer !important;
}
</style>
