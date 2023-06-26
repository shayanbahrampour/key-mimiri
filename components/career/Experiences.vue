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
        {{ $t('career.steps.experiences.title') }}
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.company_name[0]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.experiences.name')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-select
            v-model="model.start_date[0]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :items="items"
            :label="$t('career.steps.experiences.date_from')"
            :rules="[rule.required]"
            append-icon="mdi-triangle-down 10"
            append-icon-size="16"
            dense
            filled
            hide-details
            menu-props="auto"
            rounded
          ></v-select>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.position[0]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.experiences.position')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-select
            v-model="model.end_date[0]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :items="items"
            :label="$t('career.steps.experiences.date_to')"
            :rules="[rule.required]"
            append-icon="mdi-triangle-down 10"
            append-icon-size="16"
            dense
            filled
            hide-details
            menu-props="auto"
            rounded
          ></v-select>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.reason_for_leaving[0]"
            :class="(!isMobile ? 'mb-8 f-20' : 'mb-0 f-20', isRTL ? 'ravi' : undefined)"
            :label="$t('career.steps.experiences.leaving')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-10 ms-0"
            style="text-transform: unset !important; color: #0a91df"
            text
            @click="counter++"
          >
            <p :class="['mb-0 f-16 align-center', isRTL ? 'ravi' : undefined]">
              {{ $t('career.steps.experiences.add_new') }}
            </p>
          </v-btn>
        </v-col>
        <v-btn
          v-if="isMobile"
          class="mt-2 ms-0 mb-10"
          style="text-transform: unset !important; color: #0a91df"
          text
          @click="counter++"
        >
          <p :class="['mb-0 f-16', isRTL ? 'ravi' : undefined]">{{ $t('career.steps.experiences.add_new') }}</p>
        </v-btn>
      </v-row>
      <v-row v-for="i in counter" :key="i" class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.company_name[i]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.experiences.name')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-select
            v-model="model.start_date[i]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :items="items"
            :label="$t('career.steps.experiences.date_from')"
            :rules="[rule.required]"
            append-icon="mdi-triangle-down 10"
            append-icon-size="16"
            dense
            filled
            hide-details
            menu-props="auto"
            rounded
          ></v-select>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.position[i]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.experiences.position')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-select
            v-model="model.end_date[i]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :rules="[rule.required]"
            :items="items"
            :label="$t('career.steps.experiences.date_to')"
            append-icon="mdi-triangle-down 10"
            append-icon-size="16"
            dense
            filled
            hide-details
            menu-props="auto"
            rounded
          ></v-select>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.reason_for_leaving[i]"
            :class="(!isMobile ? 'mb-8 f-20' : 'mb-0 f-20', isRTL ? 'ravi' : undefined)"
            :label="$t('career.steps.experiences.leaving')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-10 ms-0"
            style="text-transform: unset !important; color: #fc2642"
            text
            @click="counter--"
          >
            <p :class="['mb-0 f-16 align-center', isRTL ? 'ravi' : undefined]">
              {{ $t('career.steps.experiences.remove') }}
            </p>
          </v-btn>
        </v-col>
        <v-btn
          v-if="isMobile"
          class="mt-2 ms-0 mb-10"
          style="text-transform: unset !important; color: #fc2642"
          text
          @click="counter--"
        >
          <p :class="['mb-0 f-16', isRTL ? 'ravi' : undefined]">{{ $t('career.steps.experiences.remove') }}</p>
        </v-btn>
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
      counter: 0,
      items: ['1390', '1391', '1392'],
      model: {
        company_name: [],
        end_date: [],
        start_date: [],
        position: [],
        reason_for_leaving: []
      }
    };
  },
  computed: {
    ...mapGetters({
      answers: 'career/getAnswers'
    })
  },
  fetch() {
    if (this.answers && this.answers.experiences) {
      this.counter = this.answers.experiences.length - 1;
      for (let i = 0; i <= this.counter; i++) {
        this.model.company_name[i] = this.answers.experiences[i].company_name;
        this.model.end_date[i] = '1392';
        this.model.start_date[i] = '1390';
        this.model.position[i] = this.answers.experiences[i].position;
        this.model.reason_for_leaving[i] = this.answers.experiences[i].reason_for_leaving;
      }
    }
  },
  methods: {
    goNext() {
      if (!this.valid) {
        this.$toast.clear();
        this.$toast.error('All Fields Required');
        return;
      } else {
        let data = [];
        for (let i = 0; i <= this.counter; i++) {
          data = [
            ...data,
            {
              company_name: this.model.company_name[i],
              position: this.model.position[i],
              reason_for_leaving: this.model.reason_for_leaving[i],
              start_date: '2023-08-12',
              end_date: '2023-08-12'
            }
          ];
        }
        this.$store.commit('career/SET', {
          answers: {
            ...(this.answers || {}),
            experiences: data
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
