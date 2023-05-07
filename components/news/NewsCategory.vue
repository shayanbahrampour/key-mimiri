<template>
  <div class="d-flex mt-16 px-16 justify-space-between align-center">
    <div class="d-flex">
      <p class="bel f-50 mb-0 text--darken-3" style="color: #59595b">More important</p>
    </div>
    <v-divider vertical color="#00a59b"></v-divider>
    <v-btn
      v-for="item in items"
      text
      :ripple="false"
      class="bel f-17 mb-0 bg-transparent text--darken-3 px-0 menu-link text-transform-none"
      style="max-width: 60%; color: #939393"
    >
      <span class="mr-1">{{ item }}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['all', 'Best talent', 'Long-term value creation', 'Social responsibility', 'Localized know-how']
    };
  }
};
</script>

<style lang="scss">
.menu-link {
  transition: all ease 0.4s;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  position: relative;
}
.menu-link:after {
  background: none repeat scroll 0 0 transparent;
  bottom: -10px;
  content: '';
  height: 2px;
  position: absolute;
  background: linear-gradient(90deg, #f3911f 8%, #a01e64 51%, #00a59b 100%) !important;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.menu-link:hover:after {
  width: 100%;
  right: 0px;
}
@media screen and (max-height: 300px) {
  ul {
    margin-top: 40px;
  }
}
</style>
