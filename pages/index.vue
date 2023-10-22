<template>
  <div v-if="!isMobile">
    <HomeSlider @input="value = $event" />
    <HomeCalendar v-if="value" id="calendarPDF" :date="value" />
  </div>
  <div v-else class="h-full d-flex align-center justify-center">
    <h1
      :class="[
        'white--text text-center text--darken-2 font-weight-regular',
        isMobile ? 'f-40' : 'f-40',
        isRTL && isMobile && 'text-center'
      ]"
      style="font-family: Gabarito; line-height: 1.4"
    >
      We Do Not Support Mobile Version Yet!
    </h1>
  </div>
</template>

<script>
import HomeSlider from '~/components/home/HomeSlider.vue';
import HomeCalendar from '~/components/home/HomeCalendar.vue';

export default {
  components: { HomeSlider, HomeCalendar },
  head() {
    return {
      title: this.$t('pageTitles.index')
    };
  },
  data() {
    return {
      value: null
    };
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        setTimeout(() => {
          const objDiv = document.getElementById('calendarPDF');
          this.$vuetify.goTo(objDiv);
        }, 600);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
