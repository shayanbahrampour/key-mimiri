<template>
  <div class="d-flex flex-column slategrey">
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
            Senior project manager
          </p>
          <p
            v-if="isMobile"
            class="font-weight-light mt-10 f-20 mb-6 text-center white--text"
            style="max-width: 500px; line-height: 2"
          >
            Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required
            to consume 60 mg of iron supple ments per week.
          </p>
          <p
            v-if="!isMobile"
            :class="[
              'white--text mb-0 text--darken-3 font-weight-light',
              isMobile ? 'mt-4 text-center  f-18' : 'f-20 mt-0 mb-10'
            ]"
          >
            Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required
            to consume 60 mg of iron supplements per week.
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
    <div :class="['d-flex flex-column align-start white', isMobile ? 'px-4 f-16' : 'px-16']" style="line-height: 2">
      <v-img
        :class="[isMobile ? 'mt-14' : 'mx-6 mt-10']"
        :max-height="isMobile ? '50' : '30'"
        :width="isMobile ? '100%' : '100'"
        contain
        src="/images/logo.png"
      />
      <p :class="['mx-2 mt-6', isMobile ? 'text-center' : undefined]" style="color: #939393">
        A senior project manager is often thought of as a more experienced project manager. They are entrusted with
        larger and more complex projects and may be put in charge of several projects at once. The exact job description
        and requirements will vary from company to company. A senior project manager may have additional
        responsibilities relating to the management of projects, project managers, and the organization as a whole.
      </p>
      <h4 :class="['bel mb-6 mt-16 f-30 font-weight-regular slategrey--text', isMobile ? 'mx-2' : 'mx-6']">
        Project responsibilities may include:
      </h4>
      <div v-for="(item, i) in items" :key="i" :class="['d-flex justify-center mb-8', isMobile ? 'px-2' : 'px-6']">
        <v-icon class="ml-4 mr-6 mt-3 align-self-start" size="4">mdi-circle</v-icon>
        <p class="mb-0 align-self-start" style="color: #818181">
          <span class="font-weight-regular">{{ item.title }}:</span>
          <span class="font-weight-light">{{ item.subtitle }}</span>
        </p>
      </div>

      <p v-if="!isMobile" class="font-weight-light mt-10 mx-8 f-18" style="color: #939393">
        The Senior Project Manager is responsible for leading teams to deliver project(s) that span across one or more
        business units. Manage resources, schedules, financials and adhere to stage gate quality and SDLC control
        guidelines throughout the full systems development life cycle. This also includes management of issues, risks
        and project change requests to ensure successful and on-time project delivery. <br /><br /><br />
        Contribute to process improvement initiatives as it relates to improving project delivery. The Senior Project
        Manager has the authority to run the project on a day-to-day basis. Verify that the project produces the
        required deliverables of quality, within the specified constraints of time and cost and to achieve the potential
        benefits defined in the business case.
      </p>
    </div>
    <div class="d-flex flex-column align-center w-full white">
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
  data() {
    return {
      items: [
        {
          title: 'Being the escalation point',
          subtitle:
            'Senior project managers may be a key point of contact for stakeholders on projects that belong to junior staff. This provides an escalation path for issues the project manager cannot resolve on their own.'
        },
        {
          title: 'Saving struggling projects',
          subtitle:
            'When a project gets too far off track, a senior project manager may support the project manager or take over the project.'
        },
        {
          title: 'Interviewing and hiring',
          subtitle: 'Senior project managers may assist with interviewing and hiring new project staff.'
        },
        {
          title: 'Training and managing',
          subtitle: ' In some organizations, project managers report directly to senior project managers.'
        },
        {
          title: 'Mentoring and coaching',
          subtitle: 'Senior project managers are often expected to coach and mentor junior staff.'
        },
        {
          title: 'Acting as a role model',
          subtitle: 'People in this role may be expected to be a role model for junior members of the team.'
        },
        {
          title: 'Big-picture support',
          subtitle: 'A senior project manager may be expected to help with program management and other PMO duties.'
        },
        {
          title: 'Championing progress',
          subtitle:
            'Senior project managers may act as champions of learning, process improvement, and project management within the company.'
        }
      ]
    };
  },
  components: { JobsGrid }
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
