<template>
  <div>
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

    <v-sheet
      :class="['mx-auto grey--text text--darken-2', !isMobile && ($vuetify.breakpoint.xl ? 'px-12' : 'px-16')]"
      :max-width="globalMaxWidth"
    >
      <div :class="['d-flex align-center py-14', { 'flex-column text-center px-6': isMobile }]">
        <h3
          :class="[
            'font-weight-regular bel grey--text text--darken-2 flex-shrink-0',
            isMobile ? 'f-45 text-center d-block' : 'f-50'
          ]"
        >
          Timelines
        </h3>

        <p
          :class="['mb-0 font-weight-light py-3', isMobile ? 'f-16' : 'f-20 ms-8 ps-8']"
          :style="`${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #aaa`}; color: #59595B`"
        >
          Patients are the center of all projects being conducted in the Cobel Group. Stories of hope, innovation,
          collaboration, inspiration and empowerment helps us measure our impact and inspire us to create more.
        </p>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';
import CustomCarousel from '~/components/shared/CustomCarousel.vue';

export default {
  components: { CustomTabs, CustomCarousel },
  head() {
    return {
      title: this.$t('pageTitles.timeline')
    };
  }
};
</script>

<style lang="scss" scoped></style>
