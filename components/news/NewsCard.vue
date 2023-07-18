<template>
  <div class="mb-10">
    <div v-if="isMobile" class="d-flex justify-center">
      <h4 :class="['text--darken-3 font-weight-regular mb-6', isRTL ? 'ravi f-30' : 'bel f-36']" style="color: #59595b">
        {{ title }}
      </h4>
    </div>

    <div v-for="(item, i) in items" :key="i" class="d-flex flex-column justify-center mb-0">
      <v-card
        v-if="!isMobile"
        :class="['d-flex rounded-0 overflow-hidden me-4 custom-news-card bg-transparent', isRTL && 'ltr']"
        :ripple="false"
        :to="localePath(`/${path}/${item.id}`)"
        color="transparent"
        elevation="0"
        style="transition: all ease-in 0.4s"
      >
        <div class="d-flex">
          <v-img :src="src(item)" height="200" width="250" />
        </div>
        <div
          :class="[`d-flex flex-column py-2 ms-${isRTL ? '0' : '16'} align-${isRTL ? 'end' : 'start'}`]"
          style="width: 90%"
        >
          <h4
            :class="[
              'text--darken-3 font-weight-regular mb-auto cobelgrey--text custom-card-title',
              isRTL ? 'ravi f-34' : 'bel f-40'
            ]"
          >
            {{ isRTL ? item.fa_title : item.en_title }}
          </h4>
          <p
            :class="['text--darken-3 mb-auto', isRTL ? 'ravi text-end f-16' : 'font-weight-light f-18']"
            style="max-width: 90%; color: #59595b; line-height: 26px"
            v-html="isRTL ? item.fa_title : item.en_title"
          ></p>
          <div v-if="!isRTL" class="d-flex justify-space-between mt-4" style="width: 60%">
            <p class="f-16 mb-0" style="color: #59595b">Read time: {{ item.read_time ? item.read_time : '0' }} min</p>
            <p class="f-16 mb-0" style="color: #59595b">
              written by: {{ item.en_author ? item.en_author : undefined }}
            </p>
            <p class="f-16 mb-0" style="color: #59595b">
              Published
              {{
                item.published_at
                  ? isRTL
                    ? $dayjs(item.published_at).calendar('jalali').locale('fa').format('MMMM YYYY')
                    : $dayjs(item.published_at).calendar('gregory').locale('en').format('MMMM YYYY')
                  : '-'
              }}
            </p>
          </div>
          <div v-else class="d-flex justify-space-between mt-4 ravi rtl" style="width: 50%">
            <p class="f-14 mb-0" style="color: #59595b">
              زمان مطالعه: {{ item.read_time ? item.read_time : '0' }} دقیقه
            </p>
            <p class="f-14 mb-0" style="color: #59595b">نویسنده: {{ item.fa_author ? item.fa_author : undefined }}</p>
            <p class="f-14 mb-0" style="color: #59595b">
              منتشر شده:
              {{
                item.published_at
                  ? isRTL
                    ? $dayjs(item.published_at).calendar('jalali').locale('fa').format('MMMM YYYY')
                    : $dayjs(item.published_at).calendar('gregory').locale('en').format('MMMM YYYY')
                  : '-'
              }}
            </p>
          </div>
        </div>
      </v-card>
      <v-card
        v-else
        :ripple="false"
        :to="localePath(`/${path}/${item.id}`)"
        class="d-flex overflow-hidden bg-transparent custom-news-card"
        color="transparent"
        elevation="0"
      >
        <v-card :class="['d-flex flex-column rounded-0 align-start mx-6']" elevation="0" style="overflow: hidden">
          <v-img :src="src(item)" height="200" width="100%" />
          <div class="d-flex flex-column pt-2 mx-0 flex" style="width: 90%">
            <h4
              :class="[
                'text--darken-3 my-4 custom-card-title',
                isRTL ? 'ravi f-25 font-weight-bold' : 'bel f-28 font-weight-regular'
              ]"
              style="color: #59595b"
            >
              {{ isRTL ? item.fa_title : item.en_title }}
            </h4>
            <p
              :class="['text--darken-0 f-20 font-weight-light mb-6', { ' ravi': isRTL }]"
              style="color: #59595b"
              v-html="isRTL ? item.fa_title : item.en_title"
            ></p>
            <div v-if="!isRTL" class="d-flex flex-column font-weight-light" style="width: 90%">
              <p class="f-14 mb-2 d-flex align-center" style="color: #59595b">
                <v-img class="me-1" contain height="12" max-width="12" src="/images/news/timer.svg" />
                {{ item.read_time ? item.read_time : '0' }}min
              </p>
              <p class="f-14 mb-2 d-flex align-center" style="color: #59595b">
                <v-img class="me-1" contain height="12" max-width="12" src="/images/news/pen-nib.svg" />
                {{ item.en_author ? item.en_author : undefined }}
              </p>
              <p class="f-14 mb-0 d-flex align-center" style="color: #59595b">
                <v-img class="me-1" contain height="12" max-width="12" src="/images/news/bullhorn.svg" />
                {{
                  item.published_at
                    ? $dayjs(item.published_at).calendar('gregory').locale('en').format('MMMM YYYY')
                    : '-'
                }}
              </p>
            </div>
            <div v-else class="d-flex flex-column font-weight-bold" style="width: 90%">
              <p class="f-16 mb-2 d-flex align-center" style="color: #59595b">
                <v-img class="me-1" contain height="12" max-width="12" src="/images/news/timer.svg" />
                {{ item.read_time ? item.read_time : '۰' }} دقیقه
              </p>
              <p class="f-16 mb-2 d-flex align-center" style="color: #59595b">
                <v-img class="me-1" contain height="12" max-width="12" src="/images/news/pen-nib.svg" />
                {{ item.fa_author ? item.fa_author : undefined }}
              </p>
              <p class="f-16 mb-0 d-flex align-center" style="color: #59595b">
                <v-img class="me-1" contain height="12" max-width="12" src="/images/news/bullhorn.svg" />
                زمان انتشار
                {{
                  item.published_at
                    ? $dayjs(item.published_at).calendar('jalali').locale('fa').format('MMMM YYYY')
                    : '-'
                }}
              </p>
            </div>
          </div>
        </v-card>
      </v-card>
      <v-divider v-if="i !== items.length" :class="[!isMobile ? 'my-8 me-6' : 'mx-6 my-10']"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    src(index) {
      if (!index && !index.files.length) return '';
      if (this.path === 'news') {
        const mainImage = index.files.find((item) => item.type === 'column_section_file');
        if (!mainImage) return '';
        return `${this.$imageUrl}/${mainImage.url}`;
      } else if (this.path === 'education') {
        const mainImage = index.files.find((item) => item.type === 'main_file');
        if (!mainImage) return '';
        return `${this.$imageUrl}/${mainImage.url}`;
      }
    }
  },
  data() {
    return {
      itemsLTR: {
        title: 'Rise from the society return to the society',
        description:
          'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and are committed to enhance their physical, psychological and social quality of life through high quality and innovative solutions.',
        short_description: 'In Cobel Group, acknowledge importance of woman empowerment and inspir....'
      },
      itemsRTL: {
        title: 'توانمندسازی زن اندوخته ای برای آینده',
        description:
          'هنگامی كه مشتری تصمیم بر خرید محصولی میگیرد، ارزش برآورده شده را در مقابل هزینهای كه به فروشنده پرداخت میكند، می سنجد. در بازار آزاد، با وجود بازیگران متعدد، اطلاعات مساوی در هر دو طرف خریدار و فروشنده، امكان ورود و خروج آزادانه از بازار و قیمت گذاری آزاد، قیمت تعادلی بر اساس عرضه و تقاضا تعیین می شود.',
        short_description: 'هنگامی كه مشتری تصمیم بر خرید محصولی میگیرد، ارزش برآورده شده را در مقابل هزینهای كه به...'
      }
    };
  }
};
</script>

<style lang="scss">
.custom-news-card {
  .v-image {
    filter: grayscale(100%);
    transition: all ease-in 0.4s;
  }

  &:hover {
    .custom-card-title {
      color: slategrey !important;
      transition: all ease-in 0.4s;
    }

    .v-image {
      filter: grayscale(0%);
    }
  }
}
</style>
