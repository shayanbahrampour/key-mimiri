<template>
  <v-card
    class="d-flex justify-start align-stretch bg-transparent"
    flat
    style="border-radius: 75px !important"
    @click.prevent.stop="open"
  >
    <v-img
      :height="350"
      :max-width="width"
      :src="src"
      :style="`border: 1px solid ${flag.isOpen ? 'transparent' : '#ececec'};border-radius: ${
        flag.showContent ? (isRTL ? '0 75px 75px 0' : '75px 0 0 75px') : '75px'
      } !important; overflow: hidden`"
      :width="isMobile ? '100%' : width"
      class="transition-ease-in-out"
      eager
    />

    <v-sheet
      :class="[
        'overflow-hidden transition-ease-in-out d-flex align-center justify-center',
        `rounded-${isRTL ? 'r' : 'l'}-0 rounded-${isRTL ? 'l' : 'r'}-xl`
      ]"
      :color="flag.isOpen ? 'darkGreen' : 'white'"
      :style="`margin-${isRTL ? 'right' : 'left'}: ${flag.showContent ? '-75px' : '-110px'};margin-top:1px; padding-${
        isRTL ? 'right' : 'left'
      }: 110px !important;`"
      :width="600 - width"
      height="350"
    >
      <v-scroll-x-transition hide-on-leave>
        <div
          v-if="flag.showContent"
          :class="['white--text pe-6 f-20', isRTL ? 'ravi' : undefined]"
          style="min-width: 240px"
        >
          <div
            v-if="item[`${$i18n.locale}_body`]"
            :class="isRTL ? 'ravi' : 'bel'"
            style="max-height: 208px; overflow: hidden; text-overflow: ellipsis"
            v-html="item[`${$i18n.locale}_body`].slice(0, 200) + '...'"
          />

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
  computed: {
    src() {
      if (!this.item && this.item.files.length) return '';
      const result = this.item.files.find((item) => item.type === 'avatar_file');
      return result ? `${this.$imageUrl}/${result.url}` : '';
    }
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
      }, 300);
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
