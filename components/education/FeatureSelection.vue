<template>
  <v-row v-if="!isMobile" class="mt-2" style="max-width: 400px">
    <v-col v-for="i in 4" :key="i" class="d-flex flex-column">
      <div class="d-flex align-center mb-4">
        <v-icon class="mr-1" size="16">mdi-circle-outline</v-icon>
        <span class="f-16 cobelgrey--text">Feature</span>
      </div>
      <div class="d-flex align-center mb-4">
        <v-icon class="mr-1" color="orange" size="16">mdi-circle</v-icon>
        <span class="f-16 cobelgrey--text">Feature</span>
      </div>
    </v-col>
  </v-row>
  <div v-else class="d-flex justify-center align-center w-full">
    <div v-for="i in 2" class="d-flex flex-column justify-space-between" style="width: 100%">
      <div class="d-flex align-center justify-center mb-4">
        <v-icon class="mr-1" size="20">mdi-circle-outline</v-icon>
        <span class="f-20 cobelgrey--text">Feature</span>
      </div>
      <div class="d-flex align-center justify-center mb-4">
        <v-icon class="mr-1" size="20">mdi-circle-outline</v-icon>
        <span class="f-20 cobelgrey--text">Feature</span>
      </div>
      <div class="d-flex align-center justify-center mb-4">
        <v-icon class="mr-1" color="orange" size="20">mdi-circle</v-icon>
        <span class="f-20 cobelgrey--text">Feature</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
