<template>
  <div>
    <v-carousel v-model="model" hide-delimiters show-arrows-on-hover class="position-relative z-0" height="auto">
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-img position="center center" class="position-relative z-0" :height="isPWA ? 250 : 600" :src="item.src" />
        <div class="position-relative z-1">
          <div :style="`max-width: ${globalMaxWidth}px`" :class="['mx-auto', { 'pr-4': !isPWA }]">
            <v-sheet
              :style="`max-width: ${globalMaxWidth * 0.8}px; ${!isPWA && `margin-top: -78px`}`"
              :class="[
                `px-4 m${isRTL ? 'l' : 'r'}-auto carousel-sheet`,
                isPWA ? 'py-8' : `py-16 rounded-${isRTL ? 'l' : 'r'}-xl`
              ]"
              color="hoki"
            >
              <v-row :no-gutters="!isPWA" justify="center" class="position-relative z-1">
                <v-col cols="12" lg="5">
                  <h2 :class="['bel white--text font-weight-regular', isPWA ? 'f-40' : 'f-50']">
                    Woman empowerment future enrichment
                  </h2>
                </v-col>
                <v-col cols="12" lg="6" offset-lg="1">
                  <p class="f-22 white--text font-weight-light mt-lg-0">
                    {{ item.description }}
                  </p>
                  <v-btn color="white" text link exact class="font-weight-bold f-18 ml-n4 text-lowercase">
                    see more
                  </v-btn>
                </v-col>
              </v-row>
            </v-sheet>
          </div>
        </div>
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

<style lang="scss">
.carousel-sheet {
  &:after {
    z-index: 0;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 50vw;
    background-color: var(--v-hoki-base);
  }
}
</style>
