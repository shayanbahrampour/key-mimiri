<template>
  <div class="d-flex flex-column" style="background-color: #66869a">
    <div :class="['d-flex', isMobile ? 'mt-8 px-4 justify-center' : 'mt-16 mb-8 px-16 justify-space-between']">
      <div class="d-flex">
        <div
          :class="[
            'd-flex flex-column justify-center',
            isMobile ? 'align-center mobile-contact' : 'align-start ml-4 desktop-contact'
          ]"
        >
          <p
            :class="[
              'bel white--text mb-0 text--darken-3 font-weight-regular',
              isMobile ? 'text-center f-36' : 'f-60 '
            ]"
          >
            Join the Cobel Group®
          </p>
          <p
            v-if="isMobile"
            class="font-weight-light mt-10 f-20 mb-6 text-center white--text"
            style="max-width: 500px; line-height: 2"
          >
            If you are willing to cooperate with us, please fill this form and share with us your resume. We will reach
            you when the right opportunity comes up.
          </p>
          <p
            v-if="!isMobile"
            :class="[
              'white--text mb-0 text--darken-3 font-weight-light',
              isMobile ? 'mt-4 text-center  f-18' : 'f-18 mt-0 mb-10'
            ]"
          >
            If you are willing to cooperate with us, please fill this form and share with us your resume. We will reach
            you when the right opportunity comes up.
          </p>
        </div>
      </div>
    </div>
    <div
      :class="['d-flex flex-column align-start white', isMobile ? 'px-4 f-16' : 'px-16']"
      style="line-height: 2; width: 100%; min-height: 90vh"
    >
      <Education />
    </div>
  </div>
</template>

<script>
import KnowYou from '~/components/career/KnowYou';
import Information from '~/components/career/Information.vue';
import Education from '~/components/career/Education.vue';

export default {
  components: { KnowYou, Information, Education }
};
</script>

<style lang="scss">
.mobile-contact {
  max-width: 90vw !important;
}
.desktop-contact {
  max-width: 70vw !important;
}
</style>
