<template>
  <div :class="['position-relative z-0', { 'mt-16': isMobile }]">
    <svg v-if="!isMobile" class="position-absolute" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="home-services">
          <path
            class="w-full"
            d="M0 0.351562V719.464H554.268C580.744 719.464 604.908 703.643 618.24 678.458C645.822 626.339 697.118 591.34 755.88 591.34C814.607 591.34 865.912 626.366 893.521 678.458C906.853 703.643 931.017 719.464 957.492 719.464H1728V0.351562H0Z"
          />
        </clipPath>
      </defs>
    </svg>

    <v-img
      src="/images/home/services/cover.jpg"
      class="align-end home-services-container mx-auto"
      :height="isMobile ? 400 : 720"
      :width="isMobile ? '' : 1515"
      gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.83)"
    >
      <v-sheet color="#4d6e81" class="w-full h-full position-absolute top-0 start-0" style="mix-blend-mode: color" />
      <div
        :style="`max-width: ${globalMaxWidth}px`"
        :class="['mx-auto white--text position-relative z-1 px-4', isMobile ? 'py-4' : 'py-16']"
      >
        <h3
          :class="`bel font-weight-regular ${isMobile ? 'f-40 text-center' : 'f-80'}`"
          :style="`${!isMobile && 'max-width: 80%'}`"
        >
          Treatment and prevention paradigm shift
        </h3>
        <p
          :class="`font-weight-light m${isRTL ? 'r' : 'l'}-auto ${isMobile ? 'text-center f-20' : 'f-22'}`"
          :style="`line-height: 32px; ${!isMobile && 'max-width: 450px;'}`"
        >
          Be an enabler to enhance peoples physical, psychological and social quality of life (HRQoL) through high
          quality and innovative solutions
        </p>
      </div>
    </v-img>
    <v-sheet :max-width="globalMaxWidth" class="px-4 mx-auto grey--text text--darken-2 d-flex justify-center">
      <v-sheet color="#A01E64" class="rounded-circle" width="170" height="170" />
      <v-sheet color="#F3911F" class="rounded-circle" width="170" height="170" />
      <v-sheet color="#00A59B" class="rounded-circle" width="170" height="170" />
    </v-sheet>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.home-services-container {
  clip-path: url(#home-services);
  -webkit-clip-path: url(#home-services);
}
</style>
