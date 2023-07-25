<template>
  <div class="timeline-page">
    <CustomCarousel
      :items="[
        {
          src: '/images/temp/cover-7.png',
          title: isRTL
            ? 'شرکت‌های پیشرو ما هر روزه برای بهبود کیفیت زندگی انسان ها از طریق راهکارهای نوآورانه در حوزه‌ی سلامت تلاش می کنند. با داشتن مجموعه ای کامل از محصولات و خدمات در حوزه پیشگیری و درمان  ، تلاش می‌کنیم تا نیازهای منحصربه‌ فرد بیماران و متخصصین سلامت را  برآورده سازیم.'
            : 'Our pioneering companies are dedicated to improving quality of life with innovative healthcare solutions. With a diverse portfolio of products and services, we strive to meet the unique needs of individuals, healthcare professionals, and organizations.'
        }
      ]"
      :title="isRTL ? 'میراث' : 'Our Companies'"
      hide-delimiters
    />

    <v-sheet :class="['mx-auto grey--text text--darken-2', !isMobile && ($vuetify.breakpoint.xl ? 'px-12' : 'px-16')]">
      <div :class="['d-flex align-center pt-16', !isMobile ? 'pb-10' : 'flex-column text-center px-6 pb-2']">
        <h3
          :class="[
            'font-weight-regular grey--text text--darken-2 flex-shrink-0',
            isRTL ? 'ravi' : 'bel',
            { 'text-center d-block': isMobile },
            isMobile ? (isRTL ? 'f-33' : 'f-45') : isRTL ? 'f-45' : 'f-50'
          ]"
        >
          {{ $t('timelinePage.title') }}
        </h3>

        <v-divider v-if="isMobile" :class="['w-full', { 'mt-3': isRTL }]" />

        <p
          :class="[
            'mb-0 py-4',
            isMobile ? (isRTL ? 'f-18' : 'f-16') : 'f-20 ms-8 ps-8',
            isRTL ? 'font-weight-bold anjoman' : 'font-weight-light'
          ]"
          :style="`${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #59595B`}; color: #59595B;${
            isRTL && (isMobile ? 'line-height:25px' : 'line-height:30px')
          }`"
        >
          {{ $t('timelinePage.description') }}
        </p>
      </div>

      <div :class="['mb-16 pb-14', { 'ps-4': isMobile }]">
        <v-expansion-panels v-model="expanded" accordion flat>
          <v-expansion-panel
            v-for="(item, i) in items"
            :id="`item-${i}`"
            :key="i"
            :class="[isMobile ? 'ps-2' : 'ps-6']"
            @click="scroll(`#item-${i}`)"
          >
            <v-sheet
              :style="`margin: ${isMobile ? '43px' : '50px'} -10px 0; background-color: ${
                expanded === i ? '#4c6d80' : expanded !== undefined ? '#B0BEC5' : '#66869A'
              }; color: ${
                expanded === i ? '#4c6d80' : expanded !== undefined ? '#B0BEC5' : '#66869A'
              }; border: 10px solid white !important`"
              class="position-absolute z-2 start-0 top-0 rounded-circle custom-border"
              height="38"
              width="38"
            />
            <v-sheet
              v-if="i !== items.length - 1"
              :height="`${i === items.length - 2 ? 'calc(100% + 10px)' : 'calc(100% + 60px)'}`"
              :style="`margin: 60px 8px 0; border-left: 2px dashed ${expanded === i ? '#4c6d80' : '#B0BEC5'}`"
              class="position-absolute z-1 start-0 top-0"
              width="0"
            />

            <v-expansion-panel-header
              :class="['pt-8 pb-0', isMobile ? 'f-30' : isRTL ? 'f-30' : 'f-40']"
              :style="`color: ${item.color}`"
              hide-actions
            >
              <div :class="['d-flex', isMobile ? 'align-start' : 'align-center']">
                <v-sheet
                  :color="expanded === i ? item.active : item.color"
                  :height="isMobile ? 60 : 76"
                  :width="isMobile ? 160 : 180"
                  class="white me-5 flex-shrink-0 position-relative z-1 transition-ease-in-out d-flex align-center justify-center ps-2"
                >
                  <v-img contain height="75" :src="`/images/timeline/${item.logo}`" />
                </v-sheet>

                <v-spacer />

                <div :class="['d-flex', isMobile ? 'flex-column' : 'align-center', isMobile && !isRTL && 'pt-2']">
                  <v-spacer />

                  <v-sheet
                    :class="[
                      'f-18 text-center d-flex align-center justify-center px-4',
                      { 'white--text': expanded === i },
                      isMobile ? (isRTL ? 'mt-3 py-1' : 'mt-1 py-2') : isRTL ? 'py-1' : 'py-2'
                    ]"
                    :color="expanded === i ? '#66869a' : '#ECECEC'"
                    :style="`border-radius: 14px; color: #66869A`"
                    :width="isMobile ? 70 : 80"
                  >
                    <span :class="isRTL && 'font-weight-bold anjoman'" :style="isRTL && 'letter-spacing: 1px;'">
                      {{ isRTL ? toPersianDigit(item.date) : item.date }}
                    </span>
                  </v-sheet>
                </div>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content :class="isRTL ? 'anjoman font-weight-bold' : ''">
              <v-timeline :class="['pt-0 ms-n3']" :style="`color: ${item.color}`" align-top dense>
                <v-timeline-item hide-dot>
                  <p
                    :class="[
                      'pt-3',
                      isRTL ? 'font-weight-bold' : 'font-weight-light',
                      isMobile ? 'mt-4 ps-5' : 'ps-2',
                      isMobile ? (isRTL ? 'f-16' : 'f-22') : 'f-22'
                    ]"
                    :style="`color: #59595b;${isRTL && (isMobile ? 'line-height:25px' : 'line-height:30px')}`"
                  >
                    {{ item[`${$i18n.locale}_description`] }}
                  </p>
                </v-timeline-item>
                <v-timeline-item
                  v-for="(child, index) in item.children"
                  :key="index"
                  :class="{ 'pb-0': index === item.children.length - 1 }"
                  :color="item.active"
                  fill-dot
                >
                  <template v-slot:icon>
                    <strong
                      :class="['white--text', isRTL && 'font-weight-bold anjoman']"
                      :style="isRTL && 'letter-spacing: 1px;'"
                    >
                      {{ isRTL ? toPersianDigit(child.date) : child.date }}
                    </strong>
                  </template>

                  <v-sheet :class="[isMobile ? 'ps-5 pt-3' : 'ps-2 pt-5']" style="line-height: 30px">
                    <span
                      :class="['f-20 text-pre-line timeline-title font-weight-bold', isRTL && 'anjoman']"
                      v-html="child[`${$i18n.locale}_title`]"
                    />
                  </v-sheet>
                </v-timeline-item>
              </v-timeline>
            </v-expansion-panel-content>

            <div class="ps-5">
              <v-divider class="mt-8 ms-10" style="border-color: #eeeeee; border-top-width: 2px" />
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';
import CustomCarousel from '~/components/shared/CustomCarousel.vue';

