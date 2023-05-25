<template>
  <div
    :class="['d-flex flex-column align-center text-center', !isMobile ? 'pt-10' : undefined]"
    style="background-color: #00a59b"
  >
    <h1 :class="['bel white--text text--darken-3 font-weight-regular', isMobile ? 'f-36 mt-12' : 'f-80 mt-16']">
      Physical Health
    </h1>
    <p :class="['mt-6 white--text text--darken-3 font-weight-light', !isMobile ? 'f-22 mb-16' : 'f-20 mx-6']">
      Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation
    </p>
    <v-img class="mt-10" contain src="/images/video_content/social.png" />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex relative-container-social">
        <p
          :class="['white--text text--darken-3 font-weight-regular', isMobile ? 'text-center f-20 mt-10' : 'f-22 mt-6']"
          style="line-height: 40px"
        >
          Physical health is one of the three main components of health‐related quality of life, alongside psychological
          and social health. It is crucial to maintain good physical health to ensure one's overall well‐ being and
          longevity. Maintaining a physical health, as a perceived improvement in balance, strength, flexibility,
          endurance and functional activities, requires regular exercise, keeping a balanced diet, getting enough sleep,
          and avoiding harmful habits such as smoking. Additionally, it is important to manage physical health issues
          with proper healthcare solutions and high‐quality treatment strategies. With advancements in technology and
          medicine, innovative healthcare solutions have been developed to help individuals manage their physical health
          issues.
        </p>
        <div v-if="!isMobile" :class="{ 'animate-dot': scrollPosition > 0 }" class="right-circle"></div>
        <div v-else class="right-circle-mobile"></div>
      </div>
      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #a01e64"></v-divider>
      <h4
        :class="[
          'bel text--darken-3 font-weight-regular mb-16',
          isMobile ? 'text-center black--text f-30 mt-4' : 'f-50'
        ]"
        style="color: #a01e64"
      >
        Ensuring good physical health not only improves one's life expectancy but also contributes to a better quality
        of life, as it allows individuals to be physically active and self‐sufficient, promoting independence and
        overall happiness.
      </h4>
      <div v-if="!isMobile" :class="{ 'animate-dot': scrollPosition > 0 }" class="left-circle"></div>
      <div v-else class="left-circle-mobile"></div>
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
    top: 64%;
  }
}

.right-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a01e64;
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
  background-color: #f3911f;
  position: absolute;
  left: -100px;
  top: 64%;
  transform: translate(50%, -50%);

  &.animate-dot {
    animation: dotAnimationLeft 1s linear;
  }
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
  top: 1750px;
  transform: translate(50%, -50%);
}
</style>
