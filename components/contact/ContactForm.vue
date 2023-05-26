<template>
  <v-form v-model="flag.isValid" class="mt-4 mb-16">
    <v-row class="align-start justify-center">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="model.full_name"
          :class="['mb-4']"
          dense
          filled
          hide-details
          label="Full Name"
          rounded
          :rules="[rule.required]"
        ></v-text-field>
        <v-text-field
          v-model="model.email"
          :class="['mb-4']"
          dense
          filled
          hide-details
          label="Email Address"
          rounded
          :rules="[rule.required, rule.email]"
        ></v-text-field>
        <v-text-field
          v-model="model.mobile"
          :class="['mb-4']"
          dense
          filled
          hide-details
          label="Mobile"
          rounded
          :rules="[rule.required, rule.mobile]"
        ></v-text-field>
        <v-text-field
          v-model="model.topic"
          :class="!isMobile ? 'mb-4' : 'mb-0'"
          dense
          filled
          hide-details
          label="Topic"
          rounded
          :rules="[rule.required]"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea
          v-model="model.description"
          :class="['mb-8']"
          dense
          filled
          height="260"
          hide-details
          label="Descriptions"
          rounded
          :rules="[rule.required]"
        ></v-textarea>
      </v-col>
    </v-row>
    <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined]">
      <v-btn
        :class="[
          'rounded-xl white--text d-flex justify-center',
          isMobile ? 'f-20 font-weight-light' : 'mr-4 f-14 font-weight-bold'
        ]"
        color="#4C6D80"
        elevation="0"
        height="36"
        min-width="250"
        :width="isMobile ? '100' : undefined"
        :disabled="flag.loading"
        :loading="flag.loading"
        @click="onSubmit()"
      >
        Send Form
      </v-btn>
      <v-btn
        :class="[
          'rounded-xl d-flex justify-center ',
          isMobile ? 'mt-4 f-20 font-weight-light' : 'f-14 font-weight-bold'
        ]"
        color="#4C6D80"
        height="36"
        min-width="250"
        :width="isMobile ? '100' : undefined"
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
