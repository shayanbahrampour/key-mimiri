<template>
  <div>
    <v-carousel v-model="model" hide-delimiters show-arrows-on-hover class="position-relative z-0" height="auto">
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-img position="center center" class="position-relative z-0" :height="isPWA ? 250 : 600" :src="item.src" />
        <v-sheet
          :class="[`position-relative z-1`, isPWA ? 'py-8' : `py-16 rounded-${isRTL ? 'l' : 'r'}-xl`]"
          color="hoki"
          :width="isPWA ? '100vw' : '80vw'"
          :style="!isPWA && `margin-top: -78px`"
        >
          <v-row :class="`m${isRTL ? 'r' : 'l'}-auto`" :style="`max-width: ${globalMaxWidth}px`" justify="center">
            <v-col cols="12" lg="5" class="px-4">
              <h2 :class="['bel white--text font-weight-regular', isPWA ? 'f-40' : 'f-50']">
                Woman empowerment future enrichment
              </h2>
            </v-col>
            <v-col cols="12" lg="5" class="px-4">
              <p class="f-22 white--text font-weight-light mt-lg-0">
                {{ item.description }}
              </p>
              <v-btn color="white" text link exact class="font-weight-bold f-18 ml-n4 text-lowercase"> see more </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="position-absolute bottom-0">
      <v-icon v-for="(item, index) in items" color="white">
        {{ index === model ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      model: 0
    };
  }
};
</script>

<style scoped lang="scss"></style>
