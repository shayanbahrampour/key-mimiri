<template>
  <div v-if="!loading" class="d-flex flex-column slategrey">
    <div
      :class="['d-flex align-center justify-space-between', isMobile ? 'flex-column align-center mt-6' : 'px-16 mt-16']"
    >
      <div :class="['d-flex', isMobile ? 'flex-column align-center' : undefined]">
        <v-img :src="src(item)" height="155" max-width="155" style="border-radius: 50%" />
        <div class="d-flex flex-column justify-center ms-4">
          <p
            :class="[
              'white--text mb-0 text--darken-3 font-weight-regular',
              isRTL
                ? isMobile
                  ? 'text-center mt-2 f-30 ravi'
                  : 'f-40 ravi'
                : isMobile
                ? 'text-center mt-2 f-36 bel'
                : 'f-42 bel'
            ]"
          >
            {{ isRTL ? item.fa_full_name : item.en_full_name }}
          </p>
          <p
            :class="[
              'white--text mb-0 text--darken-3 font-weight-regular',
              isMobile ? 'text-center mt-1 f-20 ' : 'f-22',
              { 'ravi mt-1': isRTL }
            ]"
          >
            {{ isRTL ? item.fa_position : item.en_position }}
          </p>
        </div>
      </div>
      <div :class="[isMobile ? 'mt-6' : undefined]">
        <v-btn
          height="50"
          min-width="50"
          outlined
          style="border-radius: 35%; border: 2px solid white"
          width="50"
          @click="shareOnLinkedIn"
        >
          <v-img height="20" max-width="20" src="/images/icons/linkedin.png" />
        </v-btn>
        <v-btn
          class="ms-4"
          height="50"
          min-width="50"
          outlined
          style="border-radius: 35%; border: 2px solid white"
          width="50"
          @click="shareOnWhatsApp"
        >
          <v-img height="20" max-width="20" src="/images/icons/whatsapp.png" />
        </v-btn>
        <v-btn
          class="ms-4"
          height="50"
          min-width="50"
          outlined
          style="border-radius: 35%; border: 2px solid white"
          width="50"
          @click="shareOnTelegram"
        >
          <v-img height="20" max-width="20" src="/images/icons/telegram.png" />
        </v-btn>
      </div>
    </div>
    <v-expansion-panels v-if="isMobile" class="mb-4" flat>
      <v-expansion-panel class="transparent d-flex flex-column justify-center">
        <p
          v-if="!seeMore.header"
          :class="[
            'f-20 white--text text--darken-3',
            isMobile ? 'text-center mt-8 mb-0 mx-8' : 'mt-16 mx-16',
            isRTL ? 'font-weight-light mb-1' : 'font-weight-light'
          ]"
          style="line-height: 30px"
          v-html="
            isRTL
              ? item.fa_body
                ? item.fa_body.slice(0, 100) + '...'
                : ''
              : item.en_body
              ? item.en_body.slice(0, 100) + '...'
              : ''
          "
        />
        <v-expansion-panel-content class="text-center">
          <p
            v-if="seeMore.header"
            :class="[
              'f-20 white--text text--darken-3',
              isMobile ? 'text-center mt-8 mb-1' : 'mt-16 mx-16',
              isRTL ? 'font-weight-light' : 'font-weight-light'
            ]"
            style="line-height: 30px"
            v-html="isRTL ? item.fa_body : item.en_body"
          />
        </v-expansion-panel-content>
        <v-expansion-panel-header
          :class="['pa-0 ma-0 white--text justify-center f-20 font-weight-bold bg-transparent', { 'ravi ': isRTL }]"
          hide-actions
          style="height: 20px !important; margin-top: -12px !important"
          @click="seeMore.header = !seeMore.header"
          >{{ seeMore.header ? $t('button.see_less') : $t('button.see_more') }}
        </v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>
    <p
      v-else
      :class="[
        'f-20 mx-16 white--text text--darken-3 font-weight-light mb-16',
        isMobile ? 'text-center mt-8 mb-0' : 'mt-16',
        { 'ravi desktop-story-single-description': isRTL }
      ]"
      style="line-height: 30px"
      v-html="isRTL ? item.fa_body : item.en_body"
    />
    <VideoContents
      class="w-full overflow-hidden d-flex align-center"
      :poster="cover(item) ? cover(item) : '/images/temp/cover-6.png'"
      :src="video(item)"
      style="max-height: 560px"
    />
    <div :class="['h-full white']">
      <v-sheet :height="isMobile ? 10 : 16" class="custom-gradient w-full mt-1" />
      <div :class="[isMobile ? 'px-4' : 'px-16']">
        <h4
          :class="[
            'text-center text--darken-3 font-weight-regular',
            isRTL
              ? isMobile
                ? 'mt-8 f-26 mx-2 ravi desktop-story-single-description'
                : 'mt-16 f-34 ravi mx-16 desktop-story-single-title'
              : isMobile
              ? 'mt-8 f-34 mx-2 bel'
              : 'mt-16 f-40 bel'
          ]"
          style="color: #00a59b"
        >
          {{ isRTL ? item.fa_title : item.en_title }}
        </h4>
        <v-divider
          v-if="summaryValue(isRTL ? item.fa_summary : item.en_summary)"
          :class="isMobile ? 'mt-10 mx-2' : 'mt-16'"
        ></v-divider>
        <p
          :class="[
            'text--darken-3',
            isRTL
              ? isMobile
                ? 'f-22 my-6 ravi text-center desktop-story-single-description'
                : 'f-20 my-4 ravi text-end desktop-story-single-description'
              : isMobile
              ? 'f-22 my-6 text-center'
              : 'f-20 my-4 text-start'
          ]"
          style="color: #939393"
          v-html="isRTL ? item.fa_summary : item.en_summary"
        />
        <v-divider
          v-if="summaryValue(isRTL ? item.fa_summary : item.en_summary)"
          :class="!isMobile ? 'pb-16' : 'mx-2'"
        ></v-divider>
        <div class="story-detail-header">
          <h4
            :class="[
              'text--darken-3 font-weight-regular',
              isRTL
                ? isMobile
                  ? 'f-30 text-center mt-10 ravi'
                  : 'f-40 mt-16 ravi'
                : isMobile
                ? 'f-40 text-center mt-10 bel'
                : 'f-50 mt-16 bel'
            ]"
            @click="$router.push('/storytellers')"
          >
            {{ isRTL ? 'دوست دارید داستان های بیشتری گوش دهید' : 'You may also like listening more stories' }}
          </h4>
        </div>
        <v-card
          v-if="items[0]"
          elevation="0"
          :class="['d-flex', isMobile ? 'flex-column align-center mt-10' : 'justify-space-between align-center mt-16']"
          :to="!isMobile ? `${items[0].id}` : undefined"
        >
          <div :class="['d-flex storyteller-card-index', isMobile ? 'flex-column align-center' : undefined]">
            <v-img
              :height="isMobile ? '140' : '155'"
              :max-width="isMobile ? '140' : '155'"
              :src="src(items[0])"
              style="border-radius: 50%"
            />
            <div :class="['d-flex flex-column justify-center', { 'ms-4': !isMobile }]">
              <p
                :class="[
                  'grey--text text--darken-2 mb-0 storyteller-name-index',
                  isMobile ? 'text-center mt-4 f-32 font-weight-regular' : 'f-42 font-weight-regular',
                  isRTL ? 'ravi mb-2 mr-2' : 'bel'
                ]"
                :style="`color: #59595b; width: ${isMobile ? '100%' : '300px'}`"
              >
                {{ isRTL ? items[0].fa_full_name : items[0].en_full_name }}
              </p>
              <p
                :class="[
                  'mb-0 text--darken-0',
                  isRTL
                    ? isMobile
                      ? 'mt-2 mb-8 f-24 cobelgrey--text text-center ravi'
                      : 'f-20 font-weight-light ravi'
                    : isMobile
                    ? 'mt-2 mb-8 f-20 cobelgrey--text text-center font-weight-light'
                    : 'f-20 font-weight-light'
                ]"
                style="color: #939393"
              >
                {{ isRTL ? items[0].fa_position : items[0].en_position }}
              </p>
            </div>
          </div>
          <v-divider class="mx-4" color="#00a59b" vertical></v-divider>
          <p
            v-if="!isMobile"
            :class="['f-22 mb-0 text--darken-3 justify-center', { ravi: isRTL }]"
            :style="`color: #939393`"
            v-html="isRTL ? items[0].fa_body : items[0].en_body"
          />
          <v-expansion-panels v-if="isMobile && items[0]" flat>
            <v-expansion-panel class="transparent d-flex flex-column justify-center">
              <p
                v-if="!seeMore.first"
                :class="['f-22 text-center mt-0 mb-0 mx-8', isRTL ? 'font-weight-light mb-2' : ' font-weight-light']"
                style="line-height: 30px"
                v-html="
                  isRTL
                    ? items[0].fa_body
                      ? items[0].fa_body.slice(0, 100) + '...'
                      : ''
                    : items[0].en_body
                    ? items[0].en_body.slice(0, 100) + '...'
                    : ''
                "
              />

              <v-expansion-panel-content class="text-center">
                <p
                  v-if="seeMore.first"
                  :class="['f-22 text-center mt-0 mb-0 mx-8', isRTL ? 'font-weight-light mb-2' : ' font-weight-light']"
                  style="line-height: 30px"
                  v-html="isRTL ? items[0].fa_body : items[0].en_body"
                />
              </v-expansion-panel-content>
              <v-expansion-panel-header
                :class="[
                  'pa-0 ma-0 cobelgrey--text justify-center f-20 font-weight-bold bg-transparent',
                  { 'ravi ': isRTL }
                ]"
                hide-actions
                style="margin-top: -24px !important"
                @click="seeMore.first ? $router.push(`${items[0].id}`) : (seeMore.first = true)"
                >{{ $t('button.see_more') }}
              </v-expansion-panel-header>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-divider v-if="isMobile" class="mt-4" style="background-color: #00a59b; width: 350px"></v-divider>
        </v-card>
        <v-card
          v-if="items[1]"
          elevation="0"
          :to="!isMobile ? `${items[1].id}` : undefined"
          :class="['d-flex my-16', isMobile ? 'flex-column' : 'justify-space-between align-center']"
        >
          <div :class="['d-flex storyteller-card-index', isMobile ? 'flex-column align-center' : undefined]">
            <v-img
              :height="isMobile ? '140' : '155'"
              :max-width="isMobile ? '140' : '155'"
              :src="src(items[1])"
              style="border-radius: 50%"
            />
            <div :class="['d-flex flex-column justify-center', { 'ms-4': !isMobile }]">
              <p
                :class="[
                  'grey--text text--darken-2 mb-0 storyteller-name-index',
                  isMobile ? 'text-center mt-4 f-32 font-weight-regular' : 'f-42 font-weight-regular',
                  isRTL ? 'ravi mb-2 mr-2' : 'bel'
                ]"
                :style="`color: #59595b; width: ${isMobile ? '100%' : '300px'}`"
              >
                {{ isRTL ? items[1].fa_full_name : items[1].en_full_name }}
              </p>
              <p
                :class="[
                  'mb-0 text--darken-0',
                  isRTL
                    ? isMobile
                      ? 'mt-2 mb-8 f-24 cobelgrey--text text-center ravi'
                      : 'f-20 font-weight-light ravi'
                    : isMobile
                    ? 'mt-2 mb-8 f-20 cobelgrey--text text-center font-weight-light'
                    : 'f-20 font-weight-light'
                ]"
                style="color: #939393"
              >
                {{ isRTL ? items[1].fa_position : items[1].en_position }}
              </p>
            </div>
          </div>
          <v-divider class="mx-4" color="#00a59b" vertical></v-divider>
          <p
            v-if="!isMobile"
            :class="['f-22 mb-0 text--darken-3 justify-center', { ravi: isRTL }]"
            :style="`color: #939393`"
            v-html="isRTL ? items[1].fa_body : items[1].en_body"
          />
          <v-expansion-panels v-if="isMobile && items[1]" flat>
            <v-expansion-panel class="transparent d-flex flex-column justify-center">
              <p
                v-if="!seeMore.second"
                :class="['f-22 text-center mt-0 mb-0 mx-8', isRTL ? 'font-weight-light mb-2' : ' font-weight-light']"
                style="line-height: 30px"
                v-html="
                  isRTL
                    ? items[1].fa_body
                      ? items[1].fa_body.slice(0, 100) + '...'
                      : ''
                    : items[1].en_body
                    ? items[1].en_body.slice(0, 100) + '...'
                    : ''
                "
              />
              <v-expansion-panel-content class="text-center">
                <p
                  v-if="seeMore.second"
                  :class="['f-22 text-center mt-0 mb-0 mx-8', isRTL ? 'font-weight-light mb-2' : ' font-weight-light']"
                  style="line-height: 30px"
                  v-html="isRTL ? items[1].fa_body : items[1].en_body"
                />
              </v-expansion-panel-content>
              <v-expansion-panel-header
                :class="[
                  'pa-0 ma-0 cobelgrey--text justify-center f-20 font-weight-bold bg-transparent',
                  { 'ravi ': isRTL }
                ]"
                hide-actions
                style="margin-top: -24px !important"
                @click="seeMore.second ? $router.push(`${items[1].id}`) : (seeMore.second = true)"
                >{{ $t('button.see_more') }}
              </v-expansion-panel-header>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </div>
      <CTAContent path="story" />
    </div>
  </div>
