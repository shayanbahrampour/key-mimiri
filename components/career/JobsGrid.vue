<template>
  <v-container v-if="!isMobile" class="d-flex flex-column justify-center mb-16 pl-0 mt-10" style="width: 90vw">
    <v-row no-gutters>
      <template v-for="(item, n) in items">
        <v-col :key="n" cols="6">
          <v-card
            :class="['py-10', n % 2 === 1 ? 'ps-10' : undefined]"
            tile
            outline
            elevation="0"
            :style="`border-bottom: ${n > 1 ? '0' : '0.5'}px solid grey; border-${isRTL ? 'left' : 'right'}: ${
              n % 2 === 1 ? '0' : '0.5'
            }px solid grey`"
          >
            <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
              {{ isRTL ? item.fa_title : item.en_title }}
            </h4>
            <p :class="['f-18 mt-4 mb-0 text--darken-3 mb-auto', isRTL ? 'font-weight-bold' : 'font-weight-light']">
              {{ isRTL ? item.fa_description : item.en_description }}
            </p>
            <div class="d-flex align-center mt-6">
              <v-btn
                :class="['rounded-xl d-flex justify-center white--text f-18', isRTL ? 'font-weight-bold' : undefined]"
                :to="localePath(`/career/${item.id}`)"
                color="slategrey"
                elevation="0"
                height="36"
                min-width="220"
              >
                {{ $t('career.job_action') }}
              </v-btn>
              <v-spacer></v-spacer>
              <v-img
                :max-width="isRTL ? '140' : undefined"
                class="me-16"
                max-height="30"
                max-width="100"
                :src="src(item)"
              />
            </div>
          </v-card>
        </v-col>
        <v-responsive v-if="n === 2" :key="`width-${n}`" width="100%"></v-responsive>
      </template>
    </v-row>
  </v-container>
  <div v-else class="d-flex flex-column mb-16">
    <div v-for="(item, i) in items" :key="i" class="d-flex flex-column">
      <h4 :class="['f-30 text--darken-3 font-weight-regular', isRTL ? 'ravi' : 'bel']" style="color: #66869a">
        {{ isRTL ? item.fa_title : item.en_title }}
      </h4>
      <p
        :class="['f-18 text--darken-3 mb-auto', isRTL ? 'font-weight-bold' : 'font-weight-light']"
        style="max-width: 80%; color: #59595b; line-height: 24px"
      >
        {{ isRTL ? item.fa_description : item.en_description }}
      </p>
      <div class="d-flex flex-column align-start mt-6">
        <v-img max-height="60" :src="src(item)" width="120" />
        <v-btn
          :class="['rounded-xl d-flex justify-center white--text f-20 mt-6', isRTL ? 'font-weight-bold' : undefined]"
          :to="localePath(`/career/${item.id}`)"
          color="slategrey"
          elevation="0"
          height="50"
          min-width="100%"
        >
          {{ $t('career.job_action') }}
        </v-btn>
      </div>

      <v-divider v-if="i !== 3" class="my-10"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      news: []
    };
  },
  async fetch() {
    this.loading = true;
    try {
      const { data } = await this.$store.dispatch('career/getJobPositions');
      this.items = data.slice(0, 4);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    src(index) {
      const mainImage = index.files.find((item) => item.type === 'company_file');
      if (!mainImage) return '';

      return `${this.$imageUrl}/${mainImage.url}`;
    }
  }
};
</script>

<style lang="scss"></style>
