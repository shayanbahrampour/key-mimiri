<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Skills
      </p>
      <v-row class="align-start justify-center">
        <v-col cols="12" md="4">
          <v-text-field class="mb-0 f-20" dense filled hide-details label="Foreign Languages" rounded></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field class="mb-0 f-20" dense filled hide-details label="Level" rounded></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-btn
            class="mt-1 ml-0"
            style="text-transform: unset !important; color: #0a91df"
            text
            @click="counter_lang++"
          >
            <p class="mb-0 f-16">Add new <span class="font-weight-bold">Skills</span></p>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-for="i in counter_lang" :key="i" class="align-start justify-start">
        <v-col cols="12" md="4">
          <v-text-field
            :class="!isMobile ? 'mb-0 f-20' : 'mb-0 f-20'"
            dense
            filled
            hide-details
            label="Foreign Languages"
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-text-field
            :class="!isMobile ? 'mb-0 f-20' : 'mb-0 f-20'"
            dense
            filled
            hide-details
            label="Level"
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-btn
            class="mt-1 ml-0"
            style="text-transform: unset !important; color: #fc2642"
            text
            @click="counter_lang--"
          >
            <p class="mb-0 f-16">Remove <span class="font-weight-bold">Skills</span></p>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="align-start justify-center">
        <v-col cols="12" md="4">
          <v-text-field class="mb-0 f-20" dense filled hide-details label="Computer Knowledge" rounded></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field class="mb-0 f-20" dense filled hide-details label="Level" rounded></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-btn class="mt-1 ml-0" style="text-transform: unset !important; color: #0a91df" text @click="counter_com++">
            <p class="mb-0 f-16">Add new <span class="font-weight-bold">Skills</span></p>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-for="j in counter_com" :key="j" class="align-start justify-start">
        <v-col cols="12" md="4">
          <v-text-field
            :class="!isMobile ? 'mb-0 f-20' : 'mb-0 f-20'"
            dense
            filled
            hide-details
            label="Computer Knowledge"
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            :class="!isMobile ? 'mb-0 f-20' : 'mb-0 f-20'"
            dense
            filled
            hide-details
            label="Level"
            rounded
          ></v-text-field>
        </v-col>
        <v-col :class="{ 'text-center': isMobile }" cols="12" md="4">
          <v-btn class="mt-1 ml-0" style="text-transform: unset !important; color: #fc2642" text @click="counter_com--">
            <p class="mb-0 f-16">Remove <span class="font-weight-bold">Skills</span></p>
          </v-btn>
        </v-col>
      </v-row>
      <v-textarea
        class="mb-8 mt-4 f-20"
        dense
        filled
        height="140"
        hide-details
        label="Soft skills…"
        rounded
      ></v-textarea>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: null,
      counter_lang: 0,
      counter_com: 0
    };
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
