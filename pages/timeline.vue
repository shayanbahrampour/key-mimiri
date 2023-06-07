<template>
  <div class="timeline-page">
    <CustomCarousel
      :items="[
        {
          src: '/images/temp/cover-7.png',
          title:
            'Empowers to achieve, Inspires to create the greatest Cobel Group promise is to empower, inspire and trigger ideas that make a significant impact in how we deliver solutions. Therefore, we invest on education; not only to our '
        }
      ]"
      hide-delimiters
      title="Heritage"
    />

    <v-sheet
      :class="['mx-auto grey--text text--darken-2', !isMobile && ($vuetify.breakpoint.xl ? 'px-12' : 'px-16')]"
      :max-width="globalMaxWidth"
    >
      <div :class="['d-flex align-center pt-16 pb-10', { 'flex-column text-center px-6': isMobile }]">
        <h3
          :class="[
            'font-weight-regular bel grey--text text--darken-2 flex-shrink-0',
            isMobile ? 'f-45 text-center d-block' : 'f-50'
          ]"
        >
          Timelines
        </h3>

        <p
          :class="['mb-0 font-weight-light py-4', isMobile ? 'f-17' : 'f-20 ms-8 ps-8']"
          :style="`${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #59595B`}; color: #59595B`"
        >
          Patients are the center of all projects being conducted in the Cobel Group. Stories of hope, innovation,
          collaboration, inspiration and empowerment helps us measure our impact and inspire us to create more.
        </p>
      </div>

      <div :class="['mb-16 pb-14', { 'ps-4': isMobile }]">
        <v-expansion-panels v-model="expanded" accordion flat>
          <v-expansion-panel
            v-for="(item, i) in items"
            :id="`item-${i}`"
            :key="i"
            :class="['bg-transparent', isMobile ? 'ps-2' : 'ps-6']"
            @click="scroll(`#item-${i}`)"
          >
            <v-sheet
              :style="`margin: 50px -10px 0; background-color: ${
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
              :class="['py-8 bg-transparent', isMobile ? 'f-30' : 'f-40']"
              :style="`color: ${item.color}`"
              hide-actions
            >
              <div :class="['d-flex', isMobile ? 'align-start' : 'align-center']">
                <v-sheet
                  :color="expanded === i ? item.active : item.color"
                  class="rounded-circle me-5 flex-shrink-0 position-relative z-1"
                  height="76"
                  width="76"
                />

                <div :class="['flex-grow-1 d-flex', isMobile ? 'flex-column pt-2' : 'align-center']">
                  <span class="bel" :style="`color: ${expanded === i ? '#4c6d80' : '#66869A'}`">{{ item.title }}</span>

                  <v-spacer />

                  <v-sheet
                    :class="[
                      'f-18 px-4 py-3 text-center d-flex align-center justify-center',
                      { 'white--text': expanded === i },
                      { 'mt-1': isMobile }
                    ]"
                    :color="expanded === i ? '#66869a' : '#ECECEC'"
                    :style="`border-radius: 14px; color: #66869A`"
                    width="80"
                  >
                    <span>{{ item.date }}</span>
                  </v-sheet>
                </div>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-timeline :style="`color: ${item.color}`" align-top class="ms-n2 mt-n4 pt-0" dense>
                <v-timeline-item hide-dot>
                  <p class="font-weight-light ps-2 f-22" style="color: #59595b">
                    Cobel Darou is a leading private pharmaceutical company founded in 2002. Cobel Darou main activities
                    are registration, importation, manufacturing, distribution and sales & marketing.
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
                    <strong class="white--text">{{ child.date }}</strong>
                  </template>

                  <v-sheet
                    :class="['ps-2', isMobile ? 'd-flex align-center' : 'pt-5']"
                    min-height="70"
                    style="line-height: 30px"
                  >
                    <strong class="f-20 text-pre-line timeline-title" v-html="child.title"></strong>
                  </v-sheet>
                </v-timeline-item>
              </v-timeline>
              <v-divider style="border-color: #eeeeee; border-top-width: 2px" class="mt-8 ms-10" />
            </v-expansion-panel-content>
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
      expanded: null,
      items: [
        {
          title: 'Cobel Darou',
          color: '#f3b393',
          active: '#e86726',
          date: '2001',
          description:
            'Cobel Darou is a leading private pharmaceutical company founded in 2002. Cobel Darou main activities are registration, importation, manufacturing, distribution and sales & marketing.',
          children: [
            { date: '2001', title: 'Establishment of Cobel Darou' },
            { date: '2002', title: 'Business Collaboration with Guerbet' },
            { date: '2003', title: 'Business Collaboration with Piere Fabre' },
            {
              date: '2004',
              title:
                'Business Collaboration with Ebewe (terminated)\n Business Collaboration with MSD\n Business Collaboration with Sanofi'
            },
            {
              date: '2005',
              title: 'Business Collaboration with UCB (terminated)'
            },
            {
              date: '2006',
              title: 'Business Collaboration with Actelion\n Business Collaboration with TEA (Terminated)'
            },
            {
              date: '2007',
              title: 'Business Collaboration with Uni Pharma\n Business Collaboration with LFB'
            },
            {
              date: '2008',
              title: 'Moved to Local Production by acquiring 10% share of Abidi Lab'
            },
            {
              date: '2009',
              title:
                'Under-License production of Sanofi-Aventis products\n Started planning for production of Cobel Darou product\n Business Collaboration with AstraZeneca'
            },
            {
              date: '2012',
              title:
                'Dermocosmetic business with collabotration with L’oreal\n Business collaboration with Biologix\n Business collaboration with Roche Pharma'
            },
            {
              date: '2017',
              title: 'Business collaboration with Novartis\n Business collaboration with GSK'
            },
            {
              date: '2018',
              title: 'Business collaboration with Roche Diabetes Care'
            },
            {
              date: '2021',
              title:
                'Business collaboration with Roche Diagnostics\n Supplying AstraZeneca COVID Vaccine (first shipment)'
            },
            {
              date: '2022',
              title: 'Supplying the first treatment option for SMA patients (first shipment)'
            }
          ]
        },
        {
          title: 'Dr. Abidi Pharmaceuticals',
          description:
            'Dr. Abidi Pharmaceuticals is the first and the oldest Iranian pharmaceutical company in the private sector with more than 75 years of experience in manufacturing high quality products.',
          color: '#85bedf',
          active: '#0d7dbf',
          date: '2008',
          children: [
            { date: '1946', title: 'Establishment of Abidi Pharmaceutical Co.' },
            { date: '1958', title: 'Acquisition of the first Pharma production license' },
            { date: '2006', title: 'Acquisition of Iran FDA GDP' },
            { date: '2008', title: 'Cobel Darou Entrance' },
            { date: '2009', title: 'Under-licensed manufacturing of Sanofi products in Iran' },
            { date: '2011', title: 'New management and development plan' },
            { date: '2015', title: 'Special disease manufacturing site (Collaboration with Synthon)' },
            {
              date: '2017',
              title: 'Acquiring AstraZeneca and Novartis approval for under-licensed manufacturing in Iran'
            },
            { date: '2018', title: 'Production lines revamp' },
            { date: '2020', title: 'New packaging line establishment' },
            { date: '2021', title: '75 years birthday' },
            { date: '2022', title: 'Abidi-2 production site' }
          ]
        },
        {
          title: 'Adorateb',
          color: '#80cbb8',
          active: '#069f99',
          date: '2009',
          description:
            'Dr. Abidi Pharmaceuticals is the first and the oldest Iranian pharmaceutical company in the private sector with more than 75 years of experience in manufacturing high quality products.',
          children: [
            { date: '2001', title: 'Establishment of Cobel Darou' },
            { date: '2002', title: 'Business Collaboration with Guerbet' },
            { date: '2003', title: 'Business Collaboration with Piere Fabre' },
            {
              date: '2004',
              title:
                'Business Collaboration with Ebewe (terminated)\n Business Collaboration with MSD\n Business Collaboration with Sanofi'
            },
            {
              date: '2005',
              title: 'Business Collaboration with UCB (terminated)'
            },
            {
              date: '2006',
              title: 'Business Collaboration with Actelion\n Business Collaboration with TEA (Terminated)'
            },
            {
              date: '2007',
              title: 'Business Collaboration with Uni Pharma\n Business Collaboration with LFB'
            },
            {
              date: '2008',
              title: 'Moved to Local Production by acquiring 10% share of Abidi Lab'
            },
            {
              date: '2009',
              title:
                'Under-License production of Sanofi-Aventis products\n Started planning for production of Cobel Darou product\n Business Collaboration with AstraZeneca'
            },
            {
              date: '2012',
              title:
                'Dermocosmetic business with collabotration with L’oreal\n Business collaboration with Biologix\n Business collaboration with Roche Pharma'
            },
            {
              date: '2017',
              title: 'Business collaboration with Novartis\n Business collaboration with GSK'
            },
            {
              date: '2018',
              title: 'Business collaboration with Roche Diabetes Care'
            },
            {
              date: '2021',
              title:
                'Business collaboration with Roche Diagnostics\n Supplying AstraZeneca COVID Vaccine (first shipment)'
            },
            {
              date: '2022',
              title: 'Supplying the first treatment option for SMA patients (first shipment)'
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

  .v-expansion-panel-header:not(.v-expansion-panel-header--active) {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      margin-left: 60px;
      margin-right: 25px;
      border-bottom: 2px solid #eeeeee;
      transition: all ease 0.4s;
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

    .v-timeline-item__dot {
      width: 70px;
      height: 70px;
      box-shadow: none !important;
    }

    .v-timeline-item__inner-dot {
      opacity: 0.5;
      transition: all ease 0.4s;
    }

    .v-timeline-item {
      .timeline-title {
        color: #59595b;
        transition: all ease 0.4s;
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
      top: -30px;
      z-index: 0;
    }
  }
}
</style>
