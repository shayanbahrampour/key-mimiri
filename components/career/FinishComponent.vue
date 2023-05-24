<template>
  <div class="d-flex flex-column align-center mt-16" style="width: 90vw">
    <p :class="['text-center f-20', !isMobile ? 'desktop-congrats' : 'mt-16']" style="color: #59595b">
      We appreciate your interest in our company and the time you took to apply for this position
    </p>
    <v-btn
      :to="`${locale}/`"
      :class="['rounded-xl d-flex justify-center white--text font-weight-bold', isMobile ? 'f-16 mt-6' : 'f-14 mt-4']"
      :min-width="!isMobile ? '300' : '80%'"
      color="slategrey"
      elevation="0"
      height="40"
    >
      Go to home page
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
