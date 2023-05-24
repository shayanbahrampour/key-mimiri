<template>
  <div class="d-flex flex-column slategrey">
    <div :class="['d-flex', isMobile ? 'mt-6 px-5 justify-center' : 'my-16 px-12 justify-space-between']">
      <div class="d-flex">
        <div
          :class="[
            'd-flex flex-column justify-center',
            isMobile ? 'align-center' : 'align-start ml-4 desktop-screen-career'
          ]"
        >
          <p
            :class="[
              'bel white--text mb-0 text--darken-3 font-weight-regular',
              isMobile ? 'text-center f-40' : 'f-60 '
            ]"
          >
            People and Careers
          </p>
          <p v-if="isMobile" class="font-weight-light mt-4 f-20 mb-0 text-center white--text" style="line-height: 30px">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all.
          </p>
          <v-btn
            v-if="isMobile"
            class="f-18 white--text mt-2 mb-0 pa-0 font-weight-bold"
            style="text-transform: unset !important"
            text
          >
            <p>see more</p>
          </v-btn>
          <p
            v-if="!isMobile"
            :class="[
              'white--text mb-0 text--darken-3 font-weight-light',
              isMobile ? 'mt-4 text-center  f-18' : 'f-20 mt-16'
            ]"
            style="line-height: 30px"
          >
            In Cobel Group, we intend to provide a dynamic and professional atmosphere for our employees by using below
            strategies: <br /><br />
            Equity, as equal progress opportunity and equal work-specific pay, despite of age, gender, nationality and
            disabilities. Diversity, in educational background, profession, gender, age and believes. Inclusion and
            Talent Empowerment, by designing individual development plans (IDP), on-the-job efficient trainings, and
            implementing regular surveys to discover employee experiences and acting upon Promoting a Knowledge-Centered
            Environment
          </p>
          <div v-if="isMobile" :class="[isMobile ? 'mt-4 mb-6' : undefined]">
            <v-btn class="rounded" color="white" height="50" min-width="50" outlined>
              <v-img height="20" max-width="20" src="/images/icons/linkedin.png" />
            </v-btn>
            <v-btn class="ml-4 rounded" color="white" height="50" min-width="50" outlined>
              <v-img height="20" max-width="20" src="/images/icons/whatsapp.png" />
            </v-btn>
            <v-btn class="ml-4 rounded" color="white" height="50" min-width="50">
              <v-img height="20" max-width="20" src="/images/icons/telegram.png" />
            </v-btn>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div v-if="!isMobile" class="mr-8">
          <v-btn class="mr-4 rounded" color="white" height="50" min-width="50" outlined>
            <v-img height="20" max-width="20" src="/images/icons/linkedin.png" />
          </v-btn>
          <v-btn class="mr-4 rounded" color="white" height="50" min-width="50" outlined>
            <v-img height="20" max-width="20" src="/images/icons/whatsapp.png" />
          </v-btn>
          <v-btn color="white rounded" height="50" min-width="50" outlined>
            <v-img height="20" max-width="20" src="/images/icons/telegram.png" />
          </v-btn>
        </div>
      </div>
    </div>
    <v-img
      :contain="!isMobile"
      :height="isMobile ? '200' : undefined"
      src="/images/video_content/physical.png"
      width="100%"
    />
    <div class="h-full mt-16 slategrey" style="height: 400px">
      <div v-if="!isMobile" class="d-flex justify-center mt-2 px-16">
        <div class="d-flex align-center justify-center">
          <h4 class="bel f-40 white--text text--darken-3 font-weight-regular">Life at Cobel Group®</h4>
          <v-divider class="mx-8" color="white" style="min-height: 100px" vertical />
          <p class="f-20 white--text mb-0 text--darken-3 font-weight-light" style="max-width: 40%">
            Enjoyment of social interaction, sharing experience sense of belonging to a group, promoting participation
          </p>
        </div>
      </div>
      <div v-else class="d-flex flex-column justify-center ma-0 px-6">
        <div class="d-flex flex-column align-start justify-center">
          <h4 class="bel f-36 white--text text--darken-3 font-weight-regular">Life at Cobel Group®</h4>
          <p class="f-20 white--text mb-0 text--darken-3 font-weight-light mt-6" style="line-height: 30px">
            Enjoyment of social interaction, sharing experience sense of belonging to a group, promoting participation
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-center w-full white">
      <v-card
        :width="isMobile ? '90%' : '70%'"
        :class="['rounded-xl d-flex py-16 flex-column align-center justify-center', !isMobile ? 'mb-16' : 'mb-2']"
        color="#ECECEC"
        elevation="0"
        height="350"
        style="margin-top: -175px"
      >
        <h4
          :class="[
            'bel text-center text--darken-3 font-weight-regular slategrey--text',
            isMobile ? 'f-30 mb-6' : 'f-50 mb-2'
          ]"
        >
          Join the Cobel Group®
        </h4>
        <p
          v-if="!isMobile"
          class="f-18 text-center mb-0 text--darken-3 font-weight-light mb-auto"
          style="max-width: 60%; color: #59595b; line-height: 30px"
        >
          If you are willing to cooperate with us, please fill this form and share with us your resume. We will reach
          you when the right opportunity comes up.
        </p>
        <p
          v-else
          class="f-20 text-center mb-0 text--darken-3 px-10 font-weight-light mb-auto"
          style="color: #59595b; line-height: 30px"
        >
          If you are willing to cooperate with us, please fill this form and share with us your resume. We will reach
          you when the right opportunity comes up.
        </p>
        <v-btn
          :to="localePath('/career/forum')"
          :class="[
            'rounded-xl d-flex justify-center white--text',
            isMobile ? 'f-20 mt-6 font-weight-regular' : 'f-14 font-weight-bold'
          ]"
          :min-width="!isMobile ? '300' : '80%'"
          color="#A01E64"
          elevation="0"
          height="40"
        >
          Click Here
        </v-btn>
      </v-card>
      <div
        v-if="!isMobile"
        :class="[
          'd-flex flex-column align-start justify-space-between mt-16 white w-full',
          !isMobile ? 'px-16 ml-16' : undefined
        ]"
      >
        <h4 class="bel f-40 text-center text--darken-3 font-weight-regular mb-auto" style="color: #59595b">
          Job positions
        </h4>
        <div class="d-flex align-center justify-center">
          <JobsGrid />
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="white px-6">
      <h4 class="bel f-40 mt-10 text--darken-3 font-weight-regular" style="color: #59595b">Job positions</h4>
      <JobsGrid class="mt-10" />
    </div>
  </div>
</template>

<script>
import JobsGrid from '~/components/career/JobsGrid';

export default {
  head() {
    return {
      title: this.$t('pageTitles.careers')
    };
  },
  components: { JobsGrid }
};
</script>

<style lang="scss">
.desktop-screen-career {
  max-width: 70vw;
}
</style>
