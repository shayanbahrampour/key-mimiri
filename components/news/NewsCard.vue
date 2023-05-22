<template>
  <div class="mb-10">
    <div v-if="isMobile" class="d-flex justify-center">
      <h4 class="bel f-36 text--darken-3 font-weight-regular" style="color: #59595b">{{ title }}</h4>
    </div>

    <div v-for="i in 4" :key="i" class="d-flex justify-center mb-8">
      <v-card
        v-if="!isMobile"
        class="d-flex rounded-lg overflow-hidden mr-4"
        elevation="0"
        style="border: 2px solid #66869a; overflow: hidden"
        to="/education/1234"
      >
        <div class="d-flex">
          <v-img height="100%" src="/images/news/face.png" width="280" />
        </div>
        <div class="d-flex flex-column py-6 ml-16 align-start">
          <h4 class="bel f-40 text--darken-3 font-weight-regular mb-auto" style="color: #59595b">
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
          <div class="d-flex justify-space-between mt-4" style="width: 50%">
            <p class="f-12 mb-0" style="color: #59595b">Read time: 13min</p>
            <p class="f-12 mb-0" style="color: #59595b">Writed by: mehrab mohammadi</p>
            <p class="f-12 mb-0" style="color: #59595b">Published 3 month ago</p>
          </div>
        </div>
      </v-card>
      <v-card v-else class="d-flex mt-6 overflow-hidden" elevation="0" to="/education/1234">
        <v-card
          :class="['d-flex flex-column rounded-lg align-start mx-6']"
          elevation="0"
          height="550"
          style="border: 2px solid #66869a; overflow: hidden"
        >
          <v-img max-height="250" src="/images/news/face.png" />
          <div class="d-flex flex-column py-2 mx-6 flex">
            <h4 class="bel f-28 text--darken-3 font-weight-regular mb-auto mt-4" style="color: #59595b">
              Rise from the society return to the society
            </h4>
            <p class="f-20 text--darken-3 mb-auto font-weight-light" style="color: #59595b">
              In Cobel Group, acknowledge importance of woman empowerment and inspir....
            </p>
            <div class="d-flex flex-column font-weight-light mb-auto" style="width: 80%">
              <p class="f-12 mb-2" style="color: #59595b">Read time: 13min</p>
              <p class="f-12 mb-2" style="color: #59595b">Written by: mehrab mohammadi</p>
              <p class="f-12 mb-0" style="color: #59595b">Published 3 months ago</p>
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

<style lang="scss"></style>
