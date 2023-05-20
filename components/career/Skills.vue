<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mx-4 mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Skills
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8" dense filled hide-details label="Foreign Languages" rounded></v-text-field>
          <v-text-field
            v-if="!isMobile"
            class="mb-8"
            dense
            filled
            hide-details
            label="Computer Knowledge"
            rounded
          ></v-text-field>
          <v-text-field v-else class="mb-4" dense filled hide-details label="Level" rounded></v-text-field>
        </v-col>
        <v-btn v-if="isMobile" class="mb-4" text style="text-transform: unset !important; color: #0a91df">
          <p class="mb-0 f-16">Add new <span class="font-weight-bold">Skills</span></p>
        </v-btn>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field v-if="!isMobile" class="mb-8" dense filled hide-details label="Level" rounded></v-text-field>
          <v-text-field v-else class="mb-8" dense filled hide-details label="Computer Knowledge" rounded></v-text-field>
          <v-text-field
            :class="!isMobile ? 'mb-8' : 'mb-0'"
            dense
            filled
            hide-details
            label="Level"
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <div :class="['d-flex flex-column', !isMobile ? 'align-start' : 'align-center']">
            <v-btn v-if="!isMobile" class="mb-12 ml-0" text style="text-transform: unset !important; color: #0a91df">
              <p class="mb-0 f-16">Add new <span class="font-weight-bold">Skills</span></p>
            </v-btn>
            <v-btn
              :class="['ml-0', !isMobile ? 'mt-2' : 'my-4']"
              text
              style="text-transform: unset !important; color: #0a91df"
            >
              <p class="mb-0 f-16">Add new <span class="font-weight-bold">Skills</span></p>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-textarea class="mb-8" dense filled height="140" hide-details label="Soft skills…" rounded></v-textarea>
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
