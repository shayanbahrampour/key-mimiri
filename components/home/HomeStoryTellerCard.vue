<template>
  <v-card
    :ripple="false"
    class="d-flex align-stretch bg-transparent"
    flat
    style="border-radius: 75px !important"
    @click.prevent.stop="open"
  >
    <v-img
      :height="350"
      :max-width="width"
      :src="item.src"
      :style="`border: 1px solid ${flag.isOpen ? 'transparent' : '#ececec'};border-radius: ${
        flag.isOpen ? (isRTL ? '0 75px 75px 0' : '75px 0 0 75px') : '75px'
      } !important; overflow: hidden`"
      :width="width"
      class="transition-ease-in-out"
      eager
      width="100%"
    />

    <v-sheet
      :class="[
        'overflow-hidden transition-ease-in-out d-flex align-center justify-center',
        `rounded-${isRTL ? 'r' : 'l'}-0 rounded-${isRTL ? 'l' : 'r'}-xl`
      ]"
      :color="flag.isOpen ? 'darkGreen' : 'white'"
      :style="`margin-${isRTL ? 'right' : 'left'}: -75px;${
        flag.isOpen && `margin-top:1px;padding-${isRTL ? 'right' : 'left'}: 110px !important;`
      }`"
      :width="width"
      height="349"
    >
      <v-scroll-x-transition hide-on-leave>
        <div v-if="flag.showContent" :class="['white--text pe-10 f-20', isRTL ? 'ravi' : 'bel']">
          {{ item.description }}

          <nuxt-link :to="localePath(`/storytellers/${item.id}`)" class="white--text text-decoration-none mt-5 d-block">
            {{ $t('homePage.storytellers.click_for_more') }}
          </nuxt-link>
        </div>
      </v-scroll-x-transition>
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
        if (!this.active) {
          this.flag.showContent = false;
        }

        setTimeout(() => {
          this.flag.isOpen = this.active;
        }, 300);
      }
    },
    'flag.isOpen'() {
      if (!this.flag.isOpen) return;

      setTimeout(() => {
        this.flag.showContent = true;
      }, 600);
    }
  },
  methods: {
    open() {
      if (this.isMobile) {
        this.$router.push(this.localePath(`/storytellers/${this.item.id}`));
        return;
      }

      if (this.flag.isOpen) this.flag.showContent = false;

      setTimeout(() => {
        this.$emit('select', this.flag.isOpen);
      }, 300);
    }
  }
};
</script>

<style lang="scss" scoped></style>
