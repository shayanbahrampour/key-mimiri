<template>
  <div
    :class="['d-flex flex-column align-center text-center', !isMobile ? 'pt-10' : undefined]"
    style="background-color: #a01e64; margin-bottom: -40px"
  >
    <h1 :class="['bel white--text text--darken-3 font-weight-regular', isMobile ? 'f-36 mt-12' : 'f-80 mt-16']">
      {{ $t('pageTitles.social') }}
    </h1>
    <p :class="['mt-6 white--text text--darken-3 font-weight-light', !isMobile ? 'f-22 mb-16' : 'f-20 mx-6']">
      {{ $t('socialHealth.header_description') }}
    </p>
    <v-sheet v-if="!isMobile" class="custom-gradient w-full mt-16" height="10" />

    <VideoContents
      :class="['w-full overflow-hidden d-flex align-center', !isMobile ? 'mt-0' : 'mt-10']"
      poster="/images/temp/cover-6.png"
      src="/video/temp.mp4"
      style="max-height: 80vh; z-index: 2 !important"
    />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex relative-container-social">
        <p
          :class="['white--text text--darken-3 font-weight-light', isMobile ? 'text-center f-20 mt-10' : 'f-22 mt-6']"
          style="line-height: 40px"
        >
          {{ $t('socialHealth.description') }}
        </p>
        <div v-if="!isMobile" class="right-circle"></div>
        <div v-else class="right-circle-mobile"></div>
      </div>
      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #f3911f"></v-divider>
      <h4
        :class="[
          'bel text--darken-3 font-weight-regular',
          isMobile ? 'text-center f-30 orange--text' : 'f-50 white--text'
        ]"
      >
        {{ $t('socialHealth.responsibility') }}
      </h4>
      <div v-if="!isMobile" class="left-circle"></div>
      <div v-else class="left-circle-mobile"></div>
      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #f3911f"></v-divider>
      <p
        :class="[
          'f-22 white--text text--darken-3 font-weight-light',
          isMobile ? 'text-center mb-16' : 'mx-4 mb-16 mt-6'
        ]"
        style="line-height: 40px"
      >
        {{ $t('socialHealth.individual') }}
      </p>
      <v-spacer></v-spacer>
    </div>
  </div>
</template>

<script>
import VideoContents from '~/components/shared/VideoContents';
export default {
  head() {
    return {
      title: this.$t('pageTitles.social')
    };
  },
  components: { VideoContents },
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
        if (this.scrollPosition < 1450) {
          document.documentElement.style.setProperty(
            '--circleLeftDesktopPosition',
            `${400 + this.circleLeftDesktopPosition * 1.1}px`
          );
        }
      } else {
        document.documentElement.style.setProperty(
          '--circleLeftDesktopPosition',
          `${1150 + this.circleLeftDesktopPosition}px`
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
  background-color: #f3911f;
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
  background-color: #00a59b;
  position: absolute;
  left: -100px;
  top: var(--circleLeftDesktopPosition);
  transform: translate(50%, -50%);
}

.right-circle-mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3911f;
  position: absolute;
  right: -60px;
  top: var(--circleRightMobilePosition);
  transform: translate(50%, -50%);
}

.left-circle-mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #00a59b;
  position: absolute;
  left: -140px;
  top: var(--circleLeftMobilePosition);
  transform: translate(50%, -50%);
}
</style>
