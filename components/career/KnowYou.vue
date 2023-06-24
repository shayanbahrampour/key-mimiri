<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mb-16' : undefined]" style="width: 100%">
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
        {{ $t('career.steps.let_us_know.title') }}
      </p>
      <v-textarea
        v-model="why_talent"
        :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
        :label="$t('career.steps.let_us_know.placeholder_one')"
        dense
        :rules="[rule.required]"
        filled
        height="160"
        hide-details
        rounded
      ></v-textarea>
      <v-textarea
        v-model="why_cobel"
        :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
        :label="$t('career.steps.let_us_know.placeholder_two')"
        dense
        filled
        :rules="[rule.required]"
        height="160"
        hide-details
        rounded
      ></v-textarea>
      <v-textarea
        v-model="what_department"
        :class="['mb-8 f-20', isRTL ? 'ravi text-end' : undefined]"
        :label="$t('career.steps.let_us_know.placeholder_three')"
        dense
        filled
        :rules="[rule.required]"
        height="160"
        hide-details
        rounded
      ></v-textarea>
    </div>
    <CareerButtons :class="{ 'mt-10': !isRTL }" @next="goNext()" @back="$emit('back')" :step="step" />
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex';
import mixinRules from '~/mixins/mixin.rules';
import CareerButtons from './CareerButtons';
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
      why_talent: null,
      why_cobel: null,
      what_department: null
    };
  },
  computed: {
    ...mapGetters({
      answers: 'career/getAnswers'
    })
  },
  created() {
    if (this.answers && this.answers.what_department) this.what_department = this.answers.what_department;
    if (this.answers && this.answers.why_cobel) this.why_cobel = this.answers.why_cobel;
    if (this.answers && this.answers.why_talent) this.why_talent = this.answers.why_talent;
  },
  methods: {
    goNext() {
      if (!this.valid) {
        this.$toast.clear();
        this.$toast.error('All Fields Required');
        return;
      } else {
        this.$store.commit('career/SET', {
          answers: {
            ...(this.answers || {}),
            why_talent: this.why_talent,
            why_cobel: this.why_cobel,
            what_department: this.what_department
          }
        });
        this.$emit('next');
      }
    }
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
