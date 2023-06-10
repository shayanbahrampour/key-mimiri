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
        {{ $t('career.steps.information.title') }}
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="6">
          <v-text-field
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            dense
            filled
            hide-details
            :label="$t('career.steps.information.first_name')"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            dense
            filled
            hide-details
            :label="$t('career.steps.information.id')"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            dense
            filled
            hide-details
            :label="$t('career.steps.information.email')"
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="6">
          <v-text-field
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            dense
            filled
            hide-details
            :label="$t('career.steps.information.last_name')"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            dense
            filled
            hide-details
            :label="$t('career.steps.information.mobile')"
            rounded
          ></v-text-field>
          <v-text-field
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            dense
            filled
            hide-details
            :label="$t('career.steps.information.address')"
            rounded
          ></v-text-field>
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
