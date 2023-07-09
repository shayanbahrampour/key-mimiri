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
        {{ $t('career.steps.education.title') }}
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-select
            v-model="model.degree[0]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :items="isRTL ? itemsRTL : items"
            :label="$t('career.steps.education.degree')"
            :rules="[rule.required]"
            append-icon="mdi-triangle-down 10"
            append-icon-size="16"
            dense
            filled
            hide-details
            menu-props="auto"
            rounded
          />
          <v-text-field
            v-model="model.country[0]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.country')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.grad_year[0]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.grad_year')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.major[0]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.major')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.state[0]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.state')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-2 ms-0"
            style="text-transform: unset !important; color: #0a91df"
            text
            @click="counter++"
          >
            <p :class="['mb-0 f-16', isRTL ? 'ravi' : undefined]">{{ $t('career.steps.education.add_new') }}</p>
          </v-btn>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.uni_name[0]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.uni')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.city[0]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.city')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn v-if="isMobile" style="text-transform: unset !important; color: #0a91df" text @click="counter++">
        <p :class="['f-16', !isMobile ? 'mb-0' : 'mb-8', isRTL ? 'ravi' : undefined]">
          {{ $t('career.steps.education.add_new') }}
        </p>
      </v-btn>
      <v-row v-for="i in counter" :key="i" class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-select
            v-model="model.degree[i]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :items="items"
            :label="$t('career.steps.education.degree')"
            :rules="[rule.required]"
            append-icon="mdi-triangle-down 10"
            append-icon-size="16"
            dense
            filled
            hide-details
            menu-props="auto"
            rounded
          />
          <v-text-field
            v-model="model.country[i]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.country')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.grad_year[i]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.grad_year')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.major[i]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.major')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.state[i]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.state')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-2 ms-0"
            style="text-transform: unset !important; color: #fc2642"
            text
            @click="counter--"
          >
            <p :class="['mb-0 f-16', isRTL ? 'ravi' : undefined]">{{ $t('career.steps.education.remove') }}</p>
          </v-btn>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field
            v-model="model.uni_name[i]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.uni')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-text-field
            v-model="model.city[i]"
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.education.city')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        v-if="isMobile && counter !== 0"
        style="text-transform: unset !important; color: #fc2642"
        text
        @click="counter--"
      >
        <p :class="['f-16', !isMobile ? 'mb-0' : 'mb-8', isRTL ? 'ravi' : undefined]">
          {{ $t('career.steps.education.remove') }}
        </p>
      </v-btn>
      <v-textarea
        v-model="education_description"
        :class="['mb-8 f-20', isRTL ? 'ravi text-end' : undefined]"
        :label="$t('career.steps.education.placeholder_one')"
        :rules="[rule.required]"
        dense
        filled
        height="140"
        hide-details
        rounded
      />
    </div>
    <CareerButtons :class="{ 'mt-10': !isRTL }" :step="step" @back="$emit('back')" @next="goNext()" />
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
      model: {
        degree: [],
        major: [],
        uni_name: [],
        country: [],
        state: [],
        city: [],
        grad_year: []
      },
      education_description: null,
      items: ['Graduate', 'Associate', 'Bachelor', 'Master', 'Doctorate', 'Professional'],
      itemsRTL: ['فارغ التحصیل', 'وابسته', 'لیسانس', 'فوق لیسانس', 'دکتری', 'پروفسوری']
    };
  },
  computed: {
    ...mapGetters({
      answers: 'career/getAnswers'
    })
  },
  fetch() {
    if (this.answers && this.answers.education_description) {
      this.education_description = this.answers.education_description;
    }
    if (this.answers && this.answers.education) {
      this.counter = this.answers.education.length - 1;
      for (let i = 0; i <= this.counter; i++) {
        this.model.degree[i] = this.answers.education[i].degree;
        this.model.major[i] = this.answers.education[i].major;
        this.model.uni_name[i] = this.answers.education[i].university_name;
        this.model.country[i] = this.answers.education[i].country;
        this.model.state[i] = this.answers.education[i].state;
        this.model.city[i] = this.answers.education[i].city;
        this.model.grad_year[i] = this.answers.education[i].graduation_year;
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
              degree: this.model.degree[i],
              major: this.model.major[i],
              university_name: this.model.uni_name[i],
              state: this.model.state[i],
              city: this.model.city[i],
              graduation_year: '2000-05-18',
              country: this.model.country[i]
            }
          ];
        }
        this.$store.commit('career/SET', {
          answers: {
            ...(this.answers || {}),
            education: data,
            education_description: this.education_description
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
