<template>
  <div class="mb-10">
    <div v-if="isMobile" class="d-flex justify-center">
      <h4 :class="['text--darken-3 font-weight-regular', isRTL ? 'ravi f-30' : 'bel f-36']" style="color: #59595b">
        {{ title }}
      </h4>
    </div>

    <div v-for="i in 4" :key="i" class="d-flex justify-center mb-4">
      <v-card
        :class="['d-flex rounded-xl overflow-hidden align-center', !isMobile ? 'custom-story-card me-4' : undefined]"
        :to="localePath('/storytellers/1234')"
        elevation="0"
        style="border: 2px solid white"
      >
        <div
          :class="['d-flex py-6 px-2', isMobile ? 'flex-column align-center' : 'justify-space-between align-center']"
        >
          <div :class="['d-flex', isMobile ? 'flex-column align-center justify-center' : undefined]">
            <v-img
              :class="['me-4', !isMobile ? 'elevation-3' : undefined]"
              :height="isMobile ? '140' : '155'"
              :max-width="isMobile ? '140' : '155'"
              src="/images/face/bahador.png"
              style="border-radius: 50%"
            />
            <div :class="['d-flex flex-column justify-center', !isMobile ? 'ms-4' : undefined]">
              <p
                :class="[
                  'mb-0 text--darken-3',
                  isMobile ? 'text-center mt-4 f-32 font-weight-regular' : 'f-42 font-weight-regular story-name',
                  isRTL ? 'ravi' : 'bel'
                ]"
                style="color: #59595b"
              >
                {{ isRTL ? itemsRTL.title : items.title }}
              </p>
              <p
                :class="[
                  'mb-0 text--darken-0',
                  isMobile ? 'mt-2 f-24 cobelgrey--text' : 'f-20 font-weight-light',
                  isRTL ? 'ravi' : 'bel'
                ]"
                style="color: #939393"
              >
                {{ isRTL ? itemsRTL.role : items.role }}
              </p>
              <v-divider v-if="isMobile" class="mt-2 mb-6" style="background-color: #00a59b"></v-divider>
            </div>
          </div>
          <v-divider class="mx-4" color="#00a59b" vertical></v-divider>
          <p
            v-if="!isMobile"
            :class="['f-22 mb-0 text--darken-3 justify-center', { ravi: isRTL }]"
            style="max-width: 58%; color: #939393"
          >
            {{ isRTL ? itemsRTL.description : items.description }}
          </p>
          <p
            v-else
            :class="[
              'f-24 text-center mx-6 mb-0 text--darken-0 cobelgrey--text font-weight-light',
              { 'ravi mobile-story-description': isRTL }
            ]"
          >
            {{ isRTL ? itemsRTL.description : items.description }}
            <br />
            <span :class="['cobelgrey--text font-weight-bold', { 'ravi ': isRTL }]">{{ $t('shared.see_more') }}</span>
          </p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      items: {
        title: 'Bahador Nayebi',
        role: 'Project Manager at Cobel® Group',
        description:
          'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the society and are committed to enhance their physical, psychological and social quality of life through high quality and innovative solutions.',
        short_description:
          'In Cobel Group, acknowledge importance of woman empowerment and inspiration to all sectors of the'
      },
      itemsRTL: {
        title: 'بهادر نایبی',
        role: 'مدیر پروژه در گروه Cobel®',
        description:
          'فرایند منصفانه، به عنوان یك ارزش به مقام انسانها، به یك نیاز پایهای در آنان پاسخ میدهد. سه اصل عدالت در فرایندها عبارتند از: تعامل، شفافیت و وضوح انتظارات.',
        short_description:
          'فرایند منصفانه، به عنوان یك ارزش به مقام انسانها، به یك نیاز پایهای در آنان پاسخ میدهد. سه اصل عدالت در فرایندها عبارتند از: تعامل، شفافیت'
      }
    };
  }
};
</script>

<style lang="scss">
.custom-story-card {
  &:hover {
    .story-name {
      color: slategrey !important;
    }
  }
}
.mobile-story-description {
  line-height: 30px;
}
</style>
