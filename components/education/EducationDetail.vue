<template>
  <div :class="['d-flex align-center', isMobile ? 'flex-column px-4 mt-10' : 'px-16 my-16']">
    <v-img :max-height="isMobile ? '220' : '420'" :width="isMobile ? '350' : '520'" src="/images/news/education.png" />

    <p :class="['font-weight-light  mx-4', isMobile ? 'mt-6 f-20' : 'f-24']" style="color: #939393; line-height: 2">
      WHO advises that all women in their reproductive ages, whether having Iron deficiency or not, are required to
      consume 60 mg of iron supplements per week. This amount should be higher in pregnant women and any deficiencies
      will not only affect themselves, but it also affects their fetus. In addition, Iranian men and menopaused women
      have a 2 prevalence of Anemia and are also require to manage the disease accordingly (3).
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
