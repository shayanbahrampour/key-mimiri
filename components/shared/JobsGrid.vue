<template>
  <v-container v-if="!isMobile" class="d-flex flex-column justify-center pl-0 w-full">
    <v-row no-gutters>
      <template v-for="(item, n) in items">
        <v-col :key="n" cols="6">
          <v-card :class="['py-10', n % 2 === 1 ? 'ps-10' : 'pe-10']" elevation="0" color="transparent" outline tile>
            <h4 :class="['f-30 text--darken-3 font-weight-regular white--text']" style="font-family: IBM Plex Mono">
              {{ item.en_title }}
            </h4>
            <p
              :class="['f-18 mt-4 mb-0 text--darken-3 mb-auto white--text']"
              style="height: 120px !important; font-family: Gabarito"
            >
              {{ item.en_summary }}
            </p>
            <div class="d-flex align-center mt-6" style="height: 60px !important">
              <v-btn
                :class="['rounded d-flex justify-center white--text f-14']"
                :href="item.link"
                target="_blank"
                color="slategrey"
                elevation="0"
                height="40"
                outlined
                min-width="160"
                style="font-family: Gabarito"
              >
                Check It Out
              </v-btn>
              <v-spacer></v-spacer>
              <v-img :src="`/images/timeline/${item.logo}`" :max-width="item.logoWidth" :height="item.logoHeight" />
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
  <div v-else class="d-flex flex-column mb-16 px-6">
    <div v-for="(item, i) in items" :key="i" class="d-flex flex-column">
      <h4 :class="['f-30 text--darken-3 font-weight-regular white--text']" style="font-family: IBM Plex Mono">
        {{ isRTL ? item.fa_title : item.en_title }}
      </h4>
      <p
        :class="['f-18 text--darken-3 mt-2 mb-auto white--text']"
        style="max-width: 80%; line-height: 24px; font-family: Gabarito"
      >
        {{ isRTL ? item.fa_summary : item.en_summary }}
      </p>
      <div class="d-flex flex-column align-start mt-6">
        <v-img :src="`/images/timeline/${item.logo}`" :max-width="item.logoWidth" :height="item.logoHeight" />
        <v-btn
          :class="['rounded d-flex justify-center white--text f-20 mt-6 font-weight-bold']"
          :href="item.link"
          target="_blank"
          elevation="0"
          outlined
          height="50"
          min-width="100%"
        >
          Check it out
        </v-btn>
      </div>

      <v-divider class="my-10"></v-divider>
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
          en_title: 'MAAN - Patients App',
          fa_title: 'کوبل دارو',
          logo: 'logo-maan.png',
          logoWidth: 80,
          logoHeight: 90,
          link: 'https://applife.ir/',
          en_summary:
            'Maan is a leading private pharmaceutical company founded in 2002. Maan core activities encompass pharmaceutical registration, importation, and sales & marketing of multinational brands'
        },
        {
          en_title: 'MAAN - Physicians App',
          fa_title: 'عبیدی',
          logoWidth: 80,
          logoHeight: 90,
          logo: 'logo-maan.png',
          link: 'https://doctor.applife.ir/',
          en_summary:
            'Maan is a leading private pharmaceutical company founded in 2002. Maan core activities encompass pharmaceutical registration, importation, and sales & marketing of multinational brands'
        },
        {
          en_title: 'MAAN - Admin Panel',
          logoWidth: 80,
          logoHeight: 90,
          logo: 'logo-maan.png',
          fa_title: 'آدوراطب',
          link: 'https://admin.applife.ir/',
          en_summary:
            'Maan is a leading private pharmaceutical company founded in 2002. Maan core activities encompass pharmaceutical registration, importation, and sales & marketing of multinational brands'
        },
        {
          en_title: 'Cobel Group Website',
          logoWidth: 160,
          logoHeight: 50,
          logo: 'cobelgroup.png',
          fa_title: 'گروه کوبل',
          link: 'https://cobel.applife.ir/',
          en_summary:
            'Cobel Group® is a private pharmaceutical company with over 3000 employees and 100 national brands, encompassing a complete and integrated pharmaceutical cycle within itself. The group strives to be a catalyst and creator of new knowledge and solutions, with a focus on human health.'
        },
        {
          en_title: 'Cobel Daru Admin Panel',
          logoWidth: 160,
          logoHeight: 50,
          logo: 'cobelgroup.png',
          fa_title: 'گروه کوبل',
          link: 'https://admin-cobel.applife.ir/',
          en_summary:
            'Cobel Group® is a private pharmaceutical company with over 3000 employees and 100 national brands, encompassing a complete and integrated pharmaceutical cycle within itself. The group strives to be a catalyst and creator of new knowledge and solutions, with a focus on human health.'
        },
        {
          en_title: 'Coach Crew',
          logoWidth: 240,
          logoHeight: 50,
          logo: 'logo-coach.png',
          fa_title: 'گروه کوبل',
          link: 'https://docs.business.coachcrew.tech/',
          en_summary:
            'Coach Crew is a startup which helps students and skilled-tech guys to find jobs abroad. Coach Crew started this journey in 2020 and its based in Germany'
        }
      ],
      news: []
    };
  }
};
</script>

<style lang="scss"></style>
