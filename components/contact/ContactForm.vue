<template>
  <v-form v-model="flag.isValid" class="mt-6 mb-16">
    <v-row class="align-start justify-center">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="model.full_name"
          :label="$t('contact.fields.full_name')"
          :rules="[rule.required]"
          class="mb-4"
          dense
          filled
          hide-details
          rounded
        ></v-text-field>
        <v-text-field
          v-model="model.email"
          :label="$t('contact.fields.email')"
          :rules="[rule.required, rule.email]"
          class="mb-4"
          dense
          filled
          hide-details
          rounded
        ></v-text-field>
        <v-text-field
          v-model="model.mobile"
          :label="$t('contact.fields.mobile')"
          :rules="[rule.required, rule.mobile]"
          class="mb-4"
          dense
          filled
          hide-details
          rounded
        ></v-text-field>
        <v-text-field
          v-model="model.topic"
          :class="!isMobile ? 'mb-4' : 'mb-0'"
          :label="$t('contact.fields.topic')"
          :rules="[rule.required]"
          dense
          filled
          hide-details
          rounded
        ></v-text-field>
      </v-col>
      <v-col :class="{ 'pt-2': isMobile }" cols="12" md="6">
        <v-textarea
          v-model="model.description"
          :class="['mb-4', { 'mb-10': isMobile }]"
          :label="$t('contact.fields.description')"
          :rules="[rule.required]"
          dense
          filled
          height="260"
          hide-details
          rounded
        ></v-textarea>
      </v-col>
    </v-row>
    <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined]">
      <v-btn
        :class="[
          'rounded-xl white--text d-flex justify-center',
          isMobile ? 'f-20 font-weight-light' : 'mr-4 f-14 font-weight-bold'
        ]"
        :disabled="flag.loading"
        :loading="flag.loading"
        :width="isMobile ? '100' : undefined"
        color="#4C6D80"
        elevation="0"
        height="36"
        min-width="250"
        @click="onSubmit()"
      >
        Send Form
      </v-btn>
      <v-btn
        :class="[
          'rounded-xl d-flex justify-center ',
          isMobile ? 'mt-4 f-20 font-weight-light' : 'f-14 font-weight-bold'
        ]"
        :width="isMobile ? '100' : undefined"
        color="#4C6D80"
        height="36"
        min-width="250"
        outlined
        @click="clearData()"
      >
        Clear
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import mixinRules from '~/mixins/mixin.rules';

export default {
  mixins: [mixinRules],
  data() {
    return {
      flag: {
        isValid: false,
        loading: false
      },
      model: {
        full_name: null,
        email: null,
        mobile: null,
        topic: null,
        description: null
      }
    };
  },
  methods: {
    async onSubmit() {
      if (!this.flag.isValid) {
        this.$toast.clear();
        this.$toast.error('لطفا همه فیلدهای قرمز را تکمیل کنید');
        return;
      }
      try {
        this.flag.loading = true;
        const formData = new FormData();
        for (let item in this.model) formData.append(item, this.model[item] || '');

        await this.$store.dispatch('contact/sendContact', { body: formData });
        this.$toast.success('یادداشت با موفقیت ذخیره شد!');
        this.$emit('submit');
      } catch (e) {
        this.errorHandler(e);
      }

      this.flag.loading = false;
    },
    clearData() {
      for (let item in this.model) this.model[item] = null;
    }
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
