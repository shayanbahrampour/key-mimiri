<template>
  <div>
    <div
      v-if="((step !== 7 && !$route.query.job) || (step !== 6 && $route.query.job)) && !isMobile"
      class="d-flex justify-space-between"
      style="width: 100%"
    >
      <v-spacer v-if="step === 0"></v-spacer>
      <v-btn
        v-if="step !== 0"
        :class="[
          'rounded-xl d-flex justify-center slategrey--text font-weight-bold',
          isRTL ? (isMobile ? 'f-20' : 'f-20 mb-16 ms-4') : isMobile ? 'f-20' : 'f-14 mb-16 ms-4'
        ]"
        :min-width="!isMobile ? '250' : '80%'"
        color="slategrey"
        height="40"
        outlined
        @click="$emit('back') && $vuetify.goTo('#top')"
      >
        {{ $t('button.back') }}
      </v-btn>
      <v-btn
        :class="[
          'rounded-xl d-flex justify-center white--text font-weight-bold',
          isRTL ? (isMobile ? 'f-20' : 'f-20 mb-16 me-4') : isMobile ? 'f-20' : 'f-14 mb-16 me-4'
        ]"
        :min-width="!isMobile ? '250' : '80%'"
        color="slategrey"
        elevation="0"
        height="40"
        @click="$emit('next') && $vuetify.goTo('#top')"
      >
        {{
          (step === 6 && !$route.query.job) || (step === 5 && $route.query.job)
            ? $t('button.send_form')
            : $t('button.next')
        }}
      </v-btn>
    </div>
    <div
      v-if="((step !== 7 && !$route.query.job) || (step !== 6 && $route.query.job)) && isMobile"
      class="d-flex flex-column"
      style="width: 100%"
    >
      <v-btn
        :class="['rounded-xl d-flex justify-center white--text font-weight-bold f-20 mb-6', isRTL ? 'ravi' : undefined]"
        :min-width="!isMobile ? '300' : '80%'"
        color="slategrey"
        elevation="0"
        height="40"
        @click="$emit('next') && $vuetify.goTo('#top')"
      >
        {{
          (step === 6 && !$route.query.job) || (step === 5 && $route.query.job)
            ? $t('button.send_form')
            : $t('button.next')
        }}
      </v-btn>
      <v-btn
        v-if="step !== 0"
        :class="[
          'rounded-xl d-flex justify-center slategrey--text font-weight-bold',
          isMobile ? 'f-20 mb-16' : 'f-14 mb-16 ms-4',
          isRTL ? 'ravi pt-2' : undefined
        ]"
        :min-width="!isMobile ? '300' : '80%'"
        color="slategrey"
        height="40"
        outlined
        @click="$emit('back') && $vuetify.goTo('#top')"
      >
        {{ $t('button.back') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: undefined
    }
  }
};
</script>
