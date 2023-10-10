<template>
  <div class="w-full"><ContactForm /></div>
</template>

<script>
import ContactForm from '~/components/shared/ContactForm';
export default {
  components: { ContactForm },
  head() {
    return {
      title: 'Contact'
    };
  }
};
</script>

<style lang="scss"></style>
