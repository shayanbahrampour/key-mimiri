<template>
  <div
    v-if="isMobile"
    :class="['d-flex align-center', isMobile ? 'flex-column px-4 mt-10' : 'px-16 my-16', isRTL && 'ltr']"
  >
    <v-img :max-height="isMobile ? '220' : '420'" :src="file" :width="isMobile ? '350' : '520'" />

    <p
      :class="['font-weight-light  mx-4', isMobile ? 'mt-6 f-20' : 'f-24', { 'text-end ravi rtl': isRTL }]"
      style="color: #939393; line-height: 2"
      v-html="conclusion"
    />
  </div>
  <div v-else :class="['align-start', isMobile ? 'flex-column px-4 mt-10' : 'px-16 my-16', isRTL && 'ltr']">
    <v-img
      class="mr-4"
      :max-height="isMobile ? '220' : '420'"
      :src="file"
      :width="isMobile ? '350' : '520'"
      style="float: left !important"
    />

    <p
      :class="['font-weight-light mx-4', isMobile ? 'mt-6 f-20' : 'f-24', { 'text-end ravi rtl': isRTL }]"
      style="color: #939393; line-height: 2; text-align: justify !important"
      v-html="conclusion"
    />
  </div>
</template>

<script>
export default {
  props: {
    conclusion: {
      type: String,
      default: ''
    },
    file: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      item: {
        ltr: 'WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).',
        rtl: 'قيمت گذاري مبتني بر ارزش كارآمدترين روش قيمت گذاري است، زيرا ارزش افزوده يك استراتژي درماني جديد را نسبت به استراتژيهاي درماني قبلي محاسبه مي كند. اين روش عليرغم محدوديتهاي خود، به دليل ارتقا نتايج باليني درمان، تشويق به نوآوري و ساخت درمانهاي كارامد، بهبود شفافيت در تصميمگيري و در نتيجه تخصيص كارآمد منابع سلامت به عنوان بهترين روش قيمتگذاري داروها شناخته ميباشد.'
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
