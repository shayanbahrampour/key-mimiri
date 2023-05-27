<template>
  <v-app-bar
    v-if="!isMobile"
    :height="isMobile ? 400 : 320"
    :scroll-threshold="120"
    :class="[!isMobile ? 'head-container' : undefined]"
    color="slategrey"
    fixed
    flat
    :hide-on-scroll="!isMobile"
    tile
    :style="`${!isMobile ? 'margin-top: 120px' : 'margin-top: 60px'}`"
    ><div :class="['d-flex', isMobile ? 'mt-8 px-4 justify-center' : 'mt-16 mb-8 px-8 justify-space-between']">
      <div class="d-flex">
        <div
          :class="[
            'd-flex flex-column justify-center',
            isMobile
              ? 'align-center mobile-contact container-scrolled-mobile'
              : 'align-start ml-4 desktop-contact container-scrolled-des'
          ]"
        >
          <div>
            <h2
              :class="[
                'bel white--text mb-0 text--darken-3 font-weight-regular',
                isMobile ? 'text-center f-36 header-mobile' : 'f-60 header-des'
              ]"
            >
              Senior project manager
            </h2>
            <p
              v-if="isMobile"
              class="font-weight-light mt-6 f-20 mb-6 text-center white--text"
              style="max-width: 500px; line-height: 2"
            >
              Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required
              to consume 60 mg of iron supple ments per week.
            </p>
            <p
              v-if="!isMobile"
              :class="[
                'white--text mb-0 text--darken-3 font-weight-light description-des',
                isMobile ? 'mt-4 text-center  f-18' : 'f-20 mt-0 mb-10'
              ]"
            >
              Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required
              to consume 60 mg of iron supplements per week.
            </p>
          </div>
          <v-btn
            :class="[
              'rounded-xl d-flex justify-center white--text font-weight-regular',
              isMobile ? 'f-20 mb-6' : 'f-14 mt-10 mb-6'
            ]"
            :min-width="!isMobile ? '250' : '100%'"
            :to="`/career/forum?job=${true}`"
            color="#A01E64"
            elevation="0"
            height="50"
          >
            APPLY NOW
          </v-btn>
        </div>
      </div>
    </div></v-app-bar
  >

  <div
    v-else
    :class="['d-flex', isMobile ? 'py-6 px-4 justify-center slategrey' : 'mt-16 mb-8 px-16 justify-space-between']"
  >
    <div class="d-flex">
      <div
        :class="[
          'd-flex flex-column justify-center',
          isMobile ? 'align-center mobile-contact' : 'align-start ml-4 desktop-contact'
        ]"
      >
        <p
          :class="['bel white--text mb-0 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-60 ']"
        >
          Senior project manager
        </p>
        <p class="font-weight-light mt-6 f-20 mb-6 text-center white--text" style="max-width: 500px; line-height: 2">
          Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
          consume 60 mg of iron supple ments per week.
        </p>
        <v-btn
          :class="[
            'rounded-xl d-flex justify-center white--text font-weight-regular',
            isMobile ? 'f-20 mb-6' : 'f-14 mt-16 mb-0'
          ]"
          :min-width="!isMobile ? '250' : '100%'"
          :to="`/career/forum?job=${true}`"
          color="#A01E64"
          elevation="0"
          height="50"
        >
          APPLY NOW
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.head-container.v-app-bar {
  &.v-app-bar--is-scrolled {
    transition: all ease-in 0.2s !important;
    box-shadow: 0 17px 13px -13px rgba(0, 0, 0, 0.2) !important;
  }

  &.v-app-bar--hide-shadow {
    transform: none !important;
    box-shadow: 0 17px 13px -13px rgba(0, 0, 0, 0.2) !important;

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
        margin-top: 0px !important;
        position: absolute;
        right: 82px !important;
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

    .logo-container {
      height: 56px;
      transition: all ease-in 0.2s !important;

      > div {
        bottom: 0;
        min-height: 90px;
        transition: all ease-in 0.2s !important;
      }
    }
  }

  .logo-container {
    height: 120px;
    transition: all ease-out 0.2s !important;

    > div {
      bottom: 90px;
      min-height: 120px;
      transition: all ease-out 0.2s !important;
    }
  }

  &,
  &.v-toolbar,
  .v-toolbar__content {
    transition: all ease-out 0.2s !important;
  }
}
</style>
