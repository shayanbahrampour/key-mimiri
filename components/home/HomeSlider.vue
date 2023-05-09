<template>
  <v-sheet height="calc(100vh - 120px - 30px)" min-height="650" class="position-relative" color="transparent">
    <v-img
      src="/images/temp/home.png"
      position="center right"
      :height="isMobile ? 400 : 650"
      :width="isMobile ? 400 : 650"
      :style="`${isMobile ? 'top:-250px' : `${isRTL ? 'left' : 'right'}:-450px;bottom:0;top:0;`};`"
      class="position-absolute end-0 my-auto z-0 rounded-circle"
    />

    <v-sheet
      color="transparent"
      height="100%"
      :max-width="globalMaxWidth"
      class="position-relative px-12 z-1 mx-auto d-flex align-center"
    >
      <v-row>
        <v-col lg="8" md="9" cols="12">
          <h1 :class="['bel grey--text text--darken-2 font-weight-regular mb-8', isMobile ? 'f-50 pt-10' : 'f-70']">
            Unleashing the next level health solutions
          </h1>

          <v-btn
            :block="isMobile"
            large
            :class="['f-18 text-capitalize grey--text', { 'ml-n4': !isMobile }]"
            exact
            text
            rounded
            depressed
          >
            More About
          </v-btn>
          <v-btn
            :block="isMobile"
            large
            :class="['f-18 px-14 text-capitalize', isMobile ? 'mt-3' : 'mx-4']"
            exact
            rounded
            depressed
            color="primary"
          >
            Cobel Group
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>

    <v-btn
      v-if="isMobile"
      block
      large
      class="f-18 position-absolute bottom-0 text-capitalize grey--text text--darken-2"
      exact
      text
      rounded
      depressed
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

<style scoped lang="scss"></style>
