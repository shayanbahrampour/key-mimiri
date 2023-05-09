<template>
  <v-sheet class="position-relative" color="transparent" height="calc(100vh - 120px - 30px)" min-height="650">
    <v-img
      :height="isMobile ? 400 : 650"
      :style="`${isMobile ? 'top:-250px' : `${isRTL ? 'left' : 'right'}:-450px;bottom:0;top:0;`};`"
      :width="isMobile ? 400 : 650"
      class="position-absolute end-0 my-auto z-0 rounded-circle"
      position="center right"
      src="/images/temp/home.png"
    />

    <v-sheet
      :max-width="globalMaxWidth"
      class="position-relative px-12 z-1 mx-auto d-flex align-center"
      color="transparent"
      height="100%"
    >
      <v-row>
        <v-col cols="12" lg="8" md="9">
          <h1 :class="['bel grey--text text--darken-2 font-weight-regular mb-8', isMobile ? 'f-50 pt-10' : 'f-70']">
            Unleashing the next level health solutions
          </h1>

          <v-btn
            :block="isMobile"
            :class="['f-18 text-capitalize grey--text', { 'ml-n4': !isMobile }]"
            depressed
            exact
            large
            rounded
            text
          >
            More About
          </v-btn>
          <v-btn
            :block="isMobile"
            :class="['f-18 px-14 text-capitalize', isMobile ? 'mt-3' : 'mx-4']"
            color="primary"
            depressed
            exact
            large
            rounded
          >
            Cobel Group
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>

    <v-btn
      v-if="isMobile"
      block
      class="f-18 position-absolute bottom-0 text-capitalize grey--text text--darken-2"
      depressed
      exact
      large
      rounded
      text
    >
      <div class="d-flex flex-column justify-center align-center">
        <div>Swipe Down...</div>
        <v-icon class="mt-2">mdi-chevron-double-down</v-icon>
      </div>
    </v-btn>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
