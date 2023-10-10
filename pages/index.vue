<template>
  <div>
    <HomeSlider />
  </div>
</template>

<script>
import HomeSlider from '~/components/home/HomeSlider.vue';

export default {
  components: { HomeSlider },
  head() {
    return {
      title: this.$t('pageTitles.index')
    };
  }
};
</script>

<style lang="scss" scoped></style>
