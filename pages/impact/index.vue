<template>
  <div>
    <CustomCarousel
      :items="[
        {
          src: '/images/impact/cover.png',
          description:
            'Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women...'
        }
      ]"
    />

    <v-sheet :max-width="globalMaxWidth" class="mx-auto px-4 my-16">
      <h1 class="bel f-50 grey--text text--darken-2 font-weight-regular">Impact Story</h1>

      <CustomTabs class="mt-4" :items="tabs" />
    </v-sheet>
  </div>
</template>

<script>
import CustomCarousel from '~/components/shared/CustomCarousel.vue';
import CustomTabs from '~/components/shared/CustomTabs.vue';

export default {
  components: { CustomTabs, CustomCarousel },
  data() {
    return {
      tabs: [
        { title: 'All', value: '' },
        { title: 'Best talent', value: '' },
        { title: 'Long-term value creation', value: '' },
        { title: 'Social responsibility', value: '' },
        { title: 'Localized know-how', value: '' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
