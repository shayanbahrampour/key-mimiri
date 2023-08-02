<template>
  <v-sheet :class="['mx-auto grey--text text--darken-2', isMobile ? 'px-4' : 'px-16 mb-16 pb-16']">
    <div :class="['d-flex flex-column align-center justify-center', isMobile ? 'py-16' : 'pt-10']">
      <h3
        :class="[
          'grey--text text--darken-2 font-weight-regular text-center d-block',
          isMobile ? (isRTL ? 'f-33' : 'f-40') : isRTL ? 'f-45' : 'f-60',
          isRTL ? 'ravi' : 'bel'
        ]"
      >
        {{ isRTL ? model.fa_text : model.en_text }}
      </h3>
      <v-btn
        :block="isMobile"
        :class="['f-18 px-16 text-capitalize', isRTL ? 'mt-4' : 'mt-4']"
        color="primary"
        depressed
        exact
        large
        rounded
        :href="model.address"
        target="_blank"
      >
        <span :class="['px-15', isRTL ? 'font-weight-bold anjoman' : 'font-weight-light']">{{
          $t('homePage.click_here')
        }}</span>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: 'story'
    }
  },
  data() {
    return {
      model: {
        fa_text: 'داستان‌هایتان را با ما به اشتراک بگذارید',
        en_text: 'Share your inspiring story',
        link: '',
        address: ''
      }
    };
  },
  async fetch() {
    if (this.path !== 'story') {
      this.fa_text = 'پروژه‌هایتان را با ما به اشتراک بگذارید';
      this.en_text = 'Share your inspiring impact story';
    }
    try {
      const { data } = await this.$store.dispatch(
        `call_to_actions/${this.path !== 'story' ? 'getCTAimpact' : 'getCTAstory'}`,
        {}
      );
      this.model.fa_text = data.fa_name;
      this.model.en_text = data.en_name;
      this.model.address = data.link;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped></style>
