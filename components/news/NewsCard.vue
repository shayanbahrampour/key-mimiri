<template>
  <div class="mb-10">
    <div v-if="isMobile" class="d-flex justify-center">
      <h4 class="bel f-40 text--darken-3 font-weight-regular" style="color: #59595b">More important</h4>
    </div>

    <div v-for="i in 4" :key="i" class="d-flex justify-center mb-8">
      <div v-if="!isMobile" class="d-flex rounded-lg" style="border: 1px solid #59595b; overflow: hidden">
        <div class="d-flex">
          <v-img src="/images/news/face.png" width="240" height="100%" />
        </div>
        <div class="d-flex flex-column py-3 ml-16 align-start">
          <h4 class="bel f-40 text--darken-3 font-weight-regular mb-auto" style="color: #59595b">
            Rise from the society return to the society
          </h4>
          <p class="f-18 mb-0 text--darken-3 mb-auto" style="max-width: 60%; color: #59595b">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to enhance their physical, psychological and social quality of life through high quality
            and innovative solutions.
          </p>
          <div class="d-flex justify-space-between mb-auto" style="width: 50%">
            <p class="f-12 mb-0" style="color: #59595b">Read time: 13min</p>
            <p class="f-12 mb-0" style="color: #59595b">Writed by: mehrab mohammadi</p>
            <p class="f-12 mb-0" style="color: #59595b">Published 3 month ago</p>
          </div>
        </div>
      </div>
      <div v-else class="d-flex mt-6">
        <v-card
          :class="['d-flex flex-column rounded-lg align-start']"
          height="550"
          width="80vw"
          elevation="0"
          style="border: 1px solid #66869a; overflow: hidden"
        >
          <v-img src="/images/news/face.png" max-height="250" />
          <div class="d-flex flex-column py-6 mx-6" style="height: 100%">
            <h4 class="bel f-28 text--darken-3 font-weight-regular mb-auto mt-4" style="color: #59595b">
              Rise from the society return to the society
            </h4>
            <p class="f-18 text--darken-3 mb-auto" style="color: #59595b">
              In Cobel Group, acknowledge importance of woman empowerment and inspir....
            </p>
            <div class="d-flex font-weight-light" style="width: 50%">
              <p class="f-12 mb-0" style="color: #59595b">Read time: 13min</p>
              <p class="f-12 mb-0" style="color: #59595b">Written by: mehrab mohammadi</p>
              <p class="f-12 mb-0" style="color: #59595b">Published 3 months ago</p>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
