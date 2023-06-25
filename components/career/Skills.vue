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
        {{ $t('career.steps.skills.title') }}
      </p>
      <v-row class="align-start justify-center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.title_lang[0]"
            :class="['mb-0 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.skills.foreign')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.level_lang[0]"
            :class="['mb-0 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.skills.level')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-btn
            class="mt-1 ms-0"
            style="text-transform: unset !important; color: #0a91df"
            text
            @click="counter_lang++"
          >
            <p :class="['mb-0 f-16', isRTL ? 'ravi' : undefined]">{{ $t('career.steps.skills.add_new') }}</p>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-for="i in counter_lang" :key="i" class="align-start justify-start">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.title_lang[i]"
            :class="(!isMobile ? 'mb-0 f-20' : 'mb-0 f-20', isRTL ? 'ravi' : undefined)"
            :label="$t('career.steps.skills.foreign')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-text-field
            v-model="model.level_lang[i]"
            :class="(!isMobile ? 'mb-0 f-20' : 'mb-0 f-20', isRTL ? 'ravi' : undefined)"
            :label="$t('career.steps.skills.level')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-btn
            class="mt-1 ms-0"
            style="text-transform: unset !important; color: #fc2642"
            text
            @click="counter_lang--"
          >
            <p :class="['mb-0 f-16', isRTL ? 'ravi' : undefined]">{{ $t('career.steps.skills.remove') }}</p>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="align-start justify-center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.title_com[0]"
            :class="['mb-0 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.skills.computer')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.level_com[0]"
            :class="['mb-0 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.skills.level')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-btn class="mt-1 ms-0" style="text-transform: unset !important; color: #0a91df" text @click="counter_com++">
            <p :class="['mb-0 f-16', isRTL ? 'ravi' : undefined]">{{ $t('career.steps.skills.add_new') }}</p>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-for="j in counter_com" :key="j" class="align-start justify-start">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.title_com[j]"
            :class="(!isMobile ? 'mb-0 f-20' : 'mb-0 f-20', isRTL ? 'ravi' : undefined)"
            :label="$t('career.steps.skills.computer')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.level_com[j]"
            :class="(!isMobile ? 'mb-0 f-20' : 'mb-0 f-20', isRTL ? 'ravi' : undefined)"
            :label="$t('career.steps.skills.level')"
            :rules="[rule.required]"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-btn class="mt-1 ms-0" style="text-transform: unset !important; color: #fc2642" text @click="counter_com--">
            <p :class="['mb-0 f-16', isRTL ? 'ravi' : undefined]">{{ $t('career.steps.skills.remove') }}</p>
          </v-btn>
        </v-col>
      </v-row>
      <v-textarea
        v-model="soft_skills"
        :class="['mb-8 mt-4 f-20', isRTL ? 'ravi' : undefined]"
        :label="$t('career.steps.skills.placeholder_one')"
        dense
        filled
        height="140"
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
      soft_skills: null,
      counter_lang: 0,
      counter_com: 0,
      model: {
        title_lang: [],
        level_lang: [],
        title_com: [],
        level_com: []
      }
    };
  },
  computed: {
    ...mapGetters({
      answers: 'career/getAnswers'
    })
  },
  fetch() {
    if (this.answers && this.answers.soft_skills) {
      this.soft_skills = this.answers.soft_skills;
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
        for (let i = 0; i <= this.counter_lang; i++) {
          data = [
            ...data,
            {
              title: this.model.title_lang[i],
              level: this.model.level_lang[i],
              type: 'foreign_language'
            }
          ];
        }
        for (let i = 0; i <= this.counter_com; i++) {
          data = [
            ...data,
            {
              title: this.model.title_com[i],
              level: this.model.level_com[i],
              type: 'computer_knowledge'
            }
          ];
        }
        console.log(data);
        this.$store.commit('career/SET', {
          answers: {
            ...(this.answers || {}),
            skills: data,
            soft_skills: this.soft_skills
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
