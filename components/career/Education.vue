<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Education
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-menu offset-y open-on-click>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="model.degree[0]"
                append-icon="mdi-triangle-down 10"
                append-icon-size="16"
                class="mb-8 f-20"
                dense
                filled
                hide-details
                label="Degree"
                readonly
                rounded
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" @click="model.degree[0] = item.title">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-text-field class="mb-8 f-20" dense filled hide-details label="Country" rounded></v-text-field>
          <v-text-field class="mb-8 f-20" dense filled hide-details label="Graduation Year" rounded></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8 f-20" dense filled hide-details label="Major" rounded></v-text-field>
          <v-text-field class="mb-8 f-20" dense filled hide-details label="State" rounded></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-2 ms-0"
            style="text-transform: unset !important; color: #0a91df"
            text
            @click="counter++"
          >
            <p class="mb-0 f-16">Add new education</p>
          </v-btn>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8 f-20" dense filled hide-details label="University name" rounded></v-text-field>
          <v-text-field class="mb-8 f-20" dense filled hide-details label="City" rounded></v-text-field>
        </v-col>
      </v-row>
      <v-btn v-if="isMobile" style="text-transform: unset !important; color: #0a91df" text @click="counter++">
        <p :class="['f-16', !isMobile ? 'mb-0' : 'mb-8']">Add new education</p>
      </v-btn>
      <v-row v-for="i in counter" :key="i" class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-menu offset-y open-on-click>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="model.degree[i]"
                append-icon="mdi-triangle-down 10"
                append-icon-size="16"
                class="mb-8 f-20"
                dense
                filled
                hide-details
                label="Degree"
                readonly
                rounded
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" @click="model.degree[i] = item.title">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-text-field class="mb-8 f-20" dense filled hide-details label="Country" rounded></v-text-field>
          <v-text-field class="mb-8 f-20" dense filled hide-details label="Graduation Year" rounded></v-text-field>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8 f-20" dense filled hide-details label="Major" rounded></v-text-field>
          <v-text-field class="mb-8 f-20" dense filled hide-details label="State" rounded></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-2 ms-0"
            style="text-transform: unset !important; color: #fc2642"
            text
            @click="counter--"
          >
            <p class="mb-0 f-16">Remove education</p>
          </v-btn>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8 f-20" dense filled hide-details label="University name" rounded></v-text-field>
          <v-text-field class="mb-8 f-20" dense filled hide-details label="City" rounded></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        v-if="isMobile && counter !== 0"
        style="text-transform: unset !important; color: #fc2642"
        text
        @click="counter--"
      >
        <p :class="['f-16', !isMobile ? 'mb-0' : 'mb-8']">Remove education</p>
      </v-btn>
      <v-textarea
        class="mb-8 f-20"
        dense
        filled
        height="140"
        hide-details
        label="Other training, certifications or licenses held..."
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
      counter: 0,
      model: {
        degree: []
      },
      items: [
        { title: 'Graduate' },
        { title: 'Associate' },
        { title: 'Bachelor' },
        { title: 'Master' },
        { title: 'Doctorate' },
        { title: 'Professional' }
      ]
    };
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
