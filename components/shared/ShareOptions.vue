<template>
  <div :class="[isMobile ? 'mt-2' : 'd-flex align-center']">
    <span :class="['f-16 slategrey--text', isMobile ? undefined : 'mr-4']">share it:</span>
    <div :class="[isMobile ? 'mt-2' : undefined]">
      <v-btn class="rounded" color="slategrey" height="50" min-width="50" outlined>
        <v-img height="20" max-width="20" src="/images/icons/linkedin-primary.png" />
      </v-btn>
      <v-btn class="ml-4 rounded" color="slategrey" height="50" min-width="50" outlined>
        <v-img height="20" max-width="20" src="/images/icons/whatsapp-primary.png" />
      </v-btn>
      <v-btn class="ml-4 rounded" color="slategrey" height="50" min-width="50" outlined>
        <v-img height="20" max-width="20" src="/images/icons/telegram-primary.png" />
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
