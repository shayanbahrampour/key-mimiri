<template>
  <v-app-bar
    v-if="!isMobile"
    class="head-container"
    color="slategrey"
    elevate-on-scroll
    fixed
    flat
    height="320"
    style="margin-top: 120px"
    tile
  >
    <div class="d-flex mt-16 mb-8 px-8 justify-space-between">
      <div class="d-flex">
        <div class="d-flex flex-column justify-center align-start ml-4 desktop-contact container-scrolled-des">
          <div>
            <h2 class="bel white--text mb-0 text--darken-3 font-weight-regular f-60 header-des">
              Senior project manager
            </h2>
            <p class="white--text mb-0 text--darken-3 font-weight-light description-des f-20 mt-0 mb-10">
              Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required
              to consume 60 mg of iron supplements per week.
            </p>
          </div>
          <v-btn
            :to="`/career/forum?job=${true}`"
            class="rounded-xl d-flex justify-center white--text font-weight-regular f-14 mt-10 mb-6"
            color="#A01E64"
            elevation="0"
            height="50"
            min-width="250"
          >
            APPLY NOW
          </v-btn>
        </div>
      </div>
    </div>
  </v-app-bar>
  <div v-else class="d-flex py-6 px-4 justify-center slategrey">
    <div class="d-flex">
      <div class="d-flex flex-column justify-center align-center mobile-contact">
        <p class="bel white--text mb-0 text--darken-3 font-weight-regular text-center f-36">Senior project manager</p>
        <p class="font-weight-light mt-6 f-20 mb-6 text-center white--text" style="max-width: 500px; line-height: 2">
          Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
          consume 60 mg of iron supplements per week.
        </p>
        <v-btn
          :to="`/career/forum?job=${true}`"
          class="rounded-xl d-flex justify-center white--text font-weight-regular f-20 mb-6"
          color="#A01E64"
          elevation="0"
          height="50"
          min-width="100%"
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
    transform: none !important;
    transition: all ease-in 0.2s !important;
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
        margin-top: 0 !important;
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
  }

  &,
  &.v-toolbar,
  .v-toolbar__content {
    transition: all ease-out 0.2s !important;
  }
}
</style>
