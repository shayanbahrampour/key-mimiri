<template>
  <div
    :class="['d-flex flex-column align-center text-center', !isMobile ? 'pt-10' : undefined]"
    style="background-color: #00a59b"
  >
    <h1 :class="['bel white--text text--darken-3 font-weight-regular', isMobile ? 'f-36 mt-12' : 'f-80 mt-16']">
      {{ $t('pageTitles.physical') }}
    </h1>
    <p :class="['mt-6 white--text text--darken-3 font-weight-light', !isMobile ? 'f-22 mb-16' : 'f-20 mx-6']">
      {{ $t('physical.header_description') }}
    </p>
    <v-img class="mt-10" max-height="500" src="/images/video_content/social.png" />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex relative-container-social">
        <p
          :class="['white--text text--darken-3 font-weight-regular', isMobile ? 'text-center f-20 mt-10' : 'f-22 mt-6']"
          style="line-height: 40px"
        >
          {{ $t('physical.description') }}
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
        {{ $t('physical.responsibility') }}
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
