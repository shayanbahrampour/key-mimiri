<template>
  <div v-if="!isMobile">
    <div v-for="i in 3" :key="i" class="d-flex ms-6">
      <v-skeleton-loader class="mb-3 mt-3 white overflow-hidden" height="200" type="image" width="250" />
      <div class="d-flex flex-column">
        <v-skeleton-loader class="rounded-0 mb-3 mt-3 white overflow-hidden" tile type="article" width="70vw" />
        <div class="d-flex">
          <v-skeleton-loader class="rounded-0 mb-3 mt-3 ms-4 white overflow-hidden" tile type="text" width="80" />
          <v-skeleton-loader class="rounded-0 mb-3 mt-3 ms-8 white overflow-hidden" tile type="text" width="160" />
          <v-skeleton-loader class="rounded-0 mb-3 mt-3 ms-8 white overflow-hidden" tile type="text" width="120" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-for="i in 3" :key="i" class="d-flex flex-column px-6 mb-16 mt-10">
      <v-skeleton-loader class="white overflow-hidden" height="200" type="image" width="100%" />
      <v-skeleton-loader class="rounded-0 my-3 white overflow-hidden" tile type="heading" />
      <v-skeleton-loader class="rounded-0 white overflow-hidden" tile type="text" width="50%" />
      <v-skeleton-loader class="rounded-0 mb-3 white overflow-hidden" tile type="sentences" />
      <v-skeleton-loader class="rounded-0 mt-3 white overflow-hidden" tile type="text" width="40%" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
