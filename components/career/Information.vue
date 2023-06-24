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
        {{ $t('career.steps.information.title') }}
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="6">
          <v-text-field
            v-model="model.first_name"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.information.first_name')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.id_number"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.information.id')"
            :rules="[rule.required, rule.number]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.email"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.information.email')"
            :rules="[rule.required, rule.email]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="6">
          <v-text-field
            v-model="model.last_name"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.information.last_name')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.mobile"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.information.mobile')"
            :rules="[rule.required, rule.mobile]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.address"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.information.address')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
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
      model: {
        first_name: null,
        last_name: null,
        id_number: null,
        mobile: null,
        email: null,
        address: null
      }
    };
  },
  computed: {
    ...mapGetters({
      answers: 'career/getAnswers'
    })
  },
  created() {
    if (this.answers && this.answers.first_name) this.model.first_name = this.answers.first_name;
    if (this.answers && this.answers.last_name) this.model.last_name = this.answers.last_name;
    if (this.answers && this.answers.email) this.model.email = this.answers.email;
    if (this.answers && this.answers.address) this.model.address = this.answers.address;
    if (this.answers && this.answers.phone_number) this.model.mobile = this.answers.phone_number;
    if (this.answers && this.answers.id_number) this.model.id_number = this.answers.id_number;
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
            first_name: this.model.first_name,
            last_name: this.model.last_name,
            email: this.model.email,
            address: this.model.address,
            phone_number: this.model.mobile,
            id_number: this.model.id_number
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
