<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Experiences
      </p>
      <v-row class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8 f-20" dense filled hide-details label="Company name" rounded></v-text-field>
          <v-menu offset-y open-on-click>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                append-icon="mdi-triangle-down 10"
                append-icon-size="16"
                class="mb-6 f-20"
                dense
                filled
                hide-details
                label="Date (from)"
                readonly
                rounded
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8 f-20" dense filled hide-details label="Position" rounded></v-text-field>
          <v-menu offset-y open-on-click>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                append-icon="mdi-triangle-down 10"
                append-icon-size="16"
                class="mb-6 f-20"
                dense
                filled
                hide-details
                label="Date (to)"
                readonly
                rounded
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field
            :class="!isMobile ? 'mb-8 f-20' : 'mb-0 f-20'"
            dense
            filled
            hide-details
            label="Reason for leaving (the organization)"
            rounded
          ></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-2 ml-0 f-20"
            style="text-transform: unset !important; color: #0a91df"
            text
            @click="counter++"
          >
            <p class="mb-0 f-16">Add new experiences</p>
          </v-btn>
        </v-col>
        <v-btn
          v-if="isMobile"
          class="mt-2 ml-0 mb-10"
          style="text-transform: unset !important; color: #0a91df"
          text
          @click="counter++"
        >
          <p class="mb-0 f-16">Add new experiences</p>
        </v-btn>
      </v-row>
      <v-row v-for="i in counter" :key="i" class="align-start justify-center">
        <v-col :class="isMobile ? 'pb-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8" dense filled hide-details label="Company name" rounded></v-text-field>
          <v-menu offset-y open-on-click>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                append-icon="mdi-triangle-down 10"
                append-icon-size="16"
                class="mb-6 f-20"
                dense
                filled
                hide-details
                label="Date (from)"
                readonly
                rounded
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col :class="isMobile ? 'py-0' : undefined" cols="12" md="4">
          <v-text-field class="mb-8" dense filled hide-details label="Position" rounded></v-text-field>
          <v-menu offset-y open-on-click>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                append-icon="mdi-triangle-down 10"
                append-icon-size="16"
                class="mb-6 f-20"
                dense
                filled
                hide-details
                label="Date (to)"
                readonly
                rounded
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col :class="isMobile ? 'pt-0' : undefined" cols="12" md="4">
          <v-text-field
            :class="!isMobile ? 'mb-8 f-20' : 'mb-0 f-20'"
            dense
            filled
            hide-details
            label="Reason for leaving (the organization)"
            rounded
          ></v-text-field>
          <v-btn
            v-if="!isMobile"
            class="mt-2 ml-0"
            style="text-transform: unset !important; color: #fc2642"
            text
            @click="counter--"
          >
            <p class="mb-0 f-16">Remove experiences</p>
          </v-btn>
        </v-col>
        <v-btn
          v-if="isMobile"
          class="mt-2 ml-0 mb-10"
          style="text-transform: unset !important; color: #fc2642"
          text
          @click="counter--"
        >
          <p class="mb-0 f-16">Remove experiences</p>
        </v-btn>
      </v-row>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: null,
      counter: 0,
      items: [{ title: '1390' }, { title: '1391' }, { title: '1392' }]
    };
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