export default {
  components: { CustomTabs, CustomCarousel },
  head() {
    return {
      title: this.$t('pageTitles.timeline')
    };
  },
  data() {
    return {
      expanded: undefined,
      items: [
        {
          en_title: 'Cobel Darou',
          logo: 'cobel.png',
          fa_title: 'کوبل دارو',
          color: '#f3b393',
          active: '#e86726',
          date: '2001',
          en_description:
            'Cobel Darou is a leading private pharmaceutical company founded in 2002. Cobel Darous core activities encompass pharmaceutical registration, importation and sales & marketing of multinational brands',
          fa_description:
            'کوبل دارو یک شرکت دارویی خصوصی پیشرو است که در سال 2002 تاسیس شد. فعالیت های اصلی کوبل دارو شامل ثبت دارو، تامین و واردات و فروش و بازاریابی برندهای چند ملیتی است.',
          children: [
            { date: '2001', fa_title: 'تأسیس کمپانی کوبل دارو ', en_title: 'Establishment of Cobel Darou' },
            {
              date: '2002',
              fa_title: 'همکاری تجاری با شرکت Guerbet',
              en_title: 'Business Collaboration with Guerbet'
            },
            {
              date: '2003',
              fa_title: 'همکاری تجاری با شرکت Piere Fabre',
              en_title: 'Business Collaboration with Piere Fabre'
            },
            {
              date: '2004',
              fa_title: 'همکاری تجاری با شرکت MSD',
              en_title: 'Business Collaboration with MSD'
            },
            {
              date: '2004',
              fa_title: 'همکاری تجاری با شرکت Sanofi',
              en_title: 'Business Collaboration with Sanofi'
            },
            {
              date: '2006',
              fa_title: 'همکاری تجاری با شرکت Actelion',
              en_title: 'Business Collaboration with Actelion'
            },
            {
              date: '2007',
              fa_title: 'همکاری تجاری با شرکت Uni Pharma',
              en_title: 'Business Collaboration with Uni Pharma'
            },
            {
              date: '2007',
              fa_title: 'همکاری تجاری با شرکت LFB',
              en_title: 'Business Collaboration with LFB'
            },
            {
              date: '2008',
              fa_title: 'شروع تولید محصولات داخلی- خرید 10% از سهام داروسازی دکتر عبیدی',
              en_title: 'Moved to Local Production by acquiring 10% share of Abidi Lab '
            },
            {
              date: '2009',
              fa_title: 'تولید محصولات تحت لیسانس  Sanofi-Aventis',
              en_title: 'Under-License production of Sanofi-Aventis products '
            },
            {
              date: '2009',
              fa_title: 'شروع برنامه ریزی برای تولید محصولات کوبل دارو',
              en_title: 'Started planning for production of Cobel Darou products'
            },
            {
              date: '2009',
              fa_title: 'همکاری تجاری با شرکت       AstraZeneca',
              en_title: 'Business Collaboration with AstraZeneca'
            },
            {
              date: '2012',
              fa_title: 'شروع کسب  و کار آرایشی و بهداشتی با شرکت  L’oreal',
              en_title: 'Dermocosmetic business with collaboration with L’oreal'
            },
            {
              date: '2012',
              fa_title: 'همکاری تجاری با شرکت Biologix',
              en_title: 'Business collaboration with Biologix'
            },
            {
              date: '2012',
              fa_title: 'همکاری تجاری با شرکت Roche Pharma',
              en_title: 'Business collaboration with Roche Pharma'
            },
            {
              date: '2017',
              fa_title: 'همکاری تجاری با شرکت Novartis',
              en_title: 'Business collaboration with Novartis'
            },
            {
              date: '2017',
              fa_title: 'همکاری تجاری با شرکت GSK',
              en_title: 'Business collaboration with GSK'
            },
            {
              date: '2018',
              fa_title: 'همکاری تجاری با شرکت Roche Diabetes Care',
              en_title: 'Business collaboration with Roche Diabetes Care'
            },
            {
              date: '2021',
              fa_title: 'همکاری تجاری با شرکت Roche Diagnostics',
              en_title: 'Business collaboration with Roche Diagnostics'
            },
            {
              date: '2021',
              fa_title: 'تامین اولین محموله واکسن کووید AstraZeneca',
              en_title: 'Supplying AstraZeneca COVID Vaccine (first shipment)'
            },
            {
              date: '2022',
              fa_title: 'تامین اولین محموله داروی درمانی برای بیماران SMA ',
              en_title: 'Supplying the first treatment option for SMA patients (first shipment)'
            }
          ]
        },
        {
          en_title: 'Dr. Abidi Pharmaceuticals',
          fa_title: 'داروسازی دکتر عابدی',
          logo: 'abidi.png',
          en_description:
            'Dr. Abidi Pharmaceutical, is a leading private company founded in 1946. It’s core activities encompass manufacturing 84 local brands, treating 4.5+ non-communicable diseases across 14 areas, with significant industrial development and extensive promotional structure',
          fa_description:
            'کوبل دارو یک شرکت دارویی خصوصی پیشرو است که در سال ۲۰۰۲ تاسیس شد. فعالیت های اصلی کوبل دارو شامل ثبت، واردات، تولید، توزیع و فروش و بازاریابی است.',
          color: '#85bedf',
          active: '#0d7dbf',
          date: '2008',
          children: [
            {
              date: '1946',
              fa_title: 'تاسیس آزمایشگاه داروسازی دکتر عبیدی',
              en_title: 'Establishment of Dr. Abidi Pharmaceutical Laboratory'
            },
            {
              date: '1958',
              fa_title: 'اخذ اولین مجوز تولید دارو',
              en_title: 'Acquisition of the first Pharma production license'
            },
            {
              date: '2006',
              fa_title: 'اخذ مجوز آزمایشگاه آکرودیت',
              en_title: 'Obtaining the Acrodite Laboratory License'
            },
            { date: '2008', fa_title: 'ورود کوبل دارو', en_title: 'Cobel Darou Entrance' },
            {
              date: '2009',
              fa_title: 'تولید تحت نظر محصولات سانوفی در ایران',
              en_title: 'Under-licensed manufacturing of Sanofi products in Iran'
            },
            {
              date: '2011',
              fa_title: 'مدیریت جدید و برنامه های توسعه ای',
              en_title: 'New management and Development Programs'
            },
            {
              date: '2015',
              fa_title: 'راه اندازی سایت تولید بیماری های خاص (همکاری با سینتون)',
              en_title: 'Establishment of special disease manufacturing site (Collaboration with Synthon)'
            },
            {
              date: '2017',
              fa_title: ' اخذ تاییدیه AstraZeneca و Novartis برای ساخت بدون مجوز در ایران',
              en_title: 'Obtaining AstraZeneca and Novartis approval for under-licensed manufacturing in Iran'
            },
            {
              date: '2019',
              fa_title: 'نوسازی و توسعه بخش ساخت و ساز',
              en_title: 'Construction Sector Renovation & Development,'
            },
            {
              date: '2019',
              fa_title: 'اخذ گواهینامه شرکت دانش بنیان',
              en_title: 'Obtaining Knowledge-Based Company Certificate'
            },
            { date: '2020', fa_title: 'راه اندازی خط بسته بندی جدید', en_title: 'New packaging line establishment' },
            {
              date: '2021',
              fa_title: 'جشن هفتاد و پنجمین سالگرد تاسیس داروسازی دکتر عبیدی',
              en_title: 'Celebrating 75th anniversary'
            },
            {
              date: '2022',
              fa_title: 'تاسیس سایت صنعتی جدید (سایت 2)',
              en_title: 'Abidi-2 industrial site establishment'
            },
            {
              date: '2023',
              fa_title: 'خرید شرکت داروسازی بهوازان',
              en_title: 'Acquisition of Behvazan Pharmaceuticals'
            }
          ]
        },
        {
          en_title: 'Adorateb',
          fa_title: 'شرکت پخش دارو آدوراطب',
          logo: 'adorateb.png',
          color: '#80cbb8',
          active: '#069f99',
          date: '2009',
          en_description:
            'Adorateb is a leading private distribution company founded in 2009. Adorateb is ranked 2nd in private sector and its core activities encompass innovative distributions of medicines and supplements to 15,000+ pharmacies through 26 centers in Iran.',
          fa_description:
            'کوبل دارو یک شرکت دارویی خصوصی پیشرو است که در سال ۲۰۰۲ تاسیس شد. فعالیت های اصلی کوبل دارو شامل ثبت، واردات، تولید، توزیع و فروش و بازاریابی است.',
          children: [
            { date: '2009', fa_title: 'تأسیس آدوراطب', en_title: 'Establishment of Adorateb' },
            {
              date: '2011',
              fa_title: 'راه اندازی 24 شعبه در ایران و ایجاد دسترسی و پوشش وسیع داروخانه ها',
              en_title: 'Establishment of 24branches in Iran and achieving a wide pharmacies coverage'
            },
            {
              date: '2014',
              fa_title: 'دریافت اولین گواهینامه ISO از TUV NORD',
              en_title: '1ST ISO certification from TUV NORD'
            },
            {
              date: '2015',
              fa_title: 'تبدیل کردن 5 شعبه خارج از آدورا به شعب های داخلی و جزو این شرکت ',
              en_title: 'Internalizing 5 out sourced branches to Adorateb owned branches'
            },
            {
              date: '2016',
              fa_title:
                'بهینه سازی سبد آدوراطب از طریق همکاری با تامین کنندگان خارج از گروه با هدف اجرای استراتژی تمرکز',
              en_title:
                'Optimizing Adorateb portfolio by canceling collaboration with out-of-the-group suppliers with the aim of implementing focus strategy'
            },
            {
              date: '2017',
              fa_title: 'راه اندازی یک مدل اعتباری نوآورانه برای مدیریت ریسک های مالی',
              en_title: 'Launching an innovative credit model for managing financial risks'
            },
            {
              date: '2018',
              fa_title: 'ساخت و افتتاح شعبه اختصاصی رشت',
              en_title: 'Construction and opening of Rasht proprietary branch'
            },
            {
              date: '2019',
              fa_title: 'همکاری تجاری با نستله در تهران و برند SMA در سراسر کشور',
              en_title: 'Business Collaboration with Nestle in Tehran and SMA brand nationwide'
            },
            {
              date: '2019',
              fa_title: 'راه اندازی پروژه "آرمان" برای افزایش جریان نقدی گروه کوبل',
              en_title: 'Launching ARMAN project boosting group’s cash flow'
            },
            {
              date: '2019',
              fa_title: 'کسب رکورد بالای ۸۸ درصدی سهم فروش محصولات دکتر عبیدی',
              en_title: 'Achieving a high record on Abidi sales share of 88%'
            },
            {
              date: '2019',
              fa_title: 'راه اندازی سیستم ردیابی UID برای اولین بار در صنعت توزیع دارو',
              en_title: 'Launching UID tracking system for the 1st time in pharma distribution industry '
            },
            {
              date: '2020',
              fa_title: 'افتتاح شعبه زاهدان برای حمایت از مناطق محروم',
              en_title: 'Opening Zahedan branch for supporting deprived area'
            },
            {
              date: '2021',
              fa_title: 'مالکیت ناوگان توسعه توسط 90٪ ناوگان داخلی',
              en_title: 'Development fleet ownership by 90% inhouse fleet'
            },
            {
              date: '2022',
              fa_title: 'دریافت جوایز تعالی مدیریت مالی در Nestle MENA',
              en_title: 'Financial management excellence awards in Nestle MENA '
            },
            {
              date: '2022',
              fa_title: 'ساخت و افتتاح شعبه اختصاصی اهواز',
              en_title: 'Construction and opening of Ahvaz proprietary branch'
            },
            {
              date: '2023',
              fa_title: 'توسعه همکاری با نستله برای توزیع کل مجموعه در سراسر کشور',
              en_title: 'Developing collaboration with Nestle on distributing the whole portfolio nationwide'
            }
          ]
        }
      ]
    };
  },
  methods: {
    scroll(id) {
      setTimeout(() => {
        this.$vuetify.goTo(id);
      }, 300);
    }
  }
};
</script>

