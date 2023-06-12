<template>
  <v-sheet
    :class="['mx-auto grey--text text--darken-2', isMobile ? 'px-4' : 'px-16 my-16 pb-16']"
    :max-width="globalMaxWidth"
  >
    <div :class="['d-flex flex-column align-center justify-center', isMobile ? 'py-16' : 'mt-16 pt-16']">
      <h3
        :class="[
          'grey--text text--darken-2 font-weight-regular text-center d-block',
          isMobile ? (isRTL ? 'f-33' : 'f-40') : isRTL ? 'f-45' : 'f-65',
          isRTL ? 'ravi' : 'bel'
        ]"
      >
        {{ $t('homePage.tell_us_your_story') }}
      </h3>
      <v-btn
        :block="isMobile"
        :class="['f-18 px-16 text-capitalize', isRTL ? 'mt-4' : 'mt-2']"
        color="primary"
        depressed
        exact
        large
        rounded
        to="/contact"
      >
        <span :class="['px-15', isRTL ? 'font-weight-bold anjoman' : 'font-weight-light']">{{
          $t('homePage.click_here')
        }}</span>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
