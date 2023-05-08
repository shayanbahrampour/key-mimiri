<template>
  <div class="d-flex align-center">
    <h1 class="bel f-50 grey--text text--darken-2 font-weight-regular">More important</h1>

    <v-divider vertical style="min-height: 30px" class="mx-8" color="#00a59b" />

    <div class="flex-grow-1">
      <CustomTabs :items="tabs" />
    </div>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';

export default {
  components: { CustomTabs },
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

<style lang="scss"></style>
