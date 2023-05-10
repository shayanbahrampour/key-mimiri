<template>
  <div class="d-flex flex-column" style="background-color: #66869a">
    <div
      :class="[
        'd-flex px-16 mt-16 align-center justify-space-between',
        isMobile ? 'flex-column align-center' : undefined
      ]"
    >
      <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined]">
        <v-img
          src="/images/face/masoume.png"
          :max-width="isMobile ? '120' : '90'"
          :height="isMobile ? '120' : '90'"
          style="border-radius: 50%"
        />
        <div class="d-flex flex-column justify-center ml-4">
          <p
            :class="[
              'bel f-26 white--text mb-0 text--darken-3 font-weight-bold',
              isMobile ? 'text-center mt-6' : undefined
            ]"
          >
            Masoumeh Seyedi
          </p>
          <p
            :class="[
              'f-20 white--text mb-0 text--darken-3',
              isMobile ? 'text-center mt-4 font-weight-light' : undefined
            ]"
          >
            Project Manager at Cobel® Group
          </p>
        </div>
      </div>
      <div :class="[isMobile ? 'mt-6' : undefined]">
        <v-btn outlined color="white" height="50" min-width="50" style="border-radius: 30%">
          <v-img src="/images/icons/linkedin.png" max-width="20" height="20" />
        </v-btn>
        <v-btn outlined class="ml-4" color="white" height="50" min-width="50" style="border-radius: 30%">
          <v-img src="/images/icons/whatsapp.png" max-width="20" height="20" />
        </v-btn>
        <v-btn outlined class="ml-4" color="white" height="50" min-width="50" style="border-radius: 30%">
          <v-img src="/images/icons/telegram.png" max-width="20" height="20" />
        </v-btn>
      </div>
    </div>
    <p :class="['mt-16 f-20 mx-16 white--text text--darken-3 font-weight-light', isMobile ? 'text-center' : undefined]">
      WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
      consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
      will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
      have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3). Studies conducted by
      Cobel Group medico-marketing teams indicated
    </p>
    <v-img class="mt-16" contain src="/images/video_content/physical.png" />
    <div class="h-full white px-16">
      <h4 class="bel mt-16 f-40 text-center text--darken-3 font-weight-regular" style="color: #00a59b">
        32 Million people in need of 2 Billion doses of iron supplement; less than 800 Million doses is consumed
      </h4>
      <v-divider v-if="!isMobile" class="mt-16"></v-divider>
      <p :class="['text-center text--darken-3', isMobile ? 'f-25 my-6' : 'f-20 my-4 ']" style="color: #939393">
        In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and
        are committed to enhance their physical, psychological and social quality of life through high quality and
        innovative solutions.
      </p>
      <v-divider v-if="!isMobile"></v-divider>
      <h4
        :class="['bel mt-16 f-40 text--darken-3 black--text font-weight-regular', isMobile ? 'text-center' : undefined]"
      >
        You may also like listening more stories
      </h4>
      <div :class="['d-flex mt-16', isMobile ? 'flex-column align-center' : 'justify-space-between']">
        <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined]">
          <v-img
            src="/images/face/bahador.png"
            :max-width="isMobile ? '120' : '90'"
            :height="isMobile ? '120' : '90'"
            style="border-radius: 50%"
          />
          <div class="d-flex flex-column justify-center ml-4">
            <p
              :class="[
                'bel f-26 black--text mb-0 text--darken-3 font-weight-bold',
                isMobile ? 'text-center' : undefined
              ]"
            >
              Bahador Nayebi
            </p>
            <p :class="['bel f-20 mb-0 text--darken-3', isMobile ? 'mt-4' : undefined]" style="color: #939393">
              Project Manager at Cobel® Group
            </p>
            <v-divider v-if="isMobile" class="my-4" style="background-color: #00a59b"></v-divider>
          </div>
        </div>
        <v-divider vertical color="#00a59b"></v-divider>
        <p v-if="!isMobile" class="bel f-20 mb-0 text--darken-3" style="max-width: 60%; color: #939393">
          In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and
          are committed to enhance their physical, psychological and social quality of life through high quality and
          innovative solutions.
        </p>
        <p v-else class="f-20 text-center mb-0 text--darken-3" style="color: #939393">
          In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and
          are committed to enhance their physical, psychological and social quality of life through high quality and
          innovative solutions.
        </p>
      </div>
      <div :class="['d-flex my-16', isMobile ? 'flex-column' : 'justify-space-between']">
        <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined]">
          <v-img
            src="/images/face/mohammad.png"
            :max-width="isMobile ? '120' : '90'"
            :height="isMobile ? '120' : '90'"
            style="border-radius: 50%"
          />
          <div class="d-flex flex-column justify-center ml-4">
            <p
              :class="[
                'bel f-26 black--text mb-0 text--darken-3 font-weight-bold',
                isMobile ? 'text-center' : undefined
              ]"
            >
              Mohamad javid
            </p>
            <p :class="['bel f-20 mb-0 text--darken-3', isMobile ? 'mt-4' : undefined]" style="color: #939393">
              Project Manager at Cobel® Group
            </p>
            <v-divider v-if="isMobile" class="my-4" style="background-color: #00a59b"></v-divider>
          </div>
        </div>
        <v-divider vertical color="#00a59b"></v-divider>
        <p v-if="!isMobile" class="bel f-20 mb-0 text--darken-3" style="max-width: 60%; color: #939393">
          In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and
          are committed to enhance their physical, psychological and social quality of life through high quality and
          innovative solutions.
        </p>
        <p v-else class="f-20 text-center mb-0 text--darken-3" style="color: #939393">
          In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and
          are committed to enhance their physical, psychological and social quality of life through high quality and
          innovative solutions.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pageTitles.storytellers')
    };
  }
};
</script>

<style lang="scss" scoped></style>
