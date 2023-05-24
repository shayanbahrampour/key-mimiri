<template>
  <div
    :class="['d-flex flex-column align-center text-center', !isMobile ? 'pt-10' : undefined]"
    style="background-color: #a01e64"
  >
    <h1 :class="['bel white--text text--darken-3 font-weight-regular', isMobile ? 'f-36 mt-12' : 'f-80 mt-16']">
      Social Health
    </h1>
    <p :class="['mt-6 white--text text--darken-3 font-weight-light', !isMobile ? 'f-22 mb-16' : 'f-20 mx-6']">
      Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation
    </p>
    <v-sheet v-if="!isMobile" class="custom-gradient w-full mt-16" height="10" />

    <v-img
      :class="[!isMobile ? 'mt-0' : 'mt-10']"
      contain
      src="/images/video_content/social.png"
      style="z-index: 3 !important"
    />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex relative-container-social">
        <p
          :class="['white--text text--darken-3 font-weight-regular', isMobile ? 'text-center f-20 mt-10' : 'f-22 mt-6']"
          style="line-height: 40px"
        >
          Social health is an important aspect of overall health‐related quality of life, along with physical and
          psychological wellness. Social health refers to the ability to maintain positive relationships and
          interactions with others, including a sense of belonging within a community or group. Humans are social
          creatures, and social well‐being is critical for happiness and fulfillment. Enjoyment of social interaction,
          sharing experiences with others, and promoting participation in group activities can bring joy to one's life
          and promote a sense of connectivity. Social health is evaluated in categories such as social support, social
          capital, and social networks.
        </p>
        <div v-if="!isMobile" class="right-circle" :class="{ 'animate-dot': scrollPosition > 0 }"></div>
        <div v-else class="right-circle-mobile"></div>
      </div>
      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #f3911f"></v-divider>
      <h4
        :class="['bel text--darken-3 font-weight-regular', isMobile ? 'text-center f-30' : 'f-50']"
        style="color: #f3911f"
      >
        Corporate social responsibilities can promote social health by providing supportive work environments,
        facilitating community service opportunities, and encouraging team‐building activities.
      </h4>
      <div v-if="!isMobile" class="left-circle" :class="{ 'animate-dot': scrollPosition > 0 }"></div>
      <div v-else class="left-circle-mobile"></div>
      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #f3911f"></v-divider>
      <p
        :class="[
          'f-22 white--text text--darken-3 font-weight-regular',
          isMobile ? 'text-center mb-16' : 'mx-4 mb-16 mt-6'
        ]"
        style="line-height: 40px"
      >
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
  },
  data() {
    return {
      scrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    }
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

@keyframes dotAnimationRight {
  30% {
    transform: translate(50%, -50%);
    top: 100%;
  }
  100% {
    transform: translate(50%, -50%);
    top: 30%;
  }
}
@keyframes dotAnimationLeft {
  30% {
    transform: translate(50%, -50%);
    top: 30%;
  }
  100% {
    transform: translate(50%, -50%);
    top: 62%;
  }
}

.right-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3911f;
  position: absolute;
  right: -130px;
  top: 30%;
  transform: translate(50%, -50%);
  &.animate-dot {
    animation: dotAnimationRight 1s linear;
  }
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
  top: 62%;
  transform: translate(50%, -50%);
  &.animate-dot {
    animation: dotAnimationLeft 1s linear;
  }
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
  top: 1750px;
  transform: translate(50%, -50%);
}
</style>
