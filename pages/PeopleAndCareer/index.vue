<template>
  <div class="d-flex flex-column slategrey">
    <div :class="['d-flex', isMobile ? 'mt-6 px-5 justify-center' : 'my-16 px-16 justify-space-between']">
      <div class="d-flex">
        <div
          :class="[
            'd-flex flex-column justify-center',
            isMobile ? 'align-center' : 'align-start desktop-screen-career'
          ]"
        >
          <div :class="[!isMobile ? 'd-flex justify-space-between w-full' : undefined]">
            <p
              :class="[
                'white--text mb-0 text--darken-3 font-weight-regular',
                isMobile ? 'text-center mt-4' : undefined,
                isRTL ? (isMobile ? 'ravi f-30' : 'ravi f-50') : isMobile ? 'bel f-34' : 'bel f-60 '
              ]"
            >
              {{ $t('career.title') }}
            </p>
            <div v-if="!isMobile" class="d-flex justify-space-between" style="width: 180px">
              <v-btn height="50" min-width="50" outlined style="border-radius: 35%; border: 2px solid white" width="50">
                <v-img height="20" max-width="20" src="/images/icons/linkedin.png" />
              </v-btn>
              <v-btn height="50" min-width="50" outlined style="border-radius: 35%; border: 2px solid white" width="50">
                <v-img height="20" max-width="20" src="/images/icons/whatsapp.png" />
              </v-btn>
              <v-btn height="50" min-width="50" outlined style="border-radius: 35%; border: 2px solid white" width="50">
                <v-img height="20" max-width="20" src="/images/icons/telegram.png" />
              </v-btn>
            </div>
          </div>

          <v-expansion-panels v-if="isMobile" class="mb-4" flat>
            <v-expansion-panel class="transparent d-flex flex-column justify-center">
              <p
                v-if="!seeMore"
                :class="[
                  'f-20 white--text text--darken-3',
                  isMobile ? 'text-center mt-8 mb-0 mx-8' : 'mt-16 mx-16',
                  isRTL ? 'font-weight-bold mb-1' : 'font-weight-light'
                ]"
                style="line-height: 30px"
              >
                {{ $t('career.panel_text.compact') }}
              </p>
              <v-expansion-panel-content class="text-center">
                <p
                  v-if="seeMore"
                  :class="[
                    'f-20 white--text text--darken-3',
                    isMobile ? 'text-center mt-8 mb-1' : 'mt-16 mx-16',
                    isRTL ? 'font-weight-bold' : 'font-weight-light'
                  ]"
                  style="line-height: 30px"
                >
                  {{ $t('career.panel_text.full') }}
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-header
                :class="[
                  'pa-0 ma-0 white--text justify-center f-20 font-weight-bold bg-transparent',
                  { 'ravi ': isRTL }
                ]"
                hide-actions
                style="height: 20px !important; margin-top: -12px !important"
                @click="seeMore = !seeMore"
                >{{ seeMore ? $t('button.see_less') : $t('button.see_more') }}
              </v-expansion-panel-header>
            </v-expansion-panel>
          </v-expansion-panels>
          <p
            v-if="!isMobile && isRTL"
            :class="[
              'white--text mb-0 text--darken-3 font-weight-light',
              isMobile ? 'mt-4 text-center f-18' : 'f-20 mt-16',
              isRTL ? 'ravi rtl-text-career' : undefined
            ]"
            style="line-height: 30px"
          >
            {{ $t('career.description_short') }} <br /><br />
            {{ $t('career.description') }}
          </p>
          <p
            v-if="!isMobile && !isRTL"
            :class="[
              'white--text mb-0 text--darken-3 font-weight-light',
              isMobile ? 'mt-4 text-center f-18' : 'f-20 mt-16',
              isRTL ? 'ravi rtl-text-career' : undefined
            ]"
            style="line-height: 30px"
          >
            In Cobel Group, we intend to provide a dynamic and professional atmosphere for our employees by using below
            strategies:<br /><br />
            <strong>Equity</strong>, as equal progress opportunity and equal work-specific pay, despite of age, gender,
            nationality and disabilities.<br />
            <strong>Diversity</strong>, in educational background, profession, gender, age and believes.<br />
            <strong>Inclusion and Talent Empowerment</strong>, by designing individual development plans (IDP),
            on-the-job efficient trainings, and implementing regular surveys to discover employee experiences and acting
            upon Promoting a Knowledge-Centered Environment
          </p>
          <div v-if="isMobile" :class="[isMobile ? 'mt-4 mb-6' : undefined]">
            <v-btn height="50" min-width="50" outlined style="border-radius: 35%; border: 2px solid white" width="50">
              <v-img height="20" max-width="20" src="/images/icons/linkedin.png" />
            </v-btn>
            <v-btn
              class="mx-4"
              height="50"
              min-width="50"
              outlined
              style="border-radius: 35%; border: 2px solid white"
              width="50"
            >
              <v-img height="20" max-width="20" src="/images/icons/whatsapp.png" />
            </v-btn>
            <v-btn height="50" min-width="50" outlined style="border-radius: 35%; border: 2px solid white" width="50">
              <v-img height="20" max-width="20" src="/images/icons/telegram.png" />
            </v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <VideoContents
        class="w-full overflow-hidden d-flex align-center"
        poster="/images/temp/cover-10.jpg"
        src="/video/index-video.mp4"
        style="max-height: 500px"
      />
    </div>

    <div class="h-full mt-16 slategrey" style="height: 400px">
      <div v-if="!isMobile" class="d-flex justify-center mt-6 px-16">
        <div class="d-flex align-center justify-center">
          <h4
            :class="['f-40 white--text text--darken-3 font-weight-regular', `text-${isRTL ? 'start ravi' : 'end bel'}`]"
            style="width: 30%"
          >
            {{ $t('career.divider_title') }}
          </h4>
          <v-divider class="mx-8" color="white" style="min-height: 100px" vertical />
          <p
            :class="[
              'f-20 white--text mb-0 text--darken-3 font-weight-light',
              isRTL ? 'ravi rtl-text-career' : undefined
            ]"
            style="max-width: 30%"
          >
            {{ $t('career.divider_description') }}
          </p>
        </div>
      </div>
      <div v-else class="d-flex flex-column justify-center ma-0 px-6">
        <div class="d-flex flex-column align-start justify-center">
          <h4 :class="['f-36 white--text text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']">
            {{ $t('career.divider_title') }}
          </h4>
          <p
            :class="['f-20 white--text mb-0 text--darken-3 mt-6', isRTL ? 'font-weight-bold' : 'font-weight-light']"
            style="line-height: 30px"
          >
            {{ $t('career.divider_description') }}
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-center w-full white">
      <v-card
        :class="['rounded-xl d-flex py-16 flex-column align-center justify-center', !isMobile ? 'mb-16' : 'mb-2']"
        :width="isMobile ? '90%' : '70%'"
        color="#ECECEC"
        elevation="0"
        height="350"
        style="margin-top: -175px"
      >
        <h4
          :class="[
            'text-center text--darken-3 font-weight-regular',
            isMobile ? 'f-30 mb-2' : 'f-50 mb-auto',
            isRTL ? 'ravi' : 'bel'
          ]"
          style="color: #66869a"
        >
          {{ $t('career.card_title') }}
        </h4>
        <p
          v-if="!isMobile"
          :class="['f-18 text-center text--darken-3 mb-auto', !isRTL ? 'font-weight-light' : 'ravi rtl-text-career']"
          style="max-width: 60%; color: #59595b; line-height: 30px"
        >
          {{ $t('career.card_description') }}
        </p>
        <p
          v-else
          :class="['f-20 text-center mb-0 text--darken-3 px-10 mb-8', isRTL ? 'font-weight-bold' : 'font-weight-light']"
          style="color: #59595b; line-height: 30px"
        >
          {{ $t('career.card_description') }}
        </p>
        <v-btn
          :class="[
            'rounded-xl d-flex justify-center white--text f-20 font-weight-regular',
            isMobile ? 'mt-6' : 'mt-6',
            isRTL ? 'ravi' : undefined
          ]"
          :min-width="!isMobile ? '300' : '80%'"
          :to="localePath('/PeopleAndCareer/forum')"
          color="#A01E64"
          elevation="0"
          height="40"
        >
          <p :class="isRTL ? 'mt-5' : 'mt-4'">{{ $t('career.card_action') }}</p>
        </v-btn>
      </v-card>
      <div
        v-if="!isMobile"
        :class="[
          'd-flex flex-column align-start justify-space-between mt-16 white w-full',
          !isMobile ? 'px-16' : undefined
        ]"
      >
        <h4
          :class="['f-40 text-center text--darken-3 font-weight-regular mb-auto', isRTL ? 'ravi' : 'bel']"
          style="color: #59595b"
        >
          {{ $t('career.job_title') }}
        </h4>
        <div class="d-flex align-center justify-center">
          <JobsGrid />
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="white px-6" style="margin-top: -2px">
      <h4
        :class="['mt-10 text--darken-3 font-weight-regular', isRTL ? 'ravi f-30' : 'bel f-40']"
        style="color: #59595b"
      >
        {{ $t('career.job_title') }}
      </h4>
      <JobsGrid class="mt-10" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JobsGrid from '~/components/career/JobsGrid';
import VideoContents from '~/components/shared/VideoContents.vue';
import VideoLoader from '~/components/shared/VideoLoader.vue';

export default {
  head() {
    return {
      title: this.$t('pageTitles.careers')
    };
  },
  components: { VideoLoader, VideoContents, JobsGrid },
  computed: {
    ...mapGetters({
      answers: 'career/getAnswers'
    })
  },
  fetch() {
    if (this.answers) {
      this.$store.commit('career/RESET');
    }
  },
  data() {
    return {
      seeMore: false,
      text: {
        compact: 'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all.',
        full: 'In Cobel Group, we intend to provide a dynamic and professional atmosphere for our employees by using below strategies: Equity, as equal progress opportunity and equal work-specific pay, despite of age, gender, nationality and disabilities. Diversity, in educational background, profession, gender, age and believes. Inclusion and Talent Empowerment, by designing individual development plans (IDP), on-the-job efficient trainings, and implementing regular surveys to discover employee experiences and acting upon Promoting a Knowledge-Centered Environment'
      }
    };
  }
};
</script>

<style lang="scss">
.rtl-text-career {
  opacity: 0.8;
}

.desktop-screen-career {
  max-width: 90vw;
}

.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 20px;
  margin-bottom: 20px !important;
}
</style>
