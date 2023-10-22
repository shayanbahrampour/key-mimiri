<template>
  <v-app>
    <v-main>
      <v-fade-transition hide-on-leave leave-absolute>
        <Nuxt />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-main {
  background: linear-gradient(to left, #232d3f, black, #23343a, black);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
