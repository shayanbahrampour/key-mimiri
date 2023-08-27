<template>
  <v-container v-if="!isMobile" class="d-flex flex-column justify-center mb-16 pl-0" style="width: 90vw">
    <v-row no-gutters>
      <template v-for="(item, n) in items">
        <v-col :key="n" cols="6">
          <v-card :class="['py-10', n % 2 === 1 ? 'ps-10' : 'pe-10']" elevation="0" outline tile>
            <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
              {{ isRTL ? item.fa_title : item.en_title }}
            </h4>
            <p
              :class="['f-18 mt-4 mb-0 text--darken-3 mb-auto', isRTL ? 'font-weight-light' : 'font-weight-light']"
              style="height: 120px !important"
            >
              {{ isRTL ? item.fa_summary : item.en_summary }}
            </p>
            <div class="d-flex align-center mt-6" style="height: 60px !important">
              <v-btn
                :class="['rounded-xl d-flex justify-center white--text f-18', isRTL ? 'font-weight-light' : undefined]"
                :href="item.link"
                target="_blank"
                color="slategrey"
                elevation="0"
                height="36"
                min-width="220"
              >
                {{ $t('career.job_action') }}
              </v-btn>
              <v-spacer></v-spacer>
              <v-img :src="`/images/timeline/${item.logo}`" :max-width="item.logoWidth" :height="item.logoHeight" />
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
  <div v-else class="d-flex flex-column mb-16">
    <div v-for="(item, i) in items" :key="i" class="d-flex flex-column">
      <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
        {{ isRTL ? item.fa_title : item.en_title }}
      </h4>
      <p
        :class="['f-18 text--darken-3 mb-auto', isRTL ? 'font-weight-light' : 'font-weight-light']"
        style="max-width: 80%; color: #59595b; line-height: 24px"
      >
        {{ isRTL ? item.fa_summary : item.en_summary }}
      </p>
      <div class="d-flex flex-column align-start mt-6">
        <v-img :src="`/images/timeline/${item.logo}`" :max-width="item.logoWidth" :height="item.logoHeight" />
        <v-btn
          :class="['rounded-xl d-flex justify-center white--text f-20 mt-6', isRTL ? 'font-weight-light' : undefined]"
          :href="item.link"
          target="_blank"
          color="slategrey"
          elevation="0"
          height="50"
          min-width="100%"
        >
          {{ $t('career.job_action') }}
        </v-btn>
      </div>

      <v-divider v-if="i !== 3" class="my-10"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [
        {
          en_title: 'COBEL DAROU',
          fa_title: 'کوبل دارو',
          fa_summary:
            'کوبل دارو یک شرکت دارویی خصوصی پیشرو است که در سال 2002 تاسیس شد. فعالیت های اصلی کوبل دارو شامل ثبت دارو، تامین و واردات و فروش و بازاریابی برندهای چند ملیتی است.',
          logo: 'cobel.svg',
          logoWidth: 130,
          logoHeight: 90,
          link: 'https://cobeldarou.adilar.com/',
          en_summary:
            'Cobel Darou is a leading private pharmaceutical company founded in 2002. Cobel Darous core activities encompass pharmaceutical registration, importation, and sales & marketing of multinational brands'
        },
        {
          en_title: 'ABIDI',
          fa_title: 'عبیدی',
          fa_summary:
            'داروسازی دکتر عبیدی، یک شرکت خصوصی برجسته است که در سال 1946 تأسیس شد. فعالیت‌های اصلی این شرکت شامل تولید 84 برند محلی، درمان بیش از 4.5 میلیون بیماری غیرواگیر در 14 حوزه مختلف و توسعه صنعتی قابل توجه به همراه ساختار اطلاع رسانی گسترده می‌باشد.',
          logoWidth: 170,
          logoHeight: 60,
          logo: 'abidi.svg',
          link: 'https://abidipharma.com/recruitment',
          en_summary:
            'Dr. Abidi Pharmaceutical, is a leading private company founded in 1946. It’s core activities encompass manufacturing 84 local brands, treating 4.5+ M non-communicable diseases across 14 areas, with significant industrial development and extensive promotional structure'
        },
        {
          en_title: 'ADORATEB',
          fa_summary:
            'آدوراطب یک شرکت توزیع خصوصی پیشرو در ایران است که در سال 2009 تأسیس شد. آدوراطب رتبه دوم در بخش خصوصی توزیع دارو را به خود اختصاص داده است که فعالیت‌های اصلی آن شامل توزیع دارو و مکمل‌ها به بیش از 15,000 داروخانه از طریق 26 مرکز توزیع در ایران می باشد.',
          logoWidth: 170,
          logoHeight: 60,
          logo: 'adorateb.svg',
          fa_title: 'آدوراطب',
          link: 'https://career.hrcando.ir/co/adorateb',
          en_summary:
            'Adorateb is a leading private distribution company founded in 2009. Adorateb is ranked 2nd in private sector and its core activities encompass innovative distributions of medicines and supplements to 15,000+ pharmacies through 26 centers in Iran.'
        },
        {
          en_title: 'COBEL GROUP',
          fa_summary:
            'آدوراطب یک شرکت توزیع خصوصی پیشرو در ایران است که در سال 2009 تأسیس شد. آدوراطب رتبه دوم در بخش خصوصی توزیع دارو را به خود اختصاص داده است که فعالیت‌های اصلی آن شامل توزیع دارو و مکمل‌ها به بیش از 15,000 داروخانه از طریق 26 مرکز توزیع در ایران می باشد.',
          logoWidth: 160,
          logoHeight: 50,
          logo: 'cobelgroup.png',
          fa_title: 'گروه کوبل',
          link: 'https://career.hrcando.ir/co/adorateb',
          en_summary:
            'Adorateb is a leading private distribution company founded in 2009. Adorateb is ranked 2nd in private sector and its core activities encompass innovative distributions of medicines and supplements to 15,000+ pharmacies through 26 centers in Iran.'
        }
      ],
      news: []
    };
  }
};
</script>

<style lang="scss"></style>