</template>

<script>
import VideoContents from '~/components/shared/VideoContents';
import CTAContent from '~/components/shared/CTAContent';

export default {
  head() {
    return {
      title: this.$t('pageTitles.storytellers')
    };
  },
  components: { VideoContents, CTAContent },
  data() {
    return {
      seeMore: {
        header: false,
        first: false,
        second: false
      },
      item: null,
      loading: false,
      items: [],
      faces: [
        {
          title: 'Bahador Nayebi',
          titleRTL: 'بهادر نايبی',
          roleRTL: 'مدیر پروژه در گروه Cobel®',
          role: 'Project Manager at Cobel® Group',
          description:
            'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and are committed to enhance their physical, psychological and social quality of life through high quality and innovative solutions.',
          descriptionRTL:
            'فرايند منصفانه، به عنوان يك ارزش به مقام انسانها، به يك نياز پايهاي در آنان پاسخ ميدهد. سه اصل عدالت در فرايندها عبارتند از: تعامل، شفافيت و وضوح انتظارات.'
        },
        {
          title: 'Mohamad javid',
          titleRTL: 'محمد جاويد',
          roleRTL: 'مدیر پروژه در گروه Cobel®',
          role: 'Project Manager at Cobel® Group',
          description:
            'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and are committed to enhance their physical, psychological and social quality of life through high quality and innovative solutions.',
          descriptionRTL:
            'فرايند منصفانه، به عنوان يك ارزش به مقام انسانها، به يك نياز پايهاي در آنان پاسخ ميدهد. سه اصل عدالت در فرايندها عبارتند از: تعامل، شفافيت و وضوح انتظارات.'
        }
      ],
      textHeader: {
        compact:
          'Who advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to consume 60 mg of iron',
        compactRTL:
          'با اين حال، بازار مراقبت هاي بهداشتي با بازار آزاد در تمامي اين معيارها متفاوت است كه مي تواند منجر به ايجاد شكست بازار شود.',
        full: `${this.$t('storytellersPage.single_description')}`
      },
      textStory: {
        compact: 'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the',
        compactRTL:
          'فرايند منصفانه، به عنوان يك ارزش به مقام انسانها، به يك نياز پايهاي در آنان پاسخ ميدهد. سه اصل عدالت در فرايندها عبارتند از: تعامل، شفافيت',
        full: 'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and are committed to enhance their physical, psychological and social quality of life through high quality and innovative solutions.',
        fullRTL:
          'فرايند منصفانه، به عنوان يك ارزش به مقام انسانها، به يك نياز پايهاي در آنان پاسخ ميدهد. سه اصل عدالت در فرايندها عبارتند از: تعامل، شفافيت و وضوح انتظارات.'
      }
    };
  },
  async created() {
    this.loading = true;
    try {
      const { data } = await this.$store.dispatch('storyteller/getStorytellersDetail', { id: this.$route.params.id });
      this.item = data;
    } catch (e) {
      console.log(e);
      this.loading = false;
    }
    try {
      const { data } = await this.$store.dispatch('storyteller/getStorytellersList', {});
      let addedCount = 0;
      for (const result of data.results) {
        if (Number(result.id) !== Number(this.$route.params.id)) {
          this.items.push(result);
          addedCount++;
          if (addedCount === 2) {
            break;
          }
        }
      }
    } catch (e) {
      console.log(e);
      this.loading = false;
    }
    this.loading = false;
  },
  methods: {
    src(index) {
      const mainImage = index.files.find((item) => item.type === 'avatar_file');
      if (!mainImage) return '';

      return `${this.$imageUrl}/${mainImage.url}`;
    },
    video(index) {
      const mainImage = index.files.find((item) => item.type === 'main_file');
      if (!mainImage) return '';

      return `${this.$imageUrl}/${mainImage.url}`;
    },
    cover(index) {
      const mainImage = index.files.find((item) => item.type === 'video_cover');
      if (!mainImage) return '';

      return `${this.$imageUrl}/${mainImage.url}`;
    },
    summaryValue(content) {
      if (!content) return '';
      const pTagPattern = /<\/?p[^>]*>/g;
      const contentWithoutPTags = content.replace(pTagPattern, '');
      return contentWithoutPTags;
    },
    shareOnWhatsApp() {
      this.openShareWindow(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`);
    },
    shareOnTelegram() {
      this.openShareWindow(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`);
    },
    shareOnLinkedIn() {
      this.openShareWindow(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}`);
    },
    openShareWindow(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style lang="scss">
.desktop-story-single-title {
  line-height: 60px !important;
}

.desktop-story-single-description {
  line-height: 40px !important;
}

.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 20px;
  margin-bottom: 20px !important;
}

.storyteller-card-index {
  &:hover {
    .storyteller-name-index {
      color: slategray !important;
    }
  }
}

.story-detail-header {
  &:hover {
    h4 {
      color: slategrey !important;
      cursor: pointer;
    }
  }
}
</style>
