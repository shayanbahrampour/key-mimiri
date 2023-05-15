<template>
  <div class="d-flex flex-column align-center text-center" style="background-color: #a01e64">
    <h1 :class="['bel mt-16 white--text text--darken-3 font-weight-regular', isMobile ? 'f-40' : 'f-80']">
      Social Health
    </h1>
    <p class="bel mt-6 f-20 white--text text--darken-3">
      Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation
    </p>
    <v-sheet v-if="!isMobile" class="custom-gradient w-full mt-16" height="10" />

    <v-img :class="[!isMobile ? 'mt-0' : 'mt-16']" contain src="/images/video_content/social.png" />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex relative-container-social">
        <p :class="['mt-6 f-20 white--text text--darken-3 font-weight-light', isMobile ? 'text-center' : undefined]">
          Social health is an important aspect of overall health‐related quality of life, along with physical and
          psychological wellness. Social health refers to the ability to maintain positive relationships and
          interactions with others, including a sense of belonging within a community or group. Humans are social
          creatures, and social well‐being is critical for happiness and fulfillment. Enjoyment of social interaction,
          sharing experiences with others, and promoting participation in group activities can bring joy to one's life
          and promote a sense of connectivity. Social health is evaluated in categories such as social support, social
          capital, and social networks.
        </p>
        <div v-if="!isMobile" class="right-circle"></div>
        <div v-else class="right-circle-mobile"></div>
      </div>
      <v-divider :class="[isMobile ? 'mt-6' : 'mt-16']" style="background-color: #f3911f"></v-divider>
      <h4
        :class="['bel my-8 f-40 text--darken-3 font-weight-regular', isMobile ? 'text-center' : undefined]"
        style="color: #f3911f"
      >
        Corporate social responsibilities can promote social health by providing supportive work environments,
        facilitating community service opportunities, and encouraging team‐building activities.
      </h4>
      <div v-if="!isMobile" class="left-circle"></div>
      <div v-else class="left-circle-mobile"></div>
      <v-divider :class="[isMobile ? 'mb-6' : 'mb-16']" style="background-color: #f3911f"></v-divider>
      <p :class="['mt-6 f-20 white--text text--darken-3 font-weight-light', isMobile ? 'text-center mb-6' : undefined]">
        When individuals are socially healthy, they are less lonely, less stressed, and committed to their communities,
        which can have a positive impact on overall health and well‐being. Therefore, it is important to prioritize
        social health and engage in activities that support positive social interaction in order to enhance health and
        quality of life.
      </p>
      <v-spacer></v-spacer>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pageTitles.social')
    };
  }
};
</script>

<style lang="scss">
.custom-gradient {
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: -moz-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: -o-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
}

.right-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3911f;
  position: absolute;
  right: -130px;
  top: 50%;
  transform: translate(50%, -50%);
}

.relative-container-social {
  position: relative;
}

.left-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #00a59b;
  position: absolute;
  left: -100px;
  top: 60%;
  transform: translate(50%, -50%);
}

.right-circle-mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3911f;
  position: absolute;
  right: -60px;
  top: 150px;
  transform: translate(50%, -50%);
}

.left-circle-mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #00a59b;
  position: absolute;
  left: -140px;
  top: 1650px;
  transform: translate(50%, -50%);
}
</style>
