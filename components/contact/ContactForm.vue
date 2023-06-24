<template>
  <v-form v-model="flag.isValid" class="mt-6 mb-16">
    <v-row :class="isRTL && 'ltr'">
      <v-col cols="12" md="6">
        <v-select
          v-model="model.category"
          :class="['mb-4 f-20 management-select', { 'rtl ravi': isRTL }]"
          :items="isRTL ? itemsRTL : items"
          :rules="[rule.required]"
          :label="$t('contact.fields.management')"
          append-icon="mdi-triangle-down 10 slategrey--text"
          dense
          filled
          hide-details
          menu-props="auto"
          rounded
        ></v-select>
        <v-text-field
          v-model="model.topic"
          :class="['mb-4 f-20', { ' ravi': isRTL }]"
          :label="$t('contact.fields.topic')"
          :rules="[rule.required]"
          dense
          filled
          hide-details
          rounded
        ></v-text-field>
        <v-text-field
          v-model="model.full_name"
          :class="['mb-4 f-20', { ' ravi': isRTL }]"
          :label="$t('contact.fields.full_name')"
          :rules="[rule.required]"
          dense
          filled
          hide-details
          rounded
        ></v-text-field>
        <v-text-field
          v-model="model.email"
          :class="[!isMobile ? 'mb-4 f-20' : 'mb-0 f-20', { ' ravi': isRTL }]"
          :label="$t('contact.fields.email')"
          :rules="[rule.required, rule.email]"
          dense
          filled
          hide-details
          rounded
        ></v-text-field>
      </v-col>
      <v-col :class="{ 'pt-2': isMobile }" cols="12" md="6">
        <v-textarea
          v-model="model.description"
          :class="['mb-4 f-20', { 'mb-10': isMobile }, { ' ravi': isRTL }]"
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
    <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined, isRTL && 'ltr']">
      <v-btn
        :class="[
          'rounded-xl white--text d-flex justify-center',
          isMobile ? 'f-20 font-weight-light' : 'mr-4 f-14 font-weight-bold',
          isRTL ? 'ravi' : undefined
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
        {{ $t('contact.button.send') }}
      </v-btn>
      <v-btn
        :class="[
          'rounded-xl d-flex justify-center ',
          isMobile ? 'mt-4 f-20 font-weight-light' : 'f-14 font-weight-bold',
          isRTL ? 'ravi' : undefined
        ]"
        :width="isMobile ? '100' : undefined"
        color="#4C6D80"
        height="36"
        min-width="250"
        outlined
        @click="clearData()"
      >
        {{ $t('contact.button.clear') }}
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
        category: null,
        topic: null,
        description: null
      },
      items: ['management', 'other'],
      itemsRTL: ['مدیریت', 'بقیه']
    };
  },
  methods: {
    async onSubmit() {
      if (!this.flag.isValid) {
        this.$toast.clear();
        this.$toast.error('All Fields Required');
        return;
      }
      try {
        this.flag.loading = true;
        const formData = new FormData();
        for (let item in this.model) formData.append(item, this.model[item] || '');

        await this.$store.dispatch('contact/sendContact', { body: formData });
        this.$toast.success('Done!');
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
