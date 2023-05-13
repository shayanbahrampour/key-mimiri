<template>
  <div class="d-flex align-center">
    <h1 class="bel f-50 grey--text text--darken-2 font-weight-regular">{{ title }}</h1>

    <v-divider vertical style="min-height: 25px" class="mx-8" color="#00a59b" />

    <div class="flex-grow-1">
      <CustomTabs :items="tabs" />
    </div>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';

export default {
  components: { CustomTabs },
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss"></style>
