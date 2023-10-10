<template>
  <div class="w-full"><JobsGrid /></div>
</template>

<script>
import JobsGrid from '~/components/shared/JobsGrid.vue';

export default {
  components: { JobsGrid },
  head() {
    return {
      title: 'Works'
    };
  }
};
</script>

<style lang="scss"></style>
