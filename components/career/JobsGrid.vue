<template>
  <div v-if="!isMobile" class="d-flex flex-column justify-center mb-16">
    <v-row class="mt-10" no-gutters>
      <v-col>
        <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
          {{ $t('career.job_position') }}
        </h4>
        <p
          :class="['f-18 mt-4 mb-0 text--darken-3 mb-auto', isRTL ? 'font-weight-bold' : 'font-weight-light']"
          style="max-width: 80%"
        >
          {{ $t('career.job_description') }}
        </p>
        <div class="d-flex align-center mt-6">
          <v-btn
            :class="['rounded-xl d-flex justify-center white--text f-18', isRTL ? 'font-weight-bold' : undefined]"
            :to="localePath('/career/123')"
            color="slategrey"
            elevation="0"
            height="36"
            min-width="220"
          >
            {{ $t('career.job_action') }}
          </v-btn>
          <v-img :max-width="isRTL ? '140' : undefined" class="me-16" contain max-height="30" src="/images/logo.png" />
        </div>
      </v-col>
      <v-col style="max-width: 100px">
        <v-divider vertical></v-divider>
      </v-col>
      <v-col>
        <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
          {{ $t('career.job_position') }}
        </h4>
        <p
          :class="['f-18 mt-4 mb-0 text--darken-3 mb-auto', isRTL ? 'font-weight-bold' : 'font-weight-light']"
          style="max-width: 80%"
        >
          {{ $t('career.job_description') }}
        </p>
        <div class="d-flex align-center mt-6">
          <v-btn
            :class="['rounded-xl d-flex justify-center white--text f-18', isRTL ? 'font-weight-bold' : undefined]"
            :to="localePath('/career/123')"
            color="slategrey"
            elevation="0"
            height="36"
            min-width="220"
          >
            {{ $t('career.job_action') }}
          </v-btn>
          <v-img :max-width="isRTL ? '140' : undefined" class="me-16" contain max-height="30" src="/images/logo.png" />
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-10 me-16">
      <v-divider></v-divider>
    </v-row>
    <v-row class="mt-10" no-gutters>
      <v-col>
        <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
          {{ $t('career.job_position') }}
        </h4>
        <p
          :class="['f-18 mt-4 mb-0 text--darken-3 mb-auto', isRTL ? 'font-weight-bold' : 'font-weight-light']"
          style="max-width: 80%"
        >
          {{ $t('career.job_description') }}
        </p>
        <div class="d-flex align-center mt-6">
          <v-btn
            :class="['rounded-xl d-flex justify-center white--text f-18', isRTL ? 'font-weight-bold' : undefined]"
            :to="localePath('/career/123')"
            color="slategrey"
            elevation="0"
            height="36"
            min-width="220"
          >
            {{ $t('career.job_action') }}
          </v-btn>
          <v-img :max-width="isRTL ? '140' : undefined" class="me-16" contain max-height="30" src="/images/logo.png" />
        </div>
      </v-col>
      <v-col style="max-width: 100px">
        <v-divider style="margin-top: -70px; height: 300px" vertical></v-divider>
      </v-col>
      <v-col>
        <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
          {{ $t('career.job_position') }}
        </h4>
        <p
          :class="['f-18 mt-4 mb-0 text--darken-3 mb-auto', isRTL ? 'font-weight-bold' : 'font-weight-light']"
          style="max-width: 80%"
        >
          {{ $t('career.job_description') }}
        </p>
        <div class="d-flex align-start mt-6">
          <v-btn
            :class="['rounded-xl d-flex justify-center white--text f-18', isRTL ? 'font-weight-bold' : undefined]"
            :to="localePath('/career/123')"
            color="slategrey"
            elevation="0"
            height="36"
            min-width="220"
          >
            {{ $t('career.job_action') }}
          </v-btn>
          <v-img :max-width="isRTL ? '140' : undefined" class="me-16" contain max-height="30" src="/images/logo.png" />
        </div>
      </v-col>
    </v-row>
  </div>
  <div v-else class="d-flex flex-column mb-16">
    <div v-for="i in 3" :key="i" class="d-flex flex-column">
      <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
        {{ $t('career.job_position') }}
      </h4>
      <p
        :class="['f-18 text--darken-3 mb-auto', isRTL ? 'font-weight-bold' : 'font-weight-light']"
        style="max-width: 80%; color: #59595b; line-height: 24px"
      >
        {{ $t('career.job_description') }}
      </p>
      <div class="d-flex flex-column align-start mt-6">
        <v-img max-height="60" src="/images/logo.png" width="120" />
        <v-btn
          :class="['rounded-xl d-flex justify-center white--text f-20 mt-6', isRTL ? 'font-weight-bold' : undefined]"
          :to="localePath('/career/123')"
          color="slategrey"
          elevation="0"
          height="50"
          min-width="100%"
        >
          {{ $t('career.job_action') }}
        </v-btn>
      </div>

      <v-divider v-if="i !== 3" class="my-10"></v-divider>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
