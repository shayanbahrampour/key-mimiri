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
        {{ $t('career.steps.let_us_know.title') }}
      </p>
      <v-textarea
        :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
        :label="$t('career.steps.let_us_know.placeholder_one')"
        dense
        filled
        height="160"
        hide-details
        rounded
      ></v-textarea>
      <v-textarea
        :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
        :label="$t('career.steps.let_us_know.placeholder_two')"
        dense
        filled
        height="160"
        hide-details
        rounded
      ></v-textarea>
      <v-textarea
        :class="['mb-8 f-20', isRTL ? 'ravi text-end' : undefined]"
        :label="$t('career.steps.let_us_know.placeholder_three')"
        dense
        filled
        height="160"
        hide-details
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
