<template>
  <div class="d-flex flex-column slategrey">
    <div :class="['d-flex', isMobile ? 'mt-8 px-4 justify-center' : 'mt-16 mb-8 px-16 justify-space-between']">
      <div class="d-flex">
        <div
          :class="[
            'd-flex flex-column justify-center',
            isMobile ? 'align-center mobile-contact' : 'align-start ms-4 desktop-contact'
          ]"
        >
          <p
            :class="[
              'white--text mb-0 text--darken-3',
              isMobile ? 'text-center f-36' : 'f-60',
              isRTL ? 'ravi font-weight-bold' : 'bel font-weight-regular'
            ]"
          >
            {{ $t('career.forum.forum_title') }}
          </p>
          <p
            v-if="isMobile"
            :class="[
              'font-weight-light mt-6 mb-12 mb-6 text-center white--text',
              isRTL ? 'ravi f-20 mobile-rtl-forum' : 'f-24'
            ]"
            style="max-width: 500px"
          >
            {{ $t('career.forum.forum_description') }}
          </p>
          <p
            v-if="!isMobile"
            :class="[
              'white--text mb-0 text--darken-3 font-weight-light',
              isMobile ? 'mt-4 text-center  f-18' : 'f-18 mt-0 mb-10',
              isRTL ? 'ravi mt-4' : undefined
            ]"
          >
            {{ $t('career.forum.forum_description') }}
          </p>
        </div>
      </div>
    </div>
    <div
      :class="['d-flex flex-column align-start white', isMobile ? 'px-4 f-16' : 'px-16 pb-16']"
      style="line-height: 2; width: 100%; min-height: 60vh"
    >
      <AppSteps
        :class="[!isMobile ? 'mt-16' : 'mt-4 mb-6']"
        :model="counter"
        :tabs="$route.query.job ? certainJob : apply"
        @select="counter = $event"
        :isLast="($route.query.job && counter === 6) || (!$route.query.job && counter === 7) ? true : false"
      />
      <Component :is="steps[counter].component" :class="{ 'pe-0': !isMobile }"></Component>
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
            isMobile ? 'f-20' : 'f-14 mb-16 ms-4',
            isRTL ? 'ravi' : undefined
          ]"
          :min-width="!isMobile ? '300' : '80%'"
          color="slategrey"
          height="40"
          outlined
          @click="counter--"
        >
          {{ $t('button.back') }}
        </v-btn>
        <v-btn
          :class="[
            'rounded-xl d-flex justify-center white--text font-weight-bold',
            isMobile ? 'f-20' : 'f-14 mb-16 me-4',
            isRTL ? 'ravi' : undefined
          ]"
          :min-width="!isMobile ? '300' : '80%'"
          color="slategrey"
          elevation="0"
          height="40"
          @click="counter++"
        >
          {{
            (counter === 6 && !$route.query.job) || (counter === 5 && $route.query.job)
              ? $t('button.send_form')
              : $t('button.next')
          }}
        </v-btn>
      </div>
      <div
        v-if="((counter !== 7 && !$route.query.job) || (counter !== 6 && $route.query.job)) && isMobile"
        class="d-flex flex-column"
        style="width: 100%"
      >
        <v-btn
          :min-width="!isMobile ? '300' : '80%'"
          :class="[
            'rounded-xl d-flex justify-center white--text font-weight-bold f-20 mb-6',
            isRTL ? 'ravi' : undefined
          ]"
          color="slategrey"
          elevation="0"
          height="40"
          @click="counter++"
        >
          {{
            (counter === 6 && !$route.query.job) || (counter === 5 && $route.query.job)
              ? $t('button.send_form')
              : $t('button.next')
          }}
        </v-btn>
        <v-btn
          v-if="counter !== 0"
          :class="[
            'rounded-xl d-flex justify-center slategrey--text font-weight-bold',
            isMobile ? 'f-20 mb-16' : 'f-14 mb-16 ms-4',
            isRTL ? 'ravi' : undefined
          ]"
          :min-width="!isMobile ? '300' : '80%'"
          color="slategrey"
          height="40"
          outlined
          @click="counter--"
        >
          {{ $t('button.back') }}
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
        { title: this.$t('career.steps.information.title'), value: '' },
        { title: this.$t('career.steps.education.title'), value: '' },
        { title: this.$t('career.steps.experiences.title'), value: '' },
        { title: this.$t('career.steps.skills.title'), value: '' },
        { title: this.$t('career.steps.file.title'), value: '' },
        { title: this.$t('career.steps.start_time.title'), value: '' }
      ],
      apply: [
        { title: this.$t('career.steps.let_us_know.title'), value: '' },
        { title: this.$t('career.steps.information.title'), value: '' },
        { title: this.$t('career.steps.education.title'), value: '' },
        { title: this.$t('career.steps.experiences.title'), value: '' },
        { title: this.$t('career.steps.skills.title'), value: '' },
        { title: this.$t('career.steps.file.title'), value: '' },
        { title: this.$t('career.steps.start_time.title'), value: '' }
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

.mobile-rtl-forum {
  line-height: 40px;
}
</style>
