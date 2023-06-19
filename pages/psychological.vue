<template>
  <div
    :class="[
      'position-relative d-flex flex-column align-center text-center custom-wrapper',
      isMobile ? 'custom-mobile-padding' : 'custom-padding'
    ]"
    style="background-color: #f3911f; margin-bottom: -40px"
  >
    <h1
      :class="[
        'white--text text--darken-3 font-weight-regular',
        isMobile ? 'f-36' : 'f-80 mt-16',
        isRTL ? 'ravi' : 'bel'
      ]"
    >
      {{ $t('pageTitles.psychological') }}
    </h1>
    <p
      :class="[
        'mt-6 white--text text--darken-3',
        !isMobile ? 'f-22 mb-16' : 'f-20 mx-6',
        isRTL ? 'font-weight-bold' : 'font-weight-light'
      ]"
    >
      {{ $t('psychological.header_description') }}
    </p>
    <v-sheet v-if="!isMobile" class="custom-gradient w-full mt-16" height="15" />

    <VideoContents
      :class="['w-full overflow-hidden d-flex align-center', !isMobile ? 'mt-0' : 'mt-10']"
      poster="/images/temp/cover-6.png"
      src="/video/temp.mp4"
      style="max-height: 80vh; z-index: 2 !important"
    />
    <div :class="[isMobile ? 'text-start px-6 h-full psy-screen d-flex flex-column' : 'text-center ma-16 px-16']">
      <div class="d-flex position-relative">
        <p
          :class="[
            'white--text text--darken-3 mobile-paragraph',
            isMobile ? 'text-center f-20 mt-10' : 'f-22 mt-6',
            isRTL ? 'font-weight-bold' : 'font-weight-light'
          ]"
        >
          {{ $t('psychological.description') }}
        </p>
      </div>
      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #f3911f"></v-divider>
      <h4
        :class="[
          'text--darken-3 font-weight-regular white--text',
          isMobile ? 'text-center' : undefined,
          isRTL
            ? isMobile
              ? 'ravi f-24 mobile-paragraph'
              : 'ravi f-40 desktop-paragraph'
            : isMobile
            ? ' bel text-center f-30'
            : ' bel f-50'
        ]"
      >
        {{ $t('psychological.responsibility') }}
      </h4>

      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #f3911f" />

      <p
        :class="[
          'white--text text--darken-3 mobile-paragraph',
          isMobile ? 'text-center mb-16 f-20' : 'mx-4 mb-16 mt-6 f-22',
          isRTL ? 'font-weight-bold' : 'font-weight-light'
        ]"
      >
        {{ $t('psychological.individual') }}
      </p>

      <nuxt-link to="/physical">
        <v-sheet
          :style="`top: ${topScrollPosition}px; right: -${ballSize / (isMobile ? 1.3 : 2)}px`"
          class="rounded-circle z-4 position-absolute"
          color="#00a59b"
          :height="ballSize"
          :width="ballSize"
        />
      </nuxt-link>
      <nuxt-link to="/social">
        <v-sheet
          :style="`top: ${bottomScrollPosition}px; left: -${ballSize / (isMobile ? 1.3 : 2)}px`"
          class="rounded-circle z-4 position-absolute"
          color="#a01e64"
          :height="ballSize"
          :width="ballSize"
        />
      </nuxt-link>

      <v-spacer />
    </div>
  </div>
</template>

<script>
import MixinScroller from '~/mixins/mixin.scroller';
import VideoContents from '~/components/shared/VideoContents';

export default {
  mixins: [MixinScroller],
  head() {
    return {
      title: this.$t('pageTitles.psychological')
    };
  },
  components: { VideoContents }
};
</script>

<style lang="scss" scoped>
.desktop-paragraph {
  line-height: 60px;
}

.mobile-paragraph {
  line-height: 40px;
}

.custom-wrapper {
  background-image: url('/images/social/sqaure.png');
  background-size: cover;

  &.custom-padding {
    margin-top: -120px;
    padding-top: 160px;
  }

  &.custom-mobile-padding {
    margin-top: -70px;
    padding-top: 110px;
  }
}
</style>
