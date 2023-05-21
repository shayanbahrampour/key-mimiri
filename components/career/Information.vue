<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mx-4 mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Information
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="6">
          <v-text-field class="mb-8" dense filled hide-details label="First Name" rounded></v-text-field>
          <v-text-field class="mb-8" dense filled hide-details label="ID Number" rounded></v-text-field>
          <v-text-field class="mb-8" dense filled hide-details label="Email" rounded></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="6">
          <v-text-field class="mb-8" dense filled hide-details label="Last Name" rounded></v-text-field>
          <v-text-field class="mb-8" dense filled hide-details label="Phone Number" rounded></v-text-field>
          <v-text-field class="mb-8" dense filled hide-details label="Address" rounded></v-text-field>
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
