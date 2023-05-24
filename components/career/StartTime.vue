<template>
  <v-form v-model="valid" :class="['mt-4', !isMobile ? 'mx-4 mb-16' : undefined]" style="width: 100%">
    <div class="d-flex flex-column">
      <p
        :class="['bel mb-4 text--darken-3 font-weight-regular', isMobile ? 'text-center f-36' : 'f-50 mt-10']"
        style="color: #59595b"
      >
        Preferred Start Time
      </p>
      <div class="d-flex flex-column">
        <v-menu offset-y open-on-click>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-bind="attrs"
              v-on="on"
              class="mb-6"
              dense
              filled
              hide-details
              readonly
              append-icon="mdi-triangle-down 10"
              append-icon-size="16"
              label="Will be available for work"
              rounded
              style="max-width: 400px"
            ></v-text-field>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-radio-group v-model="radioGroup" class="mt-6 pt-0">
          <v-radio
            color="#4C6D80"
            label="Hereby I conform that all the information provided are correct and valid."
          ></v-radio>
        </v-radio-group>
        <div class="d-flex mt-6 align-center">
          <v-btn
            :class="isMobile ? 'mb-16' : undefined"
            color="#00A59B"
            small
            max-width="20"
            height="50"
            outlined
            style="border-radius: 30%"
          >
            <v-img max-width="20" src="/images/career/pdf.png" />
          </v-btn>
          <v-btn
            :class="['mt-0 ml-0', isMobile ? 'mb-16' : undefined]"
            text
            style="text-transform: unset !important; color: #00a59b"
          >
            <p class="mb-0 f-16">Print your application</p>
          </v-btn>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: null,
      items: [{ title: 'Option 1' }, { title: 'Option 2' }, { title: 'Option 3' }]
    };
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
.mdi-triangle-down::before {
  font-size: 16px;
  color: slategrey;
}
</style>
