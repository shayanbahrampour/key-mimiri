<template>
  <v-app-bar
    v-if="!isMobile"
    class="career-header"
    color="slategrey"
    elevate-on-scroll
    fixed
    flat
    height="320"
    style="margin-top: 120px"
    tile
  >
    <v-sheet
      :max-width="globalMaxWidth"
      class="d-flex mx-auto mt-16 mb-8 px-8 justify-space-between w-full"
      color="transparent"
    >
      <div class="d-flex">
        <div
          :class="[
            'd-flex flex-column justify-center align-start ms-4',
            isRTL ? 'container-scrolled-rtl-des' : 'container-scrolled-des'
          ]"
        >
          <div>
            <h2
              :class="['white--text mb-0 text--darken-3 font-weight-regular f-50 header-des', isRTL ? 'ravi' : 'bel']"
            >
              {{ $t('career.job_position') }}
            </h2>
            <p
              :class="[
                'white--text text--darken-3 font-weight-light description-des f-20 mt-0 mb-10',
                isRTL ? 'ravi mt-4' : undefined
              ]"
              style="max-width: 70%"
            >
              {{ $t('career.job_description') }}
            </p>
          </div>
          <v-btn
            :class="[
              'rounded-xl d-flex justify-center white--text font-weight-regular f-18 mt-10 mb-6',
              isRTL ? 'ravi' : undefined
            ]"
            :to="localePath(`/career/forum?job=${true}`)"
            color="#A01E64"
            elevation="0"
            height="50"
            min-width="250"
          >
            {{ $t('career.job_action') }}
          </v-btn>
        </div>
      </div>
    </v-sheet>
  </v-app-bar>
  <div v-else class="d-flex py-6 px-4 justify-center slategrey">
    <div class="d-flex">
      <div class="d-flex flex-column justify-center align-center mobile-contact">
        <p
          :class="['white--text mb-0 text--darken-3 font-weight-regular text-center f-36', isRTL ? 'ravi mt-4' : 'bel']"
        >
          {{ $t('career.job_position') }}
        </p>
        <p
          :class="['font-weight-light my-6 mx-4 f-20 text-center white--text', isRTL ? 'ravi' : undefined]"
          style="max-width: 500px; line-height: 2"
        >
          {{ $t('career.job_description') }}
        </p>
        <v-btn
          :class="[
            'rounded-xl d-flex justify-center white--text font-weight-regular f-20 mb-2 mt-2',
            isRTL ? 'ravi' : undefined
          ]"
          :to="localePath(`/career/forum?job=${true}`)"
          color="#A01E64"
          elevation="0"
          height="50"
          min-width="100%"
        >
          {{ $t('career.job_action') }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.career-header {
  &.v-app-bar--is-scrolled {
    transform: none !important;
    transition: all ease-in 0.2s !important;
    box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.2) !important;

    &,
    .v-toolbar__content {
      height: 140px !important;
      margin-top: 56px !important;
      padding-top: 8px !important;
      padding-bottom: 32px !important;
    }

    .header-des {
      font-size: 32px !important;
    }

    .description-des {
      font-size: 16px !important;
      max-width: 90% !important;
    }

    .container-scrolled-des {
      margin-top: -110px !important;
      flex-direction: row !important;
      align-items: center !important;

      .v-btn {
        margin-top: 0 !important;
        position: absolute;
        right: 82px !important;
      }
    }

    .container-scrolled-rtl-des {
      margin-top: -110px !important;
      flex-direction: row !important;
      align-items: center !important;

      .v-btn {
        margin-top: 0 !important;
        position: absolute;
        left: 82px !important;
      }
    }

    .container-scrolled-mobile {
      margin-top: -210px !important;
      flex-direction: row !important;
      align-items: center !important;

      .v-btn {
        margin-top: 0px !important;
        position: absolute;
        right: 82px !important;
      }
    }
  }

  &,
  &.v-toolbar,
  .v-toolbar__content {
    transition: all ease-out 0.2s !important;
  }
}
</style>
