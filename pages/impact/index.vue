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
  </div>
</template>

<script>
import CustomCarousel from '~/components/shared/CustomCarousel.vue';

export default {
  components: { CustomCarousel }
};
</script>

<style lang="scss" scoped></style>
