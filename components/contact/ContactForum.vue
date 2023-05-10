<template>
  <v-form v-model="valid" class="mt-4 mb-16">
    <v-row class="align-start justify-center">
      <v-col cols="12" md="6">
        <v-text-field label="Management" filled rounded dense></v-text-field>
        <v-text-field label="Topic" filled rounded dense></v-text-field>
        <v-text-field label="Full Name" filled rounded dense></v-text-field>
        <v-text-field label="Email Address" filled rounded dense></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea label="Descriptions" filled rounded dense height="280"></v-textarea>
      </v-col>
    </v-row>
    <v-radio-group v-model="radioGroup" class="mt-0 pt-0">
      <v-radio label="Let me know by email" color="#4C6D80"></v-radio>
    </v-radio-group>
    <div :class="['d-flex', isMobile ? 'flex-column' : undefined]">
      <v-btn
        :class="[
          'rounded-xl white--text d-flex justify-center',
          isMobile ? 'f-20 font-weight-light' : 'mr-4 f-14 font-weight-bold'
        ]"
        color="#4C6D80"
        elevation="0"
        height="40"
        min-width="250"
      >
        Send Form
      </v-btn>
      <v-btn
        outlined
        :class="[
          'rounded-xl d-flex justify-center ',
          isMobile ? 'mt-4 f-20 font-weight-light' : 'f-14 font-weight-bold'
        ]"
        color="#4C6D80"
        height="40"
        min-width="250"
      >
        Clear
      </v-btn>
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

<style scoped></style>
