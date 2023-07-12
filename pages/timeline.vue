<template>
  <div class="timeline-page">
    <CustomCarousel
      :items="[
        {
          src: '/images/temp/cover-7.png',
          title: isRTL
            ? 'ايجاد توانايی برای دستيابی به اهداف و الهام بخش برای خلق برترينها وعده برند گروه كوبل، توانمندسازی، الهامبخشی و برانگيختن ايدههايی است كه در راه پيشرفت و رسيدن به راهكارهای سلامت، تأثيرگذار است. بنابراين، ما در جهت آگاهسازی و آموزش سرمايهگذاری ميكنيم، نه تنها به نيروی انسانی خود، بلكه به تمامی ذينفعانمان. منابع آموزشی ما برای همگان در دسترس است.'
            : 'Empowers to achieve, Inspires to create the greatest Cobel Group promise is to empower, inspire and trigger ideas that make a significant impact in how we deliver solutions. Therefore, we invest on education; not only to our '
        }
      ]"
      :title="isRTL ? 'میراث' : 'Heritage'"
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
                  :width="isMobile ? 60 : 76"
                  class="rounded-circle white me-5 flex-shrink-0 position-relative z-1 transition-ease-in-out d-flex align-center justify-center"
                  ><v-img height="26" :src="`/images/timeline/${item.logo}`"
                /></v-sheet>

                <div
                  :class="[
                    'flex-grow-1 d-flex',
                    isMobile ? 'flex-column' : 'align-center',
                    isMobile && !isRTL && 'pt-4'
                  ]"
                  :style="isRTL && isMobile && `padding-top: 17px`"
                >
                  <span
                    :class="[isRTL ? 'ravi f-26' : 'bel']"
                    :style="`color: ${expanded === i ? '#4c6d80' : '#66869A'}`"
                  >
                    {{ item[`${$i18n.locale}_title`] }}
                  </span>

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
            'Cobel Darou is a leading private pharmaceutical company founded in 2002. Cobel Darou main activities are registration, importation, manufacturing, distribution and sales & marketing.',
          fa_description:
            'کوبل دارو یک شرکت دارویی خصوصی پیشرو است که در سال ۲۰۰۲ تاسیس شد. فعالیت های اصلی کوبل دارو شامل ثبت، واردات، تولید، توزیع و فروش و بازاریابی است.',
          children: [
            { date: '2001', fa_title: 'تأسیس کوبل دارو', en_title: 'Establishment of Cobel Darou' },
            { date: '2002', fa_title: 'همکاری تجاری با Guerbet', en_title: 'Business Collaboration with Guerbet' },
            {
              date: '2003',
              fa_title: 'همکاری تجاری با Piere Fabre',
              en_title: 'Business Collaboration with Piere Fabre'
            },
            {
              date: '2004',
              fa_title: `              همکاری تجاری با Ebewe (خاتمه یافت)
همکاری تجاری با MSD
همکاری تجاری با سانوفی`,
              en_title:
                'Business Collaboration with Ebewe (terminated)\n Business Collaboration with MSD\n Business Collaboration with Sanofi'
            },
            {
              date: '2005',
              fa_title: 'همکاری تجاری با UCB (خاتمه یافت)',
              en_title: 'Business Collaboration with UCB (terminated)'
            },
            {
              date: '2006',
              fa_title: `همکاری تجاری با Actelion
همکاری تجاری با TEA (خاتمه یافت)`,
              en_title: 'Business Collaboration with Actelion\n Business Collaboration with TEA (Terminated)'
            },
            {
              date: '2007',
              fa_title: `همکاری تجاری با Uni Pharma
همکاری تجاری با LFB`,
              en_title: 'Business Collaboration with Uni Pharma\n Business Collaboration with LFB'
            },
            {
              date: '2008',
              fa_title: 'با تصاحب 10 درصد از سهام آزمایشگاه عابدی به تولید داخلی منتقل شد',
              en_title: 'Moved to Local Production by acquiring 10% share of Abidi Lab'
            },
            {
              date: '2009',
              fa_title: `تولید محصولات Sanofi-Aventis تحت مجوز
شروع برنامه ریزی برای تولید محصول کوبل دارو
همکاری تجاری با AstraZeneca`,
              en_title:
                'Under-License production of Sanofi-Aventis products\n Started planning for production of Cobel Darou product\n Business Collaboration with AstraZeneca'
            },
            {
              date: '2012',
              fa_title: `کسب و کار لوازم آرایشی و بهداشتی با همکاری L’oreal
همکاری تجاری با Biologix
همکاری تجاری با Roche Pharma`,
              en_title:
                'Dermocosmetic business with collabotration with L’oreal\n Business collaboration with Biologix\n Business collaboration with Roche Pharma'
            },
            {
              date: '2017',
              fa_title: `همکاری تجاری با Novartis
همکاری تجاری با GSK`,
              en_title: 'Business collaboration with Novartis\n Business collaboration with GSK'
            },
            {
              date: '2018',
              fa_title: 'همکاری تجاری با Roche Diabetes Care',
              en_title: 'Business collaboration with Roche Diabetes Care'
            },
            {
              date: '2021',
              fa_title: `همکاری تجاری با Roche Diagnostics
تامین واکسن کووید AstraZeneca (اولین محموله)`,
              en_title:
                'Business collaboration with Roche Diagnostics\n Supplying AstraZeneca COVID Vaccine (first shipment)'
            },
            {
              date: '2022',
              fa_title: 'ارائه اولین گزینه درمانی برای بیماران SMA (محموله اول)',
              en_title: 'Supplying the first treatment option for SMA patients (first shipment)'
            }
          ]
        },
        {
          en_title: 'Dr. Abidi Pharmaceuticals',
          fa_title: 'داروسازی دکتر عابدی',
          logo: 'abidi.png',
          en_description:
            'Cobel Darou is a leading private pharmaceutical company founded in 2002. Cobel Darou main activities are registration, importation, manufacturing, distribution and sales & marketing.',
          fa_description:
            'کوبل دارو یک شرکت دارویی خصوصی پیشرو است که در سال ۲۰۰۲ تاسیس شد. فعالیت های اصلی کوبل دارو شامل ثبت، واردات، تولید، توزیع و فروش و بازاریابی است.',
          color: '#85bedf',
          active: '#0d7dbf',
          date: '2008',
          children: [
            { date: '1946', fa_title: 'کوبل دارو', en_title: 'Establishment of Abidi Pharmaceutical Co.' },
            { date: '1958', fa_title: 'کوبل دارو', en_title: 'Acquisition of the first Pharma production license' },
            { date: '2006', fa_title: 'کوبل دارو', en_title: 'Acquisition of Iran FDA GDP' },
            { date: '2008', fa_title: 'کوبل دارو', en_title: 'Cobel Darou Entrance' },
            {
              date: '2009',
              fa_title: 'کوبل دارو',
              en_title: 'Under-licensed manufacturing of Sanofi products in Iran'
            },
            { date: '2011', fa_title: 'کوبل دارو', en_title: 'New management and development plan' },
            {
              date: '2015',
              fa_title: 'کوبل دارو',
              en_title: 'Special disease manufacturing site (Collaboration with Synthon)'
            },
            {
              date: '2017',
              fa_title: 'کوبل دارو',
              en_title: 'Acquiring AstraZeneca and Novartis approval for under-licensed manufacturing in Iran'
            },
            { date: '2018', fa_title: 'کوبل دارو', en_title: 'Production lines revamp' },
            { date: '2020', fa_title: 'کوبل دارو', en_title: 'New packaging line establishment' },
            { date: '2021', fa_title: 'کوبل دارو', en_title: '75 years birthday' },
            { date: '2022', fa_title: 'کوبل دارو', en_title: 'Abidi-2 production site' }
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
            'Cobel Darou is a leading private pharmaceutical company founded in 2002. Cobel Darou main activities are registration, importation, manufacturing, distribution and sales & marketing.',
          fa_description:
            'کوبل دارو یک شرکت دارویی خصوصی پیشرو است که در سال ۲۰۰۲ تاسیس شد. فعالیت های اصلی کوبل دارو شامل ثبت، واردات، تولید، توزیع و فروش و بازاریابی است.',
          children: [
            { date: '2001', fa_title: 'کوبل دارو', en_title: 'Establishment of Cobel Darou' },
            { date: '2002', fa_title: 'کوبل دارو', en_title: 'Business Collaboration with Guerbet' },
            { date: '2003', fa_title: 'کوبل دارو', en_title: 'Business Collaboration with Piere Fabre' },
            {
              date: '2004',
              fa_title: 'کوبل دارو',
              en_title:
                'Business Collaboration with Ebewe (terminated)\n Business Collaboration with MSD\n Business Collaboration with Sanofi'
            },
            {
              date: '2005',
              fa_title: 'کوبل دارو',
              en_title: 'Business Collaboration with UCB (terminated)'
            },
            {
              date: '2006',
              fa_title: 'کوبل دارو',
              en_title: 'Business Collaboration with Actelion\n Business Collaboration with TEA (Terminated)'
            },
            {
              date: '2007',
              fa_title: 'کوبل دارو',
              en_title: 'Business Collaboration with Uni Pharma\n Business Collaboration with LFB'
            },
            {
              date: '2008',
              fa_title: 'کوبل دارو',
              en_title: 'Moved to Local Production by acquiring 10% share of Abidi Lab'
            },
            {
              date: '2009',
              fa_title: 'کوبل دارو',
              en_title:
                'Under-License production of Sanofi-Aventis products\n Started planning for production of Cobel Darou product\n Business Collaboration with AstraZeneca'
            },
            {
              date: '2012',
              fa_title: 'کوبل دارو',
              en_title:
                'Dermocosmetic business with collabotration with L’oreal\n Business collaboration with Biologix\n Business collaboration with Roche Pharma'
            },
            {
              date: '2017',
              fa_title: 'کوبل دارو',
              en_title: 'Business collaboration with Novartis\n Business collaboration with GSK'
            },
            {
              date: '2018',
              fa_title: 'کوبل دارو',
              en_title: 'Business collaboration with Roche Diabetes Care'
            },
            {
              date: '2021',
              fa_title: 'کوبل دارو',
              en_title:
                'Business collaboration with Roche Diagnostics\n Supplying AstraZeneca COVID Vaccine (first shipment)'
            },
            {
              date: '2022',
              fa_title: 'کوبل دارو',
              en_title: 'Supplying the first treatment option for SMA patients (first shipment)'
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
