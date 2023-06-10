<template>
  <v-card
    :ripple="false"
    style="border-radius: 75px !important"
    class="d-flex align-stretch bg-transparent"
    flat
    @click="open"
  >
    <v-img
      style="border-radius: 75px !important; border: 1px solid #ececec; overflow: hidden"
      class="rounded"
      :height="350"
      :max-width="width"
      :width="width"
      :src="item.src"
      width="100%"
      eager
    />

    <v-sheet
      height="350"
      :width="width"
      :color="flag.isOpen ? 'darkGreen' : 'white'"
      :class="[
        'overflow-hidden d-flex align-center justify-center',
        `rounded-${isRTL ? 'r' : 'l'}-0 rounded-${isRTL ? 'l' : 'r'}-xl`
      ]"
      :style="
        flag.isOpen
          ? `padding-${isRTL ? 'right' : 'left'}: 110px !important;margin-${isRTL ? 'right' : 'left'}: -75px;`
          : ''
      "
    >
      <v-expand-x-transition>
        <div v-if="flag.isOpen">
          <v-scroll-x-transition>
            <div v-if="flag.showContent" class="white--text pe-10 bel f-20">
              Iron deficiency, leading to Anemia, has negative health effects on all individuals, specially women
              <nuxt-link
                class="white--text text-decoration-none mt-5 d-block"
                :to="localePath(`/storytellers/${item.id}`)"
              >
                click for more
              </nuxt-link>
            </div>
          </v-scroll-x-transition>
        </div>
      </v-expand-x-transition>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: {
    width: {
      type: Number | String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      flag: {
        isOpen: false,
        showContent: false
      }
    };
  },
  watch: {
    active: {
      immediate: true,
      handler() {
        this.flag.isOpen = this.active;
      }
    },
    'flag.isOpen'() {
      this.flag.showContent = false;
      if (!this.flag.isOpen) return;

      setTimeout(() => {
        this.flag.showContent = true;
      }, 500);
    }
  },
  methods: {
    open() {
      if (this.isMobile) {
        this.$router.push(this.localePath(`/storytellers/${this.item.id}`));
        return;
      }

      setTimeout(() => {
        this.$emit('select', this.flag.isOpen);
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped></style>
