<template>
  <v-sheet :class="['mx-auto grey--text text--darken-2', isMobile ? 'px-4' : 'px-16']" :max-width="globalMaxWidth">
    <div class="d-flex flex-column align-center justify-center mt-16 pt-16">
      <h3
        :class="['bel grey--text text--darken-2 font-weight-regular text-center d-block', isMobile ? 'f-45' : 'f-55']"
      >
        {{ $t('homePage.tell_us_your_story') }}
      </h3>
      <v-btn class="f-18 mt-4 px-14 text-capitalize" color="primary" depressed exact large rounded>
        {{ $t('homePage.click_here') }}
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
