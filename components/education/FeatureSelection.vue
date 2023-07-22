<template>
  <v-row v-if="!isMobile" class="mt-2" style="max-width: 500px">
    <v-col v-for="(item, i) in tags" :key="i" class="d-flex flex-column" cols="3">
      <div class="d-flex align-center">
        <v-icon v-if="!isRTL" class="me-1" color="orange" size="16">mdi-circle</v-icon>
        <span :class="['f-16 cobelgrey--text', { 'ravi ': isRTL }]">{{ isRTL ? item.fa_name : item.en_name }}</span>
        <v-icon v-if="isRTL" class="me-1" color="orange" size="16">mdi-circle</v-icon>
      </div>
    </v-col>
  </v-row>
  <v-row v-else class="d-flex justify-center align-center w-full">
    <v-col v-for="(item, i) in tags" :key="i" class="d-flex flex-column justify-space-between" style="width: 100%">
      <div class="d-flex align-center justify-center">
        <v-icon v-if="!isRTL" class="me-1" color="orange" size="20">mdi-circle</v-icon>
        <span :class="['f-20 cobelgrey--text', { 'ravi ': isRTL }]">{{ isRTL ? item.fa_name : item.en_name }}</span>
        <v-icon v-if="isRTL" class="me-1" color="orange" size="20">mdi-circle</v-icon>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped></style>
