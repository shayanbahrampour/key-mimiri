<template>
  <div :class="['my-16 home-impact', isMobile ? 'coverflow' : 'pt-3']">
    <v-sheet :class="['mx-auto grey--text text--darken-2', { 'px-16': !isMobile }]" :max-width="globalMaxWidth">
      <div :class="['d-flex align-center', isMobile ? 'flex-column text-center px-6 mb-8' : 'mb-14']">
        <h3
          :class="[
            'font-weight-regular grey--text text--darken-2 flex-shrink-0',
            isRTL ? 'ravi' : 'bel',
            { 'text-center d-block': isMobile },
            isMobile ? (isRTL ? 'f-33' : 'f-45') : isRTL ? 'f-45' : 'f-50'
          ]"
        >
          {{ $t('homePage.impact.title') }}
        </h3>

        <v-divider v-if="isMobile" :class="['w-full', { 'mt-3': isRTL }]" />

        <p
          :class="[
            'mb-0 py-4',
            isMobile ? 'f-16' : 'f-20 ms-8 ps-8',
            isRTL ? 'font-weight-bold anjoman' : 'font-weight-light'
          ]"
          :style="`${!isMobile && `border-${isRTL ? 'right' : 'left'}: 1px solid #59595B`}; color: #59595B;${
            isRTL && !isMobile && 'line-height:35px'
          }`"
        >
          {{ $t('homePage.impact.description') }}
        </p>
      </div>

      <CustomTabs
        :items="categories.map((item) => ({ ...item, title: item[`${$i18n.locale}_name`] }))"
        @select="
          model.category = $event;
          $fetch();
        "
      />
    </v-sheet>

    <v-sheet :max-width="globalMaxWidth" class="mx-auto">
      <client-only>
        <swiper
          id="impactSwiper"
          key="impactSwiper"
          :class="[`w-full me-0`, isMobile ? 'mt-8 px-6' : 'my-8 px-16']"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <template v-if="items.length !== 0">
            <swiper-slide v-for="(item, index) in items" :key="index">
              <ImpactCards :item="item" :showSummary="true" :style="`border-radius: ${isMobile ? '30px' : '80px'}`" />
            </swiper-slide>
          </template>
          <swiper-slide v-if="$fetchState.pending">
            <v-progress-circular indeterminate style="min-height: 400px" />
          </swiper-slide>
        </swiper>

        <div v-if="items.length === 0 && !$fetchState.pending" class="mt-8 text-center">
          {{ $t('impactPage.not_found') }}
        </div>
      </client-only>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CustomTabs from '~/components/shared/CustomTabs.vue';
import ImpactCards from '~/components/impact/ImpactCards.vue';

export default {
  components: { ImpactCards, CustomTabs },
  data() {
    return {
      model: {
        category: null
      },
      items: []
    };
  },
  computed: {
    ...mapGetters({
      categories: 'impact/categories'
    }),
    swiperOptions() {
      return {
        grabCursor: true,
        centeredSlidesBounds: true,
        centeredSlides: this.isMobile,
        spaceBetween: this.isMobile ? 14 : 28,
        slidesPerView: 1.3,
        breakpoints: {
          1904: {
            slidesPerView: 2.5
          },
          1264: {
            slidesPerView: 1.8
          },
          960: {
            slidesPerView: 1.4
          },
          760: {
            slidesPerView: 1.4
          }
        }
      };
    }
  },
  async fetch() {
    try {
      // const { data } = await this.$store.dispatch('impact/getList', {
      //   params: {
      //     page: 1,
      //     impact_story_category_id: this.model.category
      //   }
      // });

      const { data } = {
        data: {
          results: [
            {
              id: 230305135,
              en_title: 'Woman empowerment future enrichment',
              fa_title: 'توانمندسازی زن اندوخته ای برای آینده',
              fa_summary: 'کمبود آهن که منجر به کم خونی می شود، اثرات منفی بر سلامتی همه افراد به ویژه زنان دارد...',
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
              fa_title: 'برخاستن از جامعه بازگشت به جامعه',
              fa_summary: 'کمبود آهن که منجر به کم خونی می شود، اثرات منفی بر سلامتی همه افراد به ویژه زنان دارد...',
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
              fa_title: 'برخاستن از جامعه بازگشت به جامعه',
              fa_summary: 'کمبود آهن که منجر به کم خونی می شود، اثرات منفی بر سلامتی همه افراد به ویژه زنان دارد...',
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
            }
          ]
        }
      };
      this.items = data.results;
    } catch (e) {
      console.log(e);
    }
  },
  created() {
    if (this.categories && this.categories.length === 0) this.$store.dispatch('impact/getCategories');
  }
};
</script>

<style lang="scss">
.home-impact {
  &.coverflow {
    .swiper-slide.swiper-slide-active {
      transition: transform ease-in 0.2s;
    }

    .swiper-slide.swiper-slide-next,
    .swiper-slide.swiper-slide-prev {
      transform: scale(0.9);
      transition: transform ease-out 0.1s;
    }
  }
}
</style>
