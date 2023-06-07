<template>
  <div
    :class="['d-flex flex-column align-center text-center', !isMobile ? 'pt-10' : undefined]"
    style="background-color: #00a59b; margin-bottom: -40px"
  >
    <h1 :class="['bel white--text text--darken-3 font-weight-regular', isMobile ? 'f-36 mt-12' : 'f-80 mt-16']">
      {{ $t('pageTitles.physical') }}
    </h1>
    <p :class="['mt-6 white--text text--darken-3 font-weight-light', !isMobile ? 'f-22 mb-16' : 'f-20 mx-6']">
      {{ $t('physical.header_description') }}
    </p>
    <v-sheet v-if="!isMobile" class="custom-gradient w-full mt-16" height="10" />
    <v-img
      :class="[!isMobile ? 'mt-0' : 'mt-10']"
      max-height="500"
      src="/images/temp/social.png"
      style="z-index: 2 !important"
      width="100vw"
    />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex relative-container-social">
        <p
          :class="['white--text text--darken-3 font-weight-regular', isMobile ? 'text-center f-20 mt-10' : 'f-22 mt-6']"
          style="line-height: 40px"
        >
          {{ $t('physical.description') }}
        </p>
        <div v-if="!isMobile" class="right-circle"></div>
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
      <div v-if="!isMobile" class="left-circle"></div>
      <div v-else class="left-circle-mobile"></div>
      <v-spacer></v-spacer>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pageTitles.physical')
    };
  },
  data() {
    return {
      scrollPosition: 0,
      circleRightDesktopPosition: 0,
      circleRightMobilePosition: 0,
      circleLeftDesktopPosition: 0,
      circleLeftMobilePosition: 0
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

      this.circleRightDesktopPosition = this.scrollPosition;
      this.circleLeftDesktopPosition = this.scrollPosition;
      this.circleRightMobilePosition = this.scrollPosition;
      this.circleLeftMobilePosition = this.scrollPosition;

      if (this.scrollPosition < 1150) {
        document.documentElement.style.setProperty(
          '--circleRightDesktopPosition',
          `${1400 - this.circleRightDesktopPosition}px`
        );
      } else {
        document.documentElement.style.setProperty(
          '--circleRightDesktopPosition',
          `${this.circleRightDesktopPosition - 900}px`
        );
      }

      if (this.scrollPosition < 1150) {
        document.documentElement.style.setProperty(
          '--circleRightMobilePosition',
          `${2000 - this.circleRightMobilePosition}px`
        );
      } else {
        document.documentElement.style.setProperty(
          '--circleRightMobilePosition',
          `${this.circleRightMobilePosition - 320}px`
        );
      }

      if (this.scrollPosition > 300) {
        document.documentElement.style.setProperty(
          '--circleLeftMobilePosition',
          `${190 + this.circleLeftMobilePosition}px`
        );
      } else {
        document.documentElement.style.setProperty(
          '--circleLeftMobilePosition',
          `${1000 + this.circleLeftMobilePosition}px`
        );
      }

      if (this.scrollPosition > 300) {
        if (this.scrollPosition < 1350) {
          document.documentElement.style.setProperty(
            '--circleLeftDesktopPosition',
            `${400 + this.circleLeftDesktopPosition * 1.1}px`
          );
        }
      } else {
        document.documentElement.style.setProperty(
          '--circleLeftDesktopPosition',
          `${1100 + this.circleLeftDesktopPosition}px`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.right-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a01e64;
  position: absolute;
  right: -130px;
  top: var(--circleRightDesktopPosition);
  transform: translate(50%, -50%);
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
  top: var(--circleLeftDesktopPosition);
  transform: translate(50%, -50%);
}

.right-circle-mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a01e64;
  position: absolute;
  right: -60px;
  top: var(--circleRightMobilePosition);
  transform: translate(50%, -50%);
}

.left-circle-mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3911f;
  position: absolute;
  left: -140px;
  top: var(--circleLeftMobilePosition);
  transform: translate(50%, -50%);
}
</style>
