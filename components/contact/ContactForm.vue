<template>
  <v-form v-model="valid" class="mt-4 mb-16">
    <v-row class="align-start justify-center">
      <v-col cols="12" md="6">
        <v-text-field :class="['mb-4']" dense filled hide-details label="Full Name" rounded></v-text-field>
        <v-text-field :class="['mb-4']" dense filled hide-details label="Email Address" rounded></v-text-field>
        <v-text-field :class="['mb-4']" dense filled hide-details label="Mobile" rounded></v-text-field>
        <v-text-field
          :class="!isMobile ? 'mb-4' : 'mb-0'"
          dense
          filled
          hide-details
          label="Topic"
          rounded
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea :class="['mb-8']" dense filled height="260" hide-details label="Descriptions" rounded></v-textarea>
      </v-col>
    </v-row>
    <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined]">
      <v-btn
        :class="[
          'rounded-xl white--text d-flex justify-center',
          isMobile ? 'f-20 font-weight-light' : 'mr-4 f-14 font-weight-bold'
        ]"
        color="#4C6D80"
        elevation="0"
        height="36"
        min-width="250"
        :width="isMobile ? '100' : undefined"
      >
        Send Form
      </v-btn>
      <v-btn
        :class="[
          'rounded-xl d-flex justify-center ',
          isMobile ? 'mt-4 f-20 font-weight-light' : 'f-14 font-weight-bold'
        ]"
        color="#4C6D80"
        height="36"
        min-width="250"
        :width="isMobile ? '100' : undefined"
        outlined
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

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
