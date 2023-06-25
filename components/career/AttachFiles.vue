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
        {{ $t('career.steps.file.title') }}
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="6">
          <v-file-input
            v-model="model.coverLetter"
            :append-icon="model.coverLetter ? false : 'mdi-file-upload slategrey--text'"
            :class="['mb-9 attach-file', isRTL ? 'ravi text-end' : undefined]"
            :label="$t('career.steps.file.letter')"
            :rules="[rule.required]"
            :prepend-icon="false"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            rounded
          ></v-file-input>
          <v-file-input
            v-model="model.address"
            :append-icon="model.address ? false : 'mdi-file-upload slategrey--text'"
            :class="['mb-9 attach-file', isRTL ? 'ravi text-end' : undefined]"
            :rules="[rule.required]"
            :dense="!isMobile || !isRTL"
            :height="isMobile && isRTL ? '60' : undefined"
            :label="$t('career.steps.file.address')"
            :prepend-icon="false"
            clear-icon="mdi-delete black--text"
            filled
            hide-details
            rounded
          ></v-file-input>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="6">
          <v-file-input
            v-model="model.vitae"
            :append-icon="model.vitae ? false : 'mdi-file-upload slategrey--text'"
            :class="['mb-9 attach-file', isRTL ? 'ravi text-end' : undefined]"
            :label="$t('career.steps.file.vitae')"
            :rules="[rule.required]"
            :prepend-icon="false"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            rounded
          ></v-file-input>
          <v-file-input
            v-model="model.material"
            :append-icon="model.material ? false : 'mdi-file-upload slategrey--text'"
            :class="['mb-9 attach-file', isRTL ? 'ravi text-end' : undefined]"
            :label="$t('career.steps.file.material')"
            :prepend-icon="false"
            clear-icon="mdi-delete black--text"
            dense
            filled
            hide-details
            rounded
          ></v-file-input>
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
        coverLetter: null,
        material: null,
        address: null,
        vitae: null
      }
    };
  },
  computed: {
    ...mapGetters({
      answers: 'career/getAnswers'
    })
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
            cover_letter_file: this.model.coverLetter,
            cv_file: this.model.vitae,
            letter_addressing_file: this.model.address,
            supplementary_material_file: this.model.material
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

.attach-file .v-file-input__text {
  cursor: pointer !important;
}
</style>
