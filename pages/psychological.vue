<template>
  <div
    :class="['d-flex flex-column align-center text-center', !isMobile ? 'pt-10' : undefined]"
    style="background-color: #f3911f"
  >
    <h1 :class="['bel white--text text--darken-3 font-weight-regular', isMobile ? 'f-36 mt-12' : 'f-80 mt-16']">
      Psychological Health
    </h1>
    <p :class="['mt-6 white--text text--darken-3 font-weight-light', !isMobile ? 'f-22 mb-16' : 'f-20 mx-6']">
      Enjoyment of social interaction, sharing experiences, sense of belonging to a group, promoting participation
    </p>
    <v-sheet v-if="!isMobile" class="custom-gradient w-full mt-16" height="10" />

    <v-img :class="[!isMobile ? 'mt-0' : 'mt-10']" contain src="/images/video_content/social.png" />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex relative-container-social">
        <p
          :class="['white--text text--darken-3 font-weight-regular', isMobile ? 'text-center f-20 mt-10' : 'f-22 mt-6']"
          style="line-height: 40px"
        >
          Psychological health is an important component of health‐related quality of life, alongside physical and
          social health. It refers to emotional well‐being, mental states, and ability to manage stress, maintain
          interpersonal relationships, and make sound decisions. Psychological health is essential for leading a happy
          and fulfilling life, as it enables individuals to handle life's challenges with confidence and resilience.
        </p>
        <div v-if="!isMobile" class="right-circle" :class="{ 'animate-dot': scrollPosition > 0 }"></div>
        <div v-else class="right-circle-mobile"></div>
      </div>
      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #f3911f"></v-divider>
      <h4
        :class="['bel text--darken-3 font-weight-regular', isMobile ? 'text-center f-30' : 'f-50']"
        style="color: #a01e64"
      >
        High levels of psychological health enable individuals to be more efficient and productive in their personal and
        professional lives, as they are able to think clearly, communicate effectively, and learn new skills.
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
        Moreover, when individuals are psychologically healthy, they possess high levels of self‐ awareness,
        self‐esteem, and confidence, which means they are empowered to set and achieve goals that support their overall
        well‐being. Psychological health is therefore critical to a high quality of life and should be prioritized in
        any individual's overall health and wellness regime.
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
  background-color: #00a59b;
  position: absolute;
  left: -140px;
  top: 1750px;
  transform: translate(50%, -50%);
}
</style>
