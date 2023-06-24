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
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.experiences.name')"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-select
            v-model="model.date_from[0]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :items="items"
            :label="$t('career.steps.experiences.date_from')"
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
            :class="['mb-8 f-20', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.experiences.position')"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-select
            v-model="model.date_to[0]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
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
            :class="(!isMobile ? 'mb-8 f-20' : 'mb-0 f-20', isRTL ? 'ravi' : undefined)"
            :label="$t('career.steps.experiences.leaving')"
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
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.experiences.name')"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-select
            v-model="model.date_from[i]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :items="items"
            :label="$t('career.steps.experiences.date_from')"
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
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
            :label="$t('career.steps.experiences.position')"
            dense
            filled
            hide-details
            rounded
          ></v-text-field>
          <v-select
            v-model="model.date_to[i]"
            :class="['mb-8', isRTL ? 'ravi' : undefined]"
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
            :class="(!isMobile ? 'mb-8 f-20' : 'mb-0 f-20', isRTL ? 'ravi' : undefined)"
            :label="$t('career.steps.experiences.leaving')"
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
    <CareerButtons :class="{ 'mt-10': !isRTL }" @next="$emit('next')" @back="$emit('back')" :step="step" />
  </v-form>
</template>

<script>
import CareerButtons from './CareerButtons';
export default {
  props: {
    step: {
      type: Number,
      default: undefined
    }
  },
  components: { CareerButtons },
  data() {
    return {
      valid: null,
      counter: 0,
      items: ['1390', '1391', '1392'],
      model: {
        date_to: [],
        date_from: []
      }
    };
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
