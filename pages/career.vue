<template>
  <div class="d-flex flex-column" style="background-color: #66869a">
    <div :class="['d-flex px-16 justify-space-between', isMobile ? 'mt-16' : 'my-16']">
      <div class="d-flex">
        <div
          :class="['d-flex flex-column justify-center ml-4', isMobile ? 'align-center' : 'align-start']"
          style="max-width: 70vw"
        >
          <p
            :class="[
              'bel white--text mb-0 text--darken-3 font-weight-regular',
              isMobile ? 'text-center f-40' : 'f-60 '
            ]"
          >
            People and Careers
          </p>
          <p
            :class="[
              'white--text mb-0 text--darken-3 font-weight-light',
              isMobile ? 'mt-4 text-center  f-18' : 'f-20 mt-16'
            ]"
          >
            In Cobel Group, we intend to provide a dynamic and professional atmosphere for our employees by using below
            strategies: <br /><br />
            Equity, as equal progress opportunity and equal work-specific pay, despite of age, gender, nationality and
            disabilities. Diversity, in educational background, profession, gender, age and believes. Inclusion and
            Talent Empowerment, by designing individual development plans (IDP), on-the-job efficient trainings, and
            implementing regular surveys to discover employee experiences and acting upon Promoting a Knowledge-Centered
            Environment
          </p>
          <div v-if="isMobile" :class="[isMobile ? 'my-8' : undefined]">
            <v-btn outlined color="white" height="50" min-width="50" style="border-radius: 30%">
              <v-img src="/images/icons/linkedin.png" max-width="20" height="20" />
            </v-btn>
            <v-btn outlined class="ml-4" color="white" height="50" min-width="50" style="border-radius: 30%">
              <v-img src="/images/icons/whatsapp.png" max-width="20" height="20" />
            </v-btn>
            <v-btn outlined class="ml-4" color="white" height="50" min-width="50" style="border-radius: 30%">
              <v-img src="/images/icons/telegram.png" max-width="20" height="20" />
            </v-btn>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div v-if="!isMobile">
          <v-btn class="mr-4" outlined color="white" height="50" min-width="50" style="border-radius: 30%">
            <v-img src="/images/icons/linkedin.png" max-width="20" height="20" />
          </v-btn>
          <v-btn class="mr-4" outlined color="white" height="50" min-width="50" style="border-radius: 30%">
            <v-img src="/images/icons/linkedin.png" max-width="20" height="20" />
          </v-btn>
          <v-btn outlined color="white" height="50" min-width="50" style="border-radius: 30%">
            <v-img src="/images/icons/linkedin.png" max-width="20" height="20" />
          </v-btn>
        </div>
      </div>
    </div>
    <v-img
      src="/images/video_content/physical.png"
      :contain="!isMobile"
      width="100%"
      :height="isMobile ? '200' : undefined"
    />
    <div class="h-full mt-16" style="background-color: #66869a; height: 400px">
      <div v-if="!isMobile" class="d-flex justify-center ma-0 px-16">
        <div class="d-flex align-center justify-center">
          <h4 class="bel f-40 white--text text--darken-3 font-weight-regular">Life at Cobel Group®</h4>
          <v-divider vertical style="min-height: 100px" class="mx-8" color="white" />
          <p class="f-18 white--text mb-0 text--darken-3 font-weight-light" style="max-width: 40%">
            Enjoyment of social interaction, sharing experience sense of belonging to a group, promoting participation
          </p>
        </div>
      </div>
      <div v-else class="d-flex flex-column justify-center ma-0 px-6">
        <div class="d-flex flex-column align-start justify-center">
          <h4 class="bel f-40 white--text text--darken-3 font-weight-regular">Life at Cobel Group®</h4>
          <p class="f-18 white--text mb-0 text--darken-3 font-weight-light mt-6">
            Enjoyment of social interaction, sharing experience sense of belonging to a group, promoting participation
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-center w-full white">
      <v-card
        class="rounded-xl d-flex py-16 flex-column align-center justify-center mb-16"
        height="400"
        :width="isMobile ? '90%' : '70%'"
        elevation="0"
        color="#1E1E1E"
        style="margin-top: -200px"
      >
        <h4
          :class="[
            'bel white--text text-center text--darken-3 font-weight-regular mb-auto',
            isMobile ? 'f-35' : 'f-50'
          ]"
        >
          Join the Cobel Group®
        </h4>
        <p
          v-if="!isMobile"
          class="f-18 white--text text-center mb-0 text--darken-3 font-weight-light mb-auto"
          style="max-width: 60%"
        >
          If you are willing to cooperate with us, please fill this form and share with us your resume. We will reach
          you when the right opportunity comes up.
        </p>
        <p v-else class="f-20 white--text text-center mb-0 text--darken-3 px-10 font-weight-light mb-auto">
          If you are willing to cooperate with us, please fill this form and share with us your resume. We will reach
          you when the right opportunity comes up.
        </p>
        <v-btn
          :class="['rounded-xl d-flex justify-center white--text font-weight-bold', isMobile ? 'f-20' : 'f-14']"
          color="#A01E64"
          height="40"
          elevation="0"
          :min-width="!isMobile ? '250' : '80%'"
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
    <div v-if="isMobile" class="white px-10">
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
      title: this.$t('pageTitles.storytellers')
    };
  },
  components: { JobsGrid }
};
</script>

<style lang="scss" scoped></style>
