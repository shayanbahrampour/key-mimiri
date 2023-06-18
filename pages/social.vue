<template>
  <div
    :class="[
      'position-relative d-flex flex-column align-center text-center custom-wrapper',
      { 'custom-padding': !isMobile }
    ]"
    style="background-color: #a01e64; margin-bottom: -40px"
  >
    <h1
      :class="[
        'white--text text--darken-3 font-weight-regular',
        isMobile ? 'f-36 mt-12' : 'f-80 mt-16',
        isRTL ? 'ravi' : 'bel'
      ]"
    >
      {{ $t('pageTitles.social') }}
    </h1>
    <p
      :class="[
        'mt-6 white--text text--darken-3',
        !isMobile ? 'f-22 mb-16' : 'f-20 mx-6',
        isRTL ? 'font-weight-bold' : 'font-weight-light'
      ]"
    >
      {{ $t('socialHealth.header_description') }}
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
          {{ $t('socialHealth.description') }}
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
        {{ $t('socialHealth.responsibility') }}
      </h4>

      <v-divider :class="[isMobile ? 'my-6' : 'my-10']" style="background-color: #f3911f" />

      <p
        :class="[
          'white--text text--darken-3 mobile-paragraph',
          isMobile ? 'text-center mb-16 f-20' : 'mx-4 mb-16 mt-6 f-22',
          isRTL ? 'font-weight-bold' : 'font-weight-light'
        ]"
      >
        {{ $t('socialHealth.individual') }}
      </p>

      <nuxt-link to="/psychological">
        <v-sheet
          :style="`top: ${topScrollPosition}; right: -50px`"
          class="rounded-circle z-4 position-absolute"
          color="#f3911f"
          height="100"
          width="100"
        />
      </nuxt-link>
      <nuxt-link to="/physical">
        <v-sheet
          :style="`bottom: ${bottomScrollPosition}; left: -50px`"
          class="rounded-circle z-4 position-absolute"
          color="#00a59b"
          height="100"
          width="100"
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
      title: this.$t('pageTitles.social')
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
  background-image: url('/images/social/line.png');
  background-size: cover;

  &.custom-padding {
    margin-top: -120px;
    padding-top: 160px;
  }
}
</style>
