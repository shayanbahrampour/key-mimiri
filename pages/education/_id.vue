<template>
  <div class="d-flex flex-column">
    <div :class="['d-flex flex-column mt-16', isMobile ? 'px-4' : 'px-16 me-4']">
      <h4
        :class="[
          'font-weight-regular slategrey--text',
          isRTL ? (isMobile ? 'f-34 ravi' : 'f-46 ravi') : isMobile ? 'f-40 bel' : 'f-60 bel'
        ]"
      >
        {{ isRTL ? news.titleRTL : news.title }}
      </h4>
      <p
        :class="['font-weight-light mt-10 f-20', { 'ravi ': isRTL }]"
        style="max-width: 500px; color: #939393; line-height: 30px"
      >
        {{ isRTL ? news.shortDescriptionRTL : news.shortDescription }}
      </p>
      <div
        :class="[
          'd-flex mb-16',
          isMobile ? 'flex-column align-start mt-6' : 'align-center justify-space-between mt-14'
        ]"
      >
        <div
          :class="['d-flex font-weight-light', isMobile ? 'w-full flex-wrap' : undefined, { 'ravi ': isRTL }]"
          style="width: 50%"
        >
          <p :class="['f-16', isMobile ? 'mb-6 me-10' : 'mb-0 me-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="me-1" size="16">mdi-clock-outline</v-icon>
            {{ isRTL ? (!isMobile ? 'زمان مطالعه: 13 دقیقه' : '۱۳ دقیقه') : !isMobile ? 'Read time: 13min' : '13min' }}
          </p>
          <p :class="['f-16', isMobile ? 'mb-6 me-10' : 'mb-0 me-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="me-1" size="16">mdi-fountain-pen-tip</v-icon>
            {{
              isRTL
                ? !isMobile
                  ? 'نویسنده: مهراب محمدی'
                  : 'معصومه سیدی'
                : !isMobile
                ? 'Writed by: mehrab mohammadi'
                : 'mehrab mohammadi'
            }}
          </p>
          <p :class="['f-16', isMobile ? 'mb-6 me-0' : 'mb-0 me-6']" style="color: #939393">
            <v-icon v-if="isMobile" class="me-1" size="16">mdi-bullhorn-variant-outline</v-icon>
            {{
              isRTL
                ? !isMobile
                  ? 'منتشر شده: 3 ماه پیش'
                  : '۲ ماه قبل'
                : !isMobile
                ? 'Published 3 moth ago'
                : 'Published 3 moth ago'
            }}
          </p>
        </div>

        <ShareOptions />
      </div>
      <p
        v-if="!isMobile"
        :class="['font-weight-light f-20 mt-10', { 'ravi ': isRTL }]"
        style="color: #939393; line-height: 2"
      >
        {{ isRTL ? news.descriptionRTL : news.description }}
      </p>
    </div>
    <div :class="[isMobile ? 'px-4 pt-10' : 'mt-16 px-16 py-16']" style="background-color: #ececec">
      <v-row :class="isRTL && 'ltr'">
        <v-col cols="12" md="6">
          <h4
            :class="[
              'slategrey--text',
              isRTL
                ? isMobile
                  ? 'f-40 text-end ravi'
                  : 'f-32 text-end ravi font-weight-bold my-4'
                : isMobile
                ? 'f-40 text-start bel font-weight-regular'
                : 'f-50 text-start-bel font-weight-regular'
            ]"
          >
            {{ isRTL ? sample.titleRTL : sample.title }}
          </h4>
          <p
            :class="[
              'font-weight-regular f-20',
              isMobile ? 'mt-6' : 'mt-2',
              isRTL ? 'text-end ravi rtl' : 'text-start'
            ]"
            :style="`max-width: ${isRTL ? '1000' : '600'}px; color: #59595b; line-height: 30px`"
          >
            {{ isRTL ? sample.shortDescriptionRTL : sample.shortDescription }}
          </p>

          <template v-if="!isMobile">
            <v-container
              :class="[
                'px-0',
                isMobile ? 'justify-center' : undefined,
                isRTL ? 'd-flex flex-column align-end' : 'd-flex flex-column'
              ]"
              fluid
            >
              <v-divider class="mt-16" style="width: 400px"></v-divider>

              <FeatureSelection />
            </v-container>
          </template>
        </v-col>
        <v-col :class="[{ 'mb-6': isMobile }]" cols="12" md="6">
          <client-only>
            <PdfLoader />
          </client-only>
          <FeatureSelection v-if="isMobile" class="mt-10 mb-6" />
        </v-col>
      </v-row>

      <p
        v-if="!isMobile"
        :class="['mt-16 f-20', isRTL ? 'font-weight-bold' : 'font-weight-light']"
        style="color: #59595b; line-height: 2"
      >
        {{ isRTL ? sample.descriptionRTL : sample.description }}
      </p>
    </div>
    <EducationDetail />
    <h1
      v-if="!isMobile"
      :class="['grey--text text--darken-2 font-weight-regular ms-14 mt-10', isRTL ? 'ravi f-46' : 'bel f-50']"
    >
      {{ isRTL ? 'مقالات بیشتر' : 'More Articles' }}
    </h1>
    <NewsCard
      :class="['mt-10', !isMobile ? 'mx-14' : undefined]"
      :path="localePath('/education/1')"
      :title="isRTL ? 'مقالات بیشتر' : 'More Articles'"
    />
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
  },
  data() {
    return {
      news: {
        title: 'Sample main titles for test education part',
        titleRTL: 'چالشهاي سه گانه قيمتگذاري، نقدينگي و نوآوري در صنعت دارو',
        shortDescription: 'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all.',
        shortDescriptionRTL: 'سياستگذاران نظام سلامت، دانشجويان',
        description:
          'WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).',
        descriptionRTL:
          'كنترل سطوح قيمتي داروها، به جهت حفظ قابليت پرداخت در اقشار مختلف جامعه، رويكردي براي نهادهاي نظارتي كشور در چند دهه گذشته بوده است و در نبود سيستمهاي بيمهاي كارآمد، بار سنگيني بر دوش صنعت داروسازي داخلي وارد نموده است. حال حاضر سه چالش اصلي پيشروي صنعت داروسازي ايران قرار دارد، كه عبارتند از: "رويكرد قيمتگذاري بر اساس هزينه تمام شده"، "چالشهاي نقدينگي"، و "وجود موانع در نوآوري و ثبت داروهاي جديد".'
      },
      sample: {
        title: 'Main sample titles ',
        titleRTL: 'قيمت گذاري در دارو',
        shortDescription:
          'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and are committed to ',
        shortDescriptionRTL:
          'قيمت گذاري دارويي نيازمند حفظ تعادل ميان حفظ دسترسي و قابليت پرداخت بيماران و همچنين توسعه صنعت داروسازي است. قيمت گذاري مبتني بر ارزش به دليل ارج نهادن بر ارزشهاي افزوده دارو در ارتقا اثربخشي، ايمني و كارآمدي درمان، يكي از موثرترين روشها جهت قيمتگذاري محصولات دارويي است.',
        description:
          'WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to consume 60 mg of iron supplements per week. This amount should be higher in pregnantwomen and any deficiencies will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women have a 2 prevalence of Anemia and are also require to manage the disease accordingly ',
        descriptionRTL:
          'با اين حال، بازار مراقبت هاي بهداشتي با بازار آزاد در تمامي اين معيارها متفاوت است كه مي تواند منجر به ايجاد شكست بازار شود. ايجاد توازن در حفظ دسترسي بيماران و در كنار آن توسعه صنعت داروسازي، به اهميت نقش سياستگذاران در فرآيند قيمتگذاري اشاره دارد. قيمتگذاري يك داروي جديد ميبايست مبتني بر ويژگيهاي باليني دارو، نظير اثربخشي و ايمني محصول، مطلوبيت درمان و كيفيت خدمات تامينكننده نظير خدمات همراه درمان، ارائه آموزش، تعهد نسبت به مسئوليت اجتماعي و تبعيت نسبت به استانداردهاي اخلاقي باشد.'
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
