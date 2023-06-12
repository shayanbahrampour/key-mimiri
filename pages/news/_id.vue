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
      // console.log(data);
      // this.details = data;
      this.detail = {
        id: 230305135,
        read_time: 13,
        en_author: 'Mehrab Mohammadi',
        fa_author: 'مهراب محمدی',
        status: 'published',
        published_at: '2023-05-27 12:19:14',
        short_link:
          '\u0641\u0627\u0626\u0632\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0631\u0627\u06cc \u0639\u0646\u0648\u0627\u0646 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a',

        en_title: 'Woman empowerment future enrichment',
        en_subtitle:
          'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and are committed to enhance their physical, psychological and social quality of life through high quality and innovative solutions.',
        en_body_subtitle: 'Sistan and Balouchestan, highest prevalence of Iron deficiency in Iran',
        en_summary:
          'Iron deficiency, leading to Anemia, has negative health effects on all individuals, especially women, and causes enormous social and financial burden on the societies. -Economic burden of Anemia has reverse association with sociodemographic factors, including nutrition, access to health solutions and education. Iran has a high prevalence of Anemia. We responded to this challenge with a comprehensive package of health solutions, aiming for all dimensions of health-related quality of life (HRQoL).',
        en_body_title_1:
          '32 Million people in need of 2 Billion doses of iron supplement; less than 800 Million doses is consumed',
        en_body_title_2: 'providing high‐quality supplements, not only for women, but also for men and children.',
        en_body_description_2:
          'Lastly, acknowledging our social responsibility commitments, we have identified various underprivileged provinces with the highest prevalence of iron deficiency in women, such as Sistan and Balouchestan province and Dahak village, and supplied FerroFort supplements for the need of 6,000 people for a time horizon of one year as part of our Abidi 75th birthday project, aimed at empowering and inspiring women in all sectors of Iranian society.',
        en_body_description_3:
          'We at Cobel Group recognize the importance of woman empowerment and are committed to enhancing their physical, psychological, and social quality of life through high‐quality and innovative healthcare solutions.',
        en_body_description_1: `WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to consume 60 mg of iron supplements per week.
        This amount should be higher in pregnant women and any deficiencies will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
        Studies conducted by Cobel Group medico-marketing teams indicated that there are 32 million people in Iran, who require a total amount of 2 Billion doses of Iron supplements; however, surprisingly the consumed amount is less than 800 million doses, based on annual sale statistics.
        It means that 60 percentage of the people who are required to consume Iron supplements to prevent or manage Anemia, are not rationally using it.
        This could be highly affected by lack of awareness and access challenges to high quality Iron supplements.`,
        fa_body_title_1:
          '32 میلیون نفر به 2 میلیارد دوز مکمل آهن نیاز دارند. کمتر از 800 میلیون دوز تا امروز مصرف شده است',
        fa_body_title_2: 'ارائه مکمل های با کیفیت بالا، نه تنها برای زنان، بلکه برای مردان و کودکان.',
        fa_body_description_2:
          'در نهایت با اذعان به تعهدات مسئولیت اجتماعی خود، استان‌های کم برخوردار با بیشترین شیوع فقر آهن در زنان مانند استان سیستان و بلوچستان و روستای دهک را شناسایی کرده‌ایم و مکمل‌های فروفورت را برای نیاز 6000 نفر برای یک افق زمانی یک نفر تامین کرده‌ایم. سال به عنوان بخشی از پروژه تولد 75 سالگی عابدی ما با هدف توانمندسازی و الهام بخشیدن به زنان در تمام بخش های جامعه ایران است.',
        fa_body_description_3:
          'ما در گروه Cobel اهمیت توانمندسازی زنان را می شناسیم و متعهد به ارتقای کیفیت زندگی فیزیکی، روانی و اجتماعی آنها از طریق راه حل های مراقبت بهداشتی با کیفیت بالا و نوآورانه هستیم.',
        fa_body_description_1: `WHO توصیه می کند که همه زنان در سنین باروری خود، چه مبتلا به کمبود آهن باشند و چه نباشند، باید دچار کمبود آهن باشند
نیاز به مصرف 60 میلی گرم مکمل آهن در هفته. این مقدار در بارداری باید بیشتر باشد
زنان و هر گونه کمبودی نه تنها بر خود آنها تأثیر می گذارد، بلکه بر جنین آنها نیز تأثیر می گذارد. علاوه بر این،
مردان و زنان یائسه ایرانی شیوع 2 کم خونی دارند و باید درمان شوند
بر این اساس بیماری (3).
مطالعات انجام شده توسط تیم های بازاریابی پزشکی گروه Cobel نشان داد که
32 میلیون نفر در ایران وجود دارند که در مجموع به 2 میلیارد دوز مکمل آهن نیاز دارند.
با این حال، با کمال تعجب میزان مصرف بر اساس فروش سالانه کمتر از 800 میلیون دوز است
آمار. یعنی 60 درصد از افراد ملزم به مصرف مکمل های آهن هستند
برای پیشگیری یا مدیریت کم خونی، به طور منطقی از آن استفاده نمی کنند. این می تواند به شدت تحت تأثیر کمبود قرار گیرد
آگاهی و چالش های دسترسی به مکمل های آهن با کیفیت بالا.مار. یعنی 60 درصد از افراد ملزم به مصرف مکمل های آهن هستند
برای پیشگیری یا مدیریت کم خونی، به طور منطقی از آن استفاده نمی کنند. این می تواند به شدت تحت تأثیر کمبود قرار گیرد
آگاهی و چالش های دسترسی به مکمل های آهن با کیفیت بالا.`,

        fa_title: 'توانمند سازی امروز زنان، توانگری فردای جامعه',
        fa_subtitle:
          'در گروه کوبل، به اهمیت توانمندسازی و الهام بخشی زنان به تمام بخش‌های جامعه اذعان داشته و متعهد به ارتقای کیفیت زندگی جسمی، روانی و اجتماعی آن‌ها از طریق راه‌حل‌های باکیفیت و نوآورانه است.',
        fa_body_subtitle: 'سیستان و بلوچستان بیشترین شیوع فقر آهن در ایران',
        fa_summary: `کمبود آهن که منجر به کم خونی می شود، اثرات منفی بر سلامتی همه افراد به خصوص دارد
زنان، بار اجتماعی و مالی زیادی را بر جوامع وارد می کند.
بار اقتصادی کم خونی با عوامل اجتماعی جمعیت شناختی ارتباط معکوس دارد.
از جمله تغذیه، دسترسی به راه حل های بهداشتی و آموزش. ایران شیوع بالایی از کم خونی دارد.
ما به این چالش با یک بسته جامع از راه‌حل‌های سلامت، با هدف تمام ابعاد کیفیت زندگی مرتبط با سلامت (HRQoL) پاسخ دادیم.`,
        fa_column_section:
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
            en_name: 'Long-term value creation',
            fa_name: 'ارزش آفرينی مسئوليت اجتماعی'
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
