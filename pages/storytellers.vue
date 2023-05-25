<template>
  <div class="d-flex flex-column slategrey">
    <div
      :class="['d-flex align-center justify-space-between', isMobile ? 'flex-column align-center mt-6' : 'px-16 mt-16']"
    >
      <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined]">
        <v-img
          :height="isMobile ? '120' : '90'"
          :max-width="isMobile ? '120' : '90'"
          src="/images/face/masoume.png"
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
              isMobile ? 'text-center mt-2 font-weight-light' : undefined
            ]"
          >
            Project Manager at Cobel® Group
          </p>
        </div>
      </div>
      <div :class="[isMobile ? 'mt-6' : undefined]">
        <v-btn class="rounded" color="white" height="50" min-width="50" outlined>
          <v-img height="20" max-width="20" src="/images/icons/linkedin.png" />
        </v-btn>
        <v-btn class="ml-4 rounded" color="white" height="50" min-width="50" outlined>
          <v-img height="20" max-width="20" src="/images/icons/whatsapp.png" />
        </v-btn>
        <v-btn class="ml-4 rounded" color="white" height="50" min-width="50" outlined>
          <v-img height="20" max-width="20" src="/images/icons/telegram.png" />
        </v-btn>
      </div>
    </div>
    <p
      v-if="isMobile"
      :class="['f-20 mx-16 white--text text--darken-3 font-weight-light', isMobile ? 'text-center mt-8 mb-0' : 'mt-16']"
      style="line-height: 30px"
    >
      Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
      consume 60 mg of iron
    </p>
    <p
      v-else
      :class="['f-20 mx-16 white--text text--darken-3 font-weight-light', isMobile ? 'text-center mt-8 mb-0' : 'mt-16']"
      style="line-height: 30px"
    >
      WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
      consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
      will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
      have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3). Studies conducted by
      Cobel Group medico-marketing teams indicated
    </p>
    <v-btn
      v-if="isMobile"
      class="bel pa-0 ma-0 mt-2 justify-center f-20 font-weight-bold"
      color="white"
      depressed
      rounded
      style="text-transform: unset !important"
      text
      ><p>see more</p></v-btn
    >
    <v-img :class="[isMobile ? 'mt-4' : 'mt-16']" contain src="/images/video_content/physical.png" />
    <div :class="['h-full white', isMobile ? 'px-4' : 'px-16']">
      <h4
        :class="['bel f-40 text-center text--darken-3 font-weight-regular', isMobile ? 'mt-6' : 'mt-16']"
        style="color: #00a59b"
      >
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
            :height="isMobile ? '120' : '90'"
            :max-width="isMobile ? '120' : '90'"
            src="/images/face/bahador.png"
            style="border-radius: 50%"
          />
          <div class="d-flex flex-column justify-center ml-4">
            <p
              :class="[
                'bel black--text mb-0 text--darken-3',
                isMobile ? 'text-center mt-4 f-32 font-weight-regular' : 'f-26 font-weight-regular'
              ]"
            >
              Bahador Nayebi
            </p>
            <p :class="['bel  mb-0 text--darken-3', isMobile ? 'mt-2 f-24' : '-20']" style="color: #939393">
              Project Manager at Cobel® Group
            </p>
            <v-divider v-if="isMobile" class="my-4" style="background-color: #00a59b"></v-divider>
          </div>
        </div>
        <v-divider color="#00a59b" vertical></v-divider>
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
            :height="isMobile ? '120' : '90'"
            :max-width="isMobile ? '120' : '90'"
            src="/images/face/mohammad.png"
            style="border-radius: 50%"
          />
          <div class="d-flex flex-column justify-center ml-4">
            <p
              :class="[
                'bel black--text mb-0 text--darken-3',
                isMobile ? 'text-center mt-4 f-32 font-weight-regular' : 'f-26 font-weight-regular'
              ]"
            >
              Mohamad javid
            </p>
            <p :class="['bel  mb-0 text--darken-3', isMobile ? 'mt-2 f-24' : '-20']" style="color: #939393">
              Project Manager at Cobel® Group
            </p>
            <v-divider v-if="isMobile" class="my-4" style="background-color: #00a59b"></v-divider>
          </div>
        </div>
        <v-divider color="#00a59b" vertical></v-divider>
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
