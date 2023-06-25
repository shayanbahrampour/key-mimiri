<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mx-4 mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="[
          'mb-4 text--darken-3 font-weight-regular',
          isRTL
            ? isMobile
              ? 'text-center f-36 ravi mb-10'
              : 'ravi f-36 mt-10 mb-8'
            : isMobile
            ? 'text-center f-36 bel'
            : 'f-50 mt-10 bel'
        ]"
        style="color: #59595b"
      >
        {{ $t('career.steps.start_time.title') }}
      </p>
      <div class="d-flex flex-column">
        <v-select
          v-model="model.date"
          :class="['mb-6', isRTL ? 'ravi' : undefined]"
          :items="items"
          :label="$t('career.steps.start_time.placeholder_one')"
          :rules="[rule.required]"
          append-icon="mdi-triangle-down 10"
          append-icon-size="16"
          dense
          filled
          hide-details
          menu-props="auto"
          rounded
          style="max-width: 400px"
        ></v-select>
        <v-radio-group v-model="radioGroup" class="mt-6 pt-0">
          <v-radio
            :class="isRTL ? 'ravi text-end' : undefined"
            :label="$t('career.steps.start_time.radio')"
            :rules="[rule.required]"
            color="#4C6D80"
          ></v-radio>
        </v-radio-group>
        <div class="d-flex mt-6 align-center">
          <v-btn
            :class="isMobile ? 'mb-16' : undefined"
            color="#00A59B"
            height="50"
            max-width="20"
            outlined
            small
            style="border-radius: 30%"
          >
            <v-img max-width="20" src="/images/career/pdf.png" />
          </v-btn>
          <v-btn
            :class="['mt-0 ms-0', isMobile ? 'mb-16' : undefined]"
            style="text-transform: unset !important; color: #00a59b"
            text
          >
            <p :class="['mb-0 f-16', isRTL ? 'ravi text-center' : undefined]">
              {{ $t('career.steps.start_time.upload_file') }}
            </p>
          </v-btn>
        </div>
      </div>
    </div>
    <CareerButtons :class="{ 'mt-10': !isRTL }" @next="goNext()" @back="$emit('back')" :step="step" />
  </v-form>
</template>

<script>
import CareerButtons from './CareerButtons';
import mixinRules from '~/mixins/mixin.rules';
import { mapGetters } from 'vuex';
export default {
  mixins: [mixinRules],
  components: { CareerButtons },
  props: {
    step: {
      type: Number,
      default: undefined
    }
  },
  data() {
    return {
      valid: null,
      flag: {
        loading: false
      },
      model: { date: null, radio: false },
      items: ['option 1', 'option 2', 'option 3']
    };
  },
  computed: {
    ...mapGetters({
      answers: 'career/getAnswers'
    })
  },
  methods: {
    async goNext() {
      if (!this.valid) {
        this.$toast.clear();
        this.$toast.error('All Fields Required');
        return;
      } else {
        // this.$store.commit('career/SET', {
        //   answers: {
        //     ...(this.answers || {}),
        //     preferred_start_date: this.model.date
        //   }
        // });
        // console.log(this.answers);
        try {
          this.flag.loading = true;
          await this.$store.dispatch('career/sendApplication', {
            body: {
              job_position_id: Number(this.$route.params.id),
              first_name: this.answers.first_name,
              last_name: this.answers.last_name,
              id_number: this.answers.id_number,
              phone_number: this.answers.phone_number,
              email: this.answers.email,
              address: this.answers.address,
              why_talent: this.answers.why_talent,
              why_cobel: this.answers.why_cobel,
              what_department: this.answers.what_department,
              education_description: this.answers.education_description,
              soft_skills: this.answers.soft_skills,
              preferred_start_date: this.model.date,
              education: this.answers.education,
              experiences: this.answers.experiences,
              skills: this.answers.skills,
              cover_letter_file: this.answers.cover_letter_file,
              cv_file: this.answers.cv_file,
              letter_addressing_file: this.answers.letter_addressing_file,
              supplementary_material_file: this.answers.supplementary_material_file
            }
          });
          this.$toast.success('Done!');
          this.$emit('next');
        } catch (e) {
          this.errorHandler(e);
        }
      }
    }
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}

.mdi-triangle-down::before {
  font-size: 16px;
  color: slategrey;
}
</style>
