<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mx-4 mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Experiences
      </p>
      <v-row v-for="i in counter" :key="i" class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8" dense filled hide-details label="Company name" rounded></v-text-field>
          <v-text-field class="mb-8" dense filled hide-details label="Date (from)" rounded></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8" dense filled hide-details label="Position" rounded></v-text-field>
          <v-text-field class="mb-8" dense filled hide-details label="Date (to)" rounded></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field
            :class="!isMobile ? 'mb-8' : 'mb-0'"
            dense
            filled
            hide-details
            label="Reason for leaving (the organization)"
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8" dense filled hide-details label="Company name" rounded></v-text-field>
          <v-text-field class="mb-8" dense filled hide-details label="Date (from)" rounded></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8" dense filled hide-details label="Position" rounded></v-text-field>
          <v-text-field class="mb-8" dense filled hide-details label="Date (to)" rounded></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field
            :class="!isMobile ? 'mb-8' : 'mb-0'"
            dense
            filled
            hide-details
            label="Reason for leaving (the organization)"
            rounded
          ></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-2 ml-0"
            text
            style="text-transform: unset !important; color: #0a91df"
            @click="counter++"
          >
            <p class="mb-0 f-16">Add new experiences</p>
          </v-btn>
        </v-col>
        <v-btn
          v-if="isMobile"
          class="mt-2 ml-0 mb-10"
          text
          style="text-transform: unset !important; color: #0a91df"
          @click="counter++"
        >
          <p class="mb-0 f-16">Add new experiences</p>
        </v-btn>
      </v-row>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: null,
      counter: 0
    };
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
