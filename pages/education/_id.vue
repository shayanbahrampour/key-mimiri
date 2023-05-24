<template>
  <div class="d-flex flex-column">
    <div :class="['d-flex flex-column mt-16', isMobile ? 'px-4' : 'px-14']">
      <h4 class="bel f-50 font-weight-regular slategrey--text">Sample main titles for test education part</h4>
      <p class="font-weight-light mt-10 f-20" style="max-width: 500px; color: #939393; line-height: 30px">
        In Cobel Group, acknowledge importance of woman empowerment and inspiration to all.
      </p>
      <div
        :class="[
          'd-flex mb-16',
          isMobile ? 'flex-column align-start mt-6' : 'align-center justify-space-between mt-14'
        ]"
      >
        <div :class="['d-flex font-weight-light', isMobile ? 'w-full flex-wrap' : undefined]" style="width: 50%">
          <p :class="['f-12', isMobile ? 'mb-6 mr-10' : 'mb-0 mr-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="mr-1" size="16">mdi-clock-outline</v-icon
            >{{ !isMobile ? 'Read time: 13min' : '13min' }}
          </p>
          <p :class="['f-12', isMobile ? 'mb-6 mr-10' : 'mb-0 mr-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="mr-1" size="16">mdi-fountain-pen-tip</v-icon>
            {{ !isMobile ? 'Written by: mehrab mohammadi' : 'mehrab mohammadi' }}
          </p>
          <p :class="['f-12', isMobile ? 'mb-6 mr-0' : 'mb-0 mr-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="mr-1" size="16">mdi-bullhorn-variant-outline</v-icon>
            {{ !isMobile ? 'Published 3 months ago' : '3 months ago' }}
          </p>
        </div>
        <div :class="[isMobile ? 'mt-2' : 'd-flex align-center']">
          <span :class="['f-16 slategrey--text', isMobile ? undefined : 'mr-4']">share it:</span>
          <div :class="[isMobile ? 'mt-2' : undefined]">
            <v-btn class="rounded" color="slategrey" height="50" min-width="50" outlined>
              <v-img height="20" max-width="20" src="/images/icons/linkedin-primary.png" />
            </v-btn>
            <v-btn class="ml-4 rounded" color="slategrey" height="50" min-width="50" outlined>
              <v-img height="20" max-width="20" src="/images/icons/whatsapp-primary.png" />
            </v-btn>
            <v-btn class="ml-4 rounded" color="slategrey" height="50" min-width="50" outlined>
              <v-img height="20" max-width="20" src="/images/icons/telegram-primary.png" />
            </v-btn>
          </div>
        </div>
      </div>
      <p v-if="!isMobile" class="font-weight-light f-20 mt-10" style="color: #939393; line-height: 2">
        WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
        consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
        will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
        have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
      </p>
    </div>
    <div :class="[isMobile ? 'px-4 py-10' : 'mt-16 px-14 py-16']" style="background-color: #ececec">
      <v-row>
        <v-col cols="12" lg="5" md="4">
          <h4 :class="['font-weight-regular bel slategrey--text', isMobile ? 'f-40' : 'f-50']">Main sample titles</h4>
          <p class="font-weight-regular mt-10 f-20 pb-16" style="max-width: 380px; color: #59595b; line-height: 30px">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to
          </p>
          <v-divider class="mt-16" style="width: 400px"></v-divider>
          <v-container :class="['px-0 d-flex', isMobile ? 'justify-center' : undefined]" fluid>
            <v-radio-group v-model="radioGroup" class="mr-4" dense multiple>
              <v-radio v-for="n in 2" :key="n" :label="`feature ${n}`" :value="n" color="#F3911F"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="radioGroup" class="mr-4" dense multiple>
              <v-radio v-for="n in 2" :key="n" :label="`feature ${n}`" :value="n" color="#F3911F"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="radioGroup" dense multiple>
              <v-radio v-for="n in 2" :key="n" :label="`feature ${n}`" :value="n" color="#F3911F"></v-radio>
            </v-radio-group>
          </v-container>
        </v-col>
        <v-col cols="12" lg="5" md="4">
          <!--  PDF VIEWER HERE  -->
        </v-col>
      </v-row>
      <p v-if="!isMobile" class="font-weight-light mt-16 f-20" style="color: #59595b; line-height: 2">
        WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
        consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
        will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
        have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
      </p>
    </div>
    <div :class="['d-flex align-center', isMobile ? 'flex-column px-4 my-4' : 'px-14 my-16']">
      <v-img max-height="250" src="/images/news/face.png" width="400" />

      <p :class="['font-weight-light f-20 mx-4', isMobile ? 'mt-6' : undefined]" style="color: #939393; line-height: 2">
        WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
        consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
        will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
        have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
      </p>
    </div>
    <h1 class="bel f-50 grey--text text--darken-2 font-weight-regular ml-14 mt-10">More Articles</h1>
    <NewsCard :class="['mt-10', !isMobile ? 'mx-10' : undefined]" />
  </div>
</template>

<script>
import NewsCard from '~/components/news/NewsCard';

export default {
  components: { NewsCard },
  data() {
    return {
      radioGroup: 1
    };
  }
};
</script>

<style lang="scss" scoped></style>
