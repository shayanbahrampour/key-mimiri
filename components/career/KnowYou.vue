<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mx-4 mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Let us know you
      </p>
      <v-textarea
        class="mb-8 f-20"
        dense
        filled
        height="160"
        hide-details
        label="Why do you consider yourself as a talent?"
        rounded
      ></v-textarea>
      <v-textarea
        class="mb-8 f-20"
        dense
        filled
        height="160"
        hide-details
        label="Why do you like to work with Cobel Group?"
        rounded
      ></v-textarea>
      <v-textarea
        class="mb-8 f-20"
        dense
        filled
        height="160"
        hide-details
        label="What department/function do you think is suitable for you?"
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
