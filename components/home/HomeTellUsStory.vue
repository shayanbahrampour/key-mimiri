<template>
  <v-sheet
    :class="['mx-auto grey--text text--darken-2', isMobile ? 'px-4' : 'px-16 my-16 pb-16']"
    :max-width="globalMaxWidth"
  >
    <div :class="['d-flex flex-column align-center justify-center', isMobile ? 'py-16' : 'mt-16 pt-16']">
      <h3
        :class="['bel grey--text text--darken-2 font-weight-regular text-center d-block', isMobile ? 'f-45' : 'f-55']"
      >
        {{ $t('homePage.tell_us_your_story') }}
      </h3>
      <v-btn :block="isMobile" class="f-18 mt-4 px-16 text-capitalize" color="primary" depressed exact large rounded>
        <span class="px-8">{{ $t('homePage.click_here') }}</span>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
