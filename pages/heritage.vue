<template>
  <div class="d-flex flex-column">
    <CustomCarousel
      title="Heritage"
      hide-delimiters
      :items="[
        {
          src: '/images/temp/cover-7.png',
          title:
            'Empowers to achieve, Inspires to create the greatest Cobel Group promise is to empower, inspire and trigger ideas that make a significant impact in how we deliver solutions. Therefore, we invest on education; not only to our '
        }
      ]"
    />
  </div>
</template>

<script>
import CustomCarousel from '~/components/shared/CustomCarousel.vue';

export default {
  components: { CustomCarousel },
  head() {
    return {
      title: this.$t('pageTitles.heritage')
    };
  }
};
</script>

<style lang="scss" scoped></style>
