<template>
  <div class="d-flex flex-column align-center text-center" style="background-color: #00a59b">
    <h1 :class="['bel mt-16 white--text text--darken-3 font-weight-regular', isMobile ? 'f-40' : 'f-80']">
      Physical Health
    </h1>
    <p class="bel mt-6 f-20 white--text text--darken-3">
      Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation
    </p>
    <v-img class="mt-16" contain src="/images/video_content/physical.png" />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex relative-container-phy">
        <p :class="['mt-6 f-20 white--text text--darken-3 font-weight-light', isMobile ? 'text-center' : undefined]">
          Physical health is one of the three main components of health‐related quality of life, alongside psychological
          and social health. It is crucial to maintain good physical health to ensure one's overall well‐ being and
          longevity. Maintaining a physical health, as a perceived improvement in balance, strength, flexibility,
          endurance and functional activities, requires regular exercise, keeping a balanced diet, getting enough sleep,
          and avoiding harmful habits such as smoking. Additionally, it is important to manage physical health issues
          with proper healthcare solutions and high‐quality treatment strategies. With advancements in technology and
          medicine, innovative healthcare solutions have been developed to help individuals manage their physical health
          issues.
        </p>
        <div v-if="!isMobile" class="right-circle"></div>
        <div v-else class="right-circle-mobile"></div>
      </div>
      <v-divider :class="[isMobile ? 'mt-6' : 'mt-16']" style="background-color: #a01e64"></v-divider>
      <h4
        :class="['bel my-8 f-40 text--darken-3 font-weight-regular', isMobile ? 'text-center' : undefined]"
        style="color: #a01e64"
      >
        Ensuring good physical health not only improves one's life expectancy but also contributes to a better quality
        of life, as it allows individuals to be physically active and self‐sufficient, promoting independence and
        overall happiness.
      </h4>
      <div v-if="!isMobile" class="left-circle"></div>
      <div v-else class="left-circle-mobile"></div>
      <v-spacer></v-spacer>
      <div v-if="isMobile" class="d-flex justify-space-between">
        <div class="right-circle mb-16"></div>
        <div class="left-circle-mobile mb-16"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pageTitles.physical')
    };
  }
};
</script>

<style lang="scss">
.right-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a01e64;
  position: absolute;
  right: -130px;
  top: 50%;
  transform: translate(50%, -50%);
}

.relative-container-phy {
  position: relative;
}

.left-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3911f;
  position: absolute;
  left: -100px;
  top: 64%;
  transform: translate(50%, -50%);
}

.right-circle-mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a01e64;
  position: absolute;
  right: -60px;
  top: 150px;
  transform: translate(50%, -50%);
}
.left-circle-mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3911f;
  position: absolute;
  left: -140px;
  top: 1400px;
  transform: translate(50%, -50%);
}
</style>
