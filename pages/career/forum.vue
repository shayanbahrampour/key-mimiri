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
      :class="['d-flex flex-column align-start white', isMobile ? 'px-4 f-16' : 'px-16 pb-16']"
      style="line-height: 2; width: 100%; min-height: 60vh"
    >
      <AppSteps
        :tabs="$route.query.job ? certainJob : apply"
        :model="counter"
        :class="[!isMobile ? 'mt-16 mx-4' : 'mt-4 mb-6']"
        style="min-width: 90vw"
      />
      <Component :is="steps[counter].component"> </Component>
      <div
        v-if="((counter !== 7 && !$route.query.job) || (counter !== 6 && $route.query.job)) && !isMobile"
        class="d-flex justify-space-between"
        style="width: 100%"
      >
        <v-spacer v-if="counter === 0"></v-spacer>
        <v-btn
          v-if="counter !== 0"
          :class="[
            'rounded-xl d-flex justify-center slategrey--text font-weight-bold',
            isMobile ? 'f-20' : 'f-14 mb-16 ml-4'
          ]"
          :min-width="!isMobile ? '300' : '80%'"
          color="slategrey"
          height="40"
          outlined
          @click="counter--"
        >
          Back
        </v-btn>
        <v-btn
          :class="['rounded-xl d-flex justify-center white--text font-weight-bold', isMobile ? 'f-20' : 'f-14 mb-16']"
          :min-width="!isMobile ? '300' : '80%'"
          color="slategrey"
          elevation="0"
          height="40"
          @click="counter++"
        >
          {{ (counter === 6 && !$route.query.job) || (counter === 5 && $route.query.job) ? 'Send Form' : 'NEXT' }}
        </v-btn>
      </div>
      <div
        v-if="((counter !== 7 && !$route.query.job) || (counter !== 6 && $route.query.job)) && isMobile"
        class="d-flex flex-column"
        style="width: 100%"
      >
        <v-btn
          class="rounded-xl d-flex justify-center white--text font-weight-bold f-20 mb-6"
          :min-width="!isMobile ? '300' : '80%'"
          color="slategrey"
          elevation="0"
          height="40"
          @click="counter++"
        >
          {{ (counter === 6 && !$route.query.job) || (counter === 5 && $route.query.job) ? 'Send Form' : 'NEXT' }}
        </v-btn>
        <v-btn
          v-if="counter !== 0"
          :class="[
            'rounded-xl d-flex justify-center slategrey--text font-weight-bold',
            isMobile ? 'f-20 mb-16' : 'f-14 mb-16 ml-4'
          ]"
          :min-width="!isMobile ? '300' : '80%'"
          color="slategrey"
          height="40"
          outlined
          @click="counter--"
        >
          Back
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import KnowYou from '~/components/career/KnowYou';
import Information from '~/components/career/Information';
import Education from '~/components/career/Education';
import Experiences from '~/components/career/Experiences';
import Skills from '~/components/career/Skills';
import AttachFiles from '~/components/career/AttachFiles';
import StartTime from '~/components/career/StartTime';
import FinishComponent from '~/components/career/FinishComponent';
import AppSteps from '~/components/career/AppSteps';

export default {
  components: {
    KnowYou,
    Information,
    Education,
    Experiences,
    Skills,
    AttachFiles,
    StartTime,
    FinishComponent,
    AppSteps
  },
  data() {
    return {
      counter: 0,
      certainJob: [
        { title: 'Information', value: '' },
        { title: 'Education', value: '' },
        { title: 'Experiences', value: '' },
        { title: 'Skills', value: '' },
        { title: 'Attach files', value: '' },
        { title: 'Print your application', value: '' }
      ],
      apply: [
        { title: 'Let us know you', value: '' },
        { title: 'Information', value: '' },
        { title: 'Education', value: '' },
        { title: 'Experiences', value: '' },
        { title: 'Skills', value: '' },
        { title: 'Attach files', value: '' },
        { title: 'Print your application', value: '' }
      ]
    };
  },
  computed: {
    steps() {
      return [
        this.$route.query.job ? undefined : { component: KnowYou },
        { component: Information },
        { component: Education },
        { component: Experiences },
        { component: Skills },
        { component: AttachFiles },
        { component: StartTime },
        { component: FinishComponent }
      ].filter((item) => !!item);
    }
  }
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
