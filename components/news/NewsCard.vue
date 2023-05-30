<template>
  <div class="mb-10">
    <div v-if="isMobile" class="d-flex justify-center">
      <h4 class="bel f-36 text--darken-3 font-weight-regular" style="color: #59595b">{{ title }}</h4>
    </div>

    <div v-for="i in 4" :key="i" class="d-flex justify-center mb-8">
      <v-card
        v-if="!isMobile"
        :to="localePath('/impact/1')"
        class="d-flex rounded-xl overflow-hidden mr-4 custom-news-card"
        elevation="0"
        style="border: 2px solid #59595b; overflow: hidden"
      >
        <div class="d-flex">
          <v-img height="100%" src="/images/news/face.png" width="280" />
        </div>
        <div class="d-flex flex-column py-6 ml-16 align-start">
          <h4 class="bel f-40 text--darken-3 font-weight-regular mb-auto cobelgrey--text custom-card-title">
            Rise from the society return to the society
          </h4>
          <p
            class="f-18 text--darken-3 mb-auto font-weight-light"
            style="max-width: 90%; color: #59595b; line-height: 26px"
          >
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to enhance their physical, psychological and social quality of life through high quality
            and innovative solutions.
          </p>
          <div class="d-flex justify-space-between mt-4" style="width: 60%">
            <p class="f-16 mb-0" style="color: #59595b">Read time: 13min</p>
            <p class="f-16 mb-0" style="color: #59595b">Writed by: mehrab mohammadi</p>
            <p class="f-16 mb-0" style="color: #59595b">Published 3 month ago</p>
          </div>
        </div>
      </v-card>
      <v-card v-else :to="localePath('/impact/1')" class="d-flex mt-6 overflow-hidden" elevation="0">
        <v-card
          :class="['d-flex flex-column rounded-lg align-start mx-6']"
          elevation="0"
          height="550"
          style="border: 2px solid slategrey; overflow: hidden"
        >
          <v-img max-height="250" src="/images/news/face.png" />
          <div class="d-flex flex-column py-2 mx-6 flex">
            <h4 class="bel f-28 text--darken-3 font-weight-regular mb-auto mt-4" style="color: #59595b">
              Rise from the society return to the society
            </h4>
            <p class="f-20 text--darken-3 mb-auto font-weight-light" style="color: #59595b">
              In Cobel Group, acknowledge importance of woman empowerment and inspir....
            </p>
            <div class="d-flex flex-column font-weight-light mb-auto" style="width: 90%">
              <p class="f-14 mb-2 d-flex align-center" style="color: #59595b">
                <v-icon class="mr-1" size="12">mdi-clock-outline</v-icon>
                13min
              </p>
              <p class="f-14 mb-2 d-flex align-center" style="color: #59595b">
                <v-icon class="mr-1" size="12">mdi-pencil-outline</v-icon>
                mehrab mohammadi
              </p>
              <p class="f-14 mb-0 d-flex align-center" style="color: #59595b">
                <v-icon class="mr-1" size="12">mdi-bullhorn-variant-outline</v-icon>
                3 months ago
              </p>
            </div>
          </div>
        </v-card>
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
.custom-news-card {
  &:hover {
    border: 2px solid slategrey !important;

    .custom-card-title {
      color: slategrey !important;
    }
  }
}
</style>
