<template>
  <div class="d-flex flex-column align-center mt-16" style="width: 90vw; height: 60vh">
    <p
      :class="['text-center f-20', !isMobile ? 'desktop-congrats' : 'mt-16', isRTL ? 'ravi' : undefined]"
      style="color: #59595b"
    >
      {{ $t('career.steps.finish.text') }}
    </p>
    <v-btn
      :class="[
        'rounded-xl d-flex justify-center white--text font-weight-bold',
        isMobile ? 'f-16 mt-6' : 'f-14 mt-4',
        isRTL ? 'ravi' : undefined
      ]"
      :min-width="!isMobile ? '300' : '80%'"
      :to="localePath('/')"
      color="slategrey"
      elevation="0"
      height="40"
    >
      {{ $t('career.steps.finish.action') }}
    </v-btn>
  </div>
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

.mdi-triangle-down::before {
  font-size: 16px;
  color: slategrey;
}

.desktop-congrats {
  width: 500px;
}
</style>