<style lang="scss">
.timeline-page {
  .v-expansion-panel-header:before {
    display: none;
  }

  .custom-border {
    &:after {
      content: '';
      border: 1px solid currentColor;
      position: absolute;
      top: 0;
      margin: auto;
      bottom: 0;
      left: -3px;
      right: 0;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }

  .v-application--is-rtl {
    .v-expansion-panel-header:not(.v-expansion-panel-header--active) {
      &:after {
        margin-left: 25px;
        margin-right: 60px;
      }
    }
  }

  .v-expansion-panel-content__wrap {
    padding-bottom: 0;
  }

  .v-timeline {
    &:before {
      background: currentColor !important;
    }

    @media (max-width: 768px) {
      .v-timeline-item__divider {
        min-width: 56px;
      }
    }

    .v-timeline-item__dot {
      width: 70px;
      height: 70px;
      box-shadow: none !important;

      @media (max-width: 768px) {
        width: 56px;
        height: 56px;
      }
    }

    .v-timeline-item__inner-dot {
      opacity: 0.5;
      transition: all ease 0.4s;
    }

    .v-timeline-item {
      .timeline-title {
        color: #59595b;
        transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1) !important;
      }

      &:hover {
        .timeline-title {
          color: #000;
        }

        .v-timeline-item__inner-dot {
          opacity: 1;
        }
      }
    }

    &::before {
      top: -70px;
      z-index: 0;
      height: calc(100% + 30px);
    }
  }

  @media (max-width: 768px) {
    .v-timeline--dense .v-timeline-item__body {
      max-width: calc(100% - 66px);
    }
  }
}

.v-application--is-ltr {
  @media (max-width: 768px) {
    .v-timeline--dense:not(.v-timeline--reverse)::before {
      left: 40px;
    }

    .v-timeline-item__inner-dot {
      margin-left: 3px;
    }
  }
}

.v-application--is-rtl {
  .timeline-page {
    .custom-border {
      &:after {
        right: -3px;
        left: auto;
      }
    }

    @media (max-width: 768px) {
      .v-timeline--dense:not(.v-timeline--reverse)::before {
        right: 40px;
      }

      .v-timeline-item__inner-dot {
        margin-right: 3px;
      }
    }
  }
}
</style>
