<template>
  <div>
    <v-img src="/images/home/services/cover.jpg" class="align-end">
      <div :style="`max-width: ${globalMaxWidth}px`" class="mx-auto py-16 white--text">
        <h3 class="f-80 bel font-weight-regular" style="max-width: 80%">Treatment and prevention paradigm shift</h3>
        <p :class="`font-weight-light f-22 m${isRTL ? 'r' : 'l'}-auto`" style="max-width: 450px; line-height: 32px">
          Be an enabler to enhance peoples physical, psychological and social quality of life (HRQoL) through high
          quality and innovative solutions
        </p>
      </div>
    </v-img>
    <v-sheet :max-width="globalMaxWidth" class="px-4 mx-auto grey--text text--darken-2"> </v-sheet>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
