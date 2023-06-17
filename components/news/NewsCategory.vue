<template>
  <div class="d-flex align-center">
    <h1 :class="['grey--text text--darken-2 font-weight-regular', isRTL ? 'ravi f-34' : 'bel f-40']">{{ title }}</h1>

    <v-divider class="mx-8" color="#00a59b" style="min-height: 25px" vertical />

    <div class="flex-grow-1">
      <CustomTabs :items="items" />
    </div>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';

export default {
  components: { CustomTabs },
  props: {
    items: {
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
