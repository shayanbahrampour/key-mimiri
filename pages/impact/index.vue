<template>
  <div>
    <CustomCarousel
      :items="[
        {
          src: '/images/temp/cover-5.png',
          title: $t('impactPage.slider.title'),
          description: $t('impactPage.slider.description')
        },
        {
          src: '/images/temp/cover-3.png',
          title: $t('impactPage.slider.title'),
          description: $t('impactPage.slider.description')
        }
      ]"
    />

    <v-sheet :class="['mx-auto', isMobile ? 'px-2 mt-16' : 'px-16 my-16']" :max-width="globalMaxWidth">
      <h1 :class="['bel f-50 grey--text text--darken-2 font-weight-regular', { 'text-center': isMobile }]">
        {{ $t('impactPage.title') }}
      </h1>

      <CustomTabs
        id="impact"
        :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
        class="mt-4"
        @select="
          model.category = $event;
          $fetch();
        "
      />

      <v-row v-if="items.length" align="stretch" class="my-8">
        <v-col v-for="(item, index) in items" :key="index" cols="12" md="6" xl="4">
          <ImpactCards :item="item" :style="`border-radius: 80px`" class="h-full" />
        </v-col>
      </v-row>
      <div v-else-if="!$fetchState.pending" class="mt-8">
        {{ $t('impactPage.not_found') }}
      </div>
    </v-sheet>

    <div v-if="$fetchState.pending" class="d-flex align-center justify-center">
      <v-progress-circular class="mx-auto" indeterminate />
    </div>
  </div>
</template>

<script>
import CustomTabs from '~/components/shared/CustomTabs.vue';
import ImpactCards from '~/components/impact/ImpactCards.vue';
import CustomCarousel from '~/components/shared/CustomCarousel.vue';
import { mapGetters } from 'vuex';

export default {
  components: { ImpactCards, CustomTabs, CustomCarousel },
  data() {
    return {
      model: {
        category: null
      },
      pagination: {
        current_page: 1
      },
      items: [],
      swiperOptions: {
        spaceBetween: 16,
        slidesPerView: 1.1,
        grabCursor: true
      }
    };
  },
  head() {
    return {
      title: this.$t('pageTitles.impact_stories')
    };
  },
  computed: {
    ...mapGetters({
      categories: 'impact/categories'
    })
  },
  async fetch() {
    try {
      // const { data } = await this.$store.dispatch('impact/getList', {
      //   params: {
      //     page: this.pagination.current_page,
      //     impact_story_category_id: this.model.category
      //   }
      // });
      const { data } = {
        data: {
          results: [
            {
              id: 230305135,
              en_title: 'Woman empowerment future enrichment',
              en_summary:
                '<p>Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women<\/p>',
              files: [
                { url: 'cover-5.png', type: 'column_section_file' },
                { url: 'cover-5.png', type: 'subtitle_file' },
                { url: 'cover-5.png', type: 'body_file' }
              ],
              impact_story_categories: [
                {
                  id: 47161516,
                  en_name: 'Best talent',
                  fa_name: '\u0627\u0633\u062a\u0639\u062f\u0627\u062f\u0647\u0627\u06cc \u0628\u0631\u062a\u0631'
                },
                {
                  id: 140945966,
                  en_name: 'Social responsibility',
                  fa_name: '\u0645\u0633\u0648\u0644\u06cc\u062a \u0627\u062c\u062a\u0645\u0627\u0639\u06cc'
                }
              ]
            },
            {
              id: 507360168,
              en_title: 'Rise from the society\u2028return to the society',
              en_summary:
                '<p>Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women<\/p>',
              files: [
                { url: 'cover-3.png', type: 'column_section_file' },
                { url: 'cover-3.png', type: 'subtitle_file' },
                { url: 'cover-3.png', type: 'body_file' }
              ],
              impact_story_categories: [
                {
                  id: 47161516,
                  en_name: 'Best talent',
                  fa_name: '\u0627\u0633\u062a\u0639\u062f\u0627\u062f\u0647\u0627\u06cc \u0628\u0631\u062a\u0631'
                },
                {
                  id: 230305135,
                  en_name: 'Long-term value creation',
                  fa_name:
                    '\u062e\u0644\u0642 \u0627\u0631\u0632\u0634 \u0647\u0627 \u062f\u0631 \u0628\u0644\u0646\u062f \u0645\u062f\u062a'
                }
              ]
            },
            {
              id: 47161516,
              en_title: 'Rise from the society\u2028return to the society',
              en_summary:
                '<p>Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women<\/p>',
              files: [
                { url: 'cover-2.png', type: 'column_section_file' },
                { url: 'cover-2.png', type: 'subtitle_file' },
                { url: 'cover-2.png', type: 'body_file' }
              ],
              impact_story_categories: [
                {
                  id: 47161516,
                  en_name: 'Best talent',
                  fa_name: '\u0627\u0633\u062a\u0639\u062f\u0627\u062f\u0647\u0627\u06cc \u0628\u0631\u062a\u0631'
                },
                {
                  id: 140945966,
                  en_name: 'Social responsibility',
                  fa_name: '\u0645\u0633\u0648\u0644\u06cc\u062a \u0627\u062c\u062a\u0645\u0627\u0639\u06cc'
                }
              ]
            },
            {
              id: 47161516,
              en_title: 'Rise from the society\u2028return to the society',
              en_summary:
                '<p>Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women<\/p>',
              files: [
                { url: 'cover-1.jpg', type: 'column_section_file' },
                { url: 'cover-1.jpg', type: 'subtitle_file' },
                { url: 'cover-1.jpg', type: 'body_file' }
              ],
              impact_story_categories: [
                {
                  id: 47161516,
                  en_name: 'Best talent',
                  fa_name: '\u0627\u0633\u062a\u0639\u062f\u0627\u062f\u0647\u0627\u06cc \u0628\u0631\u062a\u0631'
                },
                {
                  id: 140945966,
                  en_name: 'Social responsibility',
                  fa_name: '\u0645\u0633\u0648\u0644\u06cc\u062a \u0627\u062c\u062a\u0645\u0627\u0639\u06cc'
                }
              ]
            }
          ]
        }
      };

      this.items = data.results;
      // this.pagination = data.pagination;
    } catch (e) {
      console.log(e);
    }
  },
  created() {
    if (this.categories && this.categories.length === 0) this.$store.dispatch('impact/getCategories');
  }
};
</script>

<style lang="scss" scoped></style>
