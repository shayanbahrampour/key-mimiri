<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="[
          'mb-4 text--darken-3 font-weight-regular',
          isMobile ? 'text-center f-36' : 'f-50 mt-10',
          isRTL ? 'ravi' : 'bel'
        ]"
        style="color: #59595b"
      >
        {{ $t('career.steps.let_us_know.title') }}
      </p>
      <v-textarea
        :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
        dense
        filled
        height="160"
        hide-details
        :label="$t('career.steps.let_us_know.placeholder_one')"
        rounded
      ></v-textarea>
      <v-textarea
        :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
        dense
        filled
        height="160"
        hide-details
        :label="$t('career.steps.let_us_know.placeholder_two')"
        rounded
      ></v-textarea>
      <v-textarea
        :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
        dense
        filled
        height="160"
        hide-details
        :label="$t('career.steps.let_us_know.placeholder_three')"
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
