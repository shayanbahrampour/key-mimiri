<template>
  <div class="mb-10">
    <div v-if="isMobile" class="d-flex justify-center">
      <h4 class="bel f-36 text--darken-3 font-weight-regular" style="color: #59595b">{{ title }}</h4>
    </div>

    <div v-for="i in 4" :key="i" class="d-flex justify-center mb-4">
      <v-card
        :class="['d-flex rounded-xl overflow-hidden align-center', !isMobile ? 'custom-story-card mr-4' : undefined]"
        :to="localePath('/storytellers/1234')"
        elevation="0"
        style="border: 2px solid white"
      >
        <div
          :class="['d-flex py-6 px-2', isMobile ? 'flex-column align-center' : 'justify-space-between align-center']"
        >
          <div :class="['d-flex', isMobile ? 'flex-column align-center justify-center' : undefined]">
            <v-img
              :class="['mr-4', !isMobile ? 'elevation-3' : undefined]"
              :height="isMobile ? '140' : '155'"
              :max-width="isMobile ? '140' : '155'"
              src="/images/face/bahador.png"
              style="border-radius: 50%"
            />
            <div class="d-flex flex-column justify-center ml-4">
              <p
                :class="[
                  'bel mb-0 text--darken-3',
                  isMobile ? 'text-center mt-4 f-32 font-weight-regular' : 'f-42 font-weight-regular story-name'
                ]"
                style="color: #59595b"
              >
                Bahador Nayebi
              </p>
              <p
                :class="['bel  mb-0 text--darken-3', isMobile ? 'mt-2 f-24' : 'f-20 font-weight-light']"
                style="color: #939393"
              >
                Project Manager at Cobel® Group
              </p>
              <v-divider v-if="isMobile" class="my-4" style="background-color: #00a59b"></v-divider>
            </div>
          </div>
          <v-divider class="mx-4" color="#00a59b" vertical></v-divider>
          <p v-if="!isMobile" class="f-22 mb-0 text--darken-3 justify-center" style="max-width: 58%; color: #939393">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to enhance their physical, psychological and social quality of life through high quality
            and innovative solutions.
          </p>
          <p v-else class="f-20 text-center mx-6 mb-0 text--darken-3" style="color: #939393">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to enhance their physical, psychological and social quality of life through high quality
            and innovative solutions.
          </p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
.custom-story-card {
  &:hover {
    .story-name {
      color: slategrey !important;
    }
  }
}
</style>
