<template>
  <ImpactContent :item="detail" :relatedContents="items" />
</template>

<script>
import ImpactContent from '~/components/impact/ImpactContent.vue';

export default {
  components: { ImpactContent },
  data() {
    return {
      detail: null,
      items: []
    };
  },
  head() {
    return {
      title: this.$t('pageTitles.press')
    };
  },
  async fetch() {
    try {
      // const { data } = await this.$store.dispatch('impact/getList', { id: this.$route.params.id });
      // this.details = data;
      this.detail = {
        id: 230305135,
        read_time: 1,
        fa_author:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',
        status: 'published',
        published_at: '2023-05-27 12:19:14',
        short_link:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',
        fa_title:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',
        fa_body_subtitle:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',
        fa_body:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',
        fa_subtitle:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',
        fa_column_section:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',
        fa_summary:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',
        files: [
          {
            url: '5ba10f1a-ecb7-11ed-92d8-1e8a2de1a255.jpg',
            type: 'column_section_file'
          },
          {
            url: 'a9c2d7d2-ecb7-11ed-87cc-1e8a2de1a255.jpg',
            type: 'subtitle_file'
          },
          {
            url: 'baf30de2-ecb7-11ed-bed4-1e8a2de1a255.jpg',
            type: 'body_file'
          }
        ],
        tags: [
          {
            fa_name: 'faeture 1',
            en_name: 'sample_tag_1'
          },
          {
            fa_name: 'faeture 2',
            en_name: 'sample_tag_2'
          }
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
      };
    } catch (e) {
      console.log(e);
    }
  },
  created() {
    this.getRelated();
  },
  methods: {
    async getRelated() {
      try {
        // const { data } = await this.$store.dispatch('impact/getList', {
        //   params: {
        //     page: 1
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
              },
              {
                id: 47161516,
                fa_title: 'برخاستن از جامعه بازگشت به جامعه',
                fa_summary: 'کمبود آهن که منجر به کم خونی می شود، اثرات منفی بر سلامتی همه افراد به ویژه زنان دارد...',
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
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
