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
          <p :class="['f-16', isMobile ? 'mb-6 mr-10' : 'mb-0 mr-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="mr-1" size="16">mdi-clock-outline</v-icon>
            {{ !isMobile ? 'Read time: 13min' : '13min' }}
          </p>
          <p :class="['f-16', isMobile ? 'mb-6 mr-10' : 'mb-0 mr-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="mr-1" size="16">mdi-fountain-pen-tip</v-icon>
            {{ !isMobile ? 'Written by: mehrab mohammadi' : 'mehrab mohammadi' }}
          </p>
          <p :class="['f-16', isMobile ? 'mb-6 mr-0' : 'mb-0 mr-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="mr-1" size="16">mdi-bullhorn-variant-outline</v-icon>
            {{ !isMobile ? 'Published 3 months ago' : '3 months ago' }}
          </p>
        </div>

        <ShareOptions />
      </div>
      <p v-if="!isMobile" class="font-weight-light f-20 mt-10" style="color: #939393; line-height: 2">
        WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
        consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
        will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
        have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
      </p>
    </div>
    <div :class="[isMobile ? 'px-4 pt-10' : 'mt-16 px-16 py-16']" style="background-color: #ececec">
      <v-row>
        <v-col cols="12" lg="6" md="4">
          <h4 :class="['font-weight-regular bel slategrey--text', isMobile ? 'f-40' : 'f-50']">Main sample titles</h4>
          <p class="font-weight-regular mt-10 f-20 pb-16" style="max-width: 380px; color: #59595b; line-height: 30px">
            In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society
            and are committed to
          </p>

          <template v-if="!isMobile">
            <v-divider class="mt-16" style="width: 400px"></v-divider>
            <v-container :class="['px-0 d-flex', isMobile ? 'justify-center' : undefined]" fluid>
              <FeatureSelection />
            </v-container>
          </template>
        </v-col>
        <v-col cols="12" md="6">
          <client-only>
            <PdfLoader class="mb-6" />
          </client-only>
        </v-col>
      </v-row>

      <p v-if="!isMobile" class="font-weight-light mt-16 f-20" style="color: #59595b; line-height: 2">
        WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
        consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
        will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
        have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
      </p>
    </div>
    <EducationDetail />
    <h1 class="bel f-50 grey--text text--darken-2 font-weight-regular ml-16 mt-10">More Articles</h1>
    <NewsCard :class="['mt-10', !isMobile ? 'mx-14' : undefined]" :path="localePath('/education/1')" />
  </div>
</template>

<script>
import NewsCard from '~/components/news/NewsCard';
import PdfLoader from '~/components/shared/PdfLoader.vue';
import ShareOptions from '~/components/shared/ShareOptions';
import FeatureSelection from '~/components/education/FeatureSelection';
import EducationDetail from '~/components/education/EducationDetail';

export default {
  components: { PdfLoader, NewsCard, FeatureSelection, EducationDetail, ShareOptions },
  head() {
    return {
      title: this.$t('pageTitles.education')
    };
  }
};
</script>

<style lang="scss" scoped></style>
