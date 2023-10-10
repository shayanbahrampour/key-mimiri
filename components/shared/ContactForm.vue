<template>
  <v-sheet
    class="d-flex white--text text-center flex-column w-full justify-center align-center"
    :height="isMobile ? 'calc(100vh - 130px)' : `calc(100vh - ${screenHeight < 760 ? 80 : 120}px)`"
    color="transparent"
    style="font-family: IBM Plex Mono; line-height: 1.4"
  >
    <h1>
      I wasn't in the Mood While Designing This Page.<br />
      Just Click Here:
    </h1>
    <v-btn
      :class="['rounded d-flex justify-center white--text px-4 mt-6 font-weight-bold', !isMobile ? 'f-20' : 'f-14']"
      elevation="0"
      outlined
      height="50"
      @click="openEmailClient"
    >
      Magic Button (It Opens Your Mail App)
    </v-btn>

    <div :class="['d-flex flex-column mt-16', !isMobile ? 'text-center' : 'w-full text-start']">
      <v-btn target="_blank" href="https://gitlab.com/shawbahrampour" class="grey--text d-flex justify-start" text
        ><v-icon class="mr-2" size="24" color="grey">mdi-gitlab</v-icon>Gitlab</v-btn
      >
      <v-btn
        target="_blank"
        href="https://github.com/shayanbahrampour"
        class="mt-2 grey--text d-flex justify-start"
        text
        ><v-icon class="mr-2" size="24" color="grey">mdi-github</v-icon>Github</v-btn
      >
      <v-btn
        target="_blank"
        href="https://www.instagram.com/shawbahrampour/"
        class="mt-2 grey--text d-flex justify-start"
        text
        ><v-icon class="mr-2" size="24" color="grey">mdi-instagram</v-icon>Instagram</v-btn
      >
      <v-btn class="mt-2 grey--text d-flex justify-start" text
        ><v-icon class="mr-2" size="24" color="grey">mdi-phone</v-icon>+98 913 644 18 44</v-btn
      >
    </div>
  </v-sheet>
</template>

<script>
export default {
  methods: {
    openEmailClient() {
      const recipientEmail = 'shawbahrampour@gmail.com';
      const subject = 'Hello';
      const body = 'Hi, I want to get in touch with you!';

      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`;

      // Open the default email client with the mailto link
      window.location.href = mailtoLink;
    }
  }
};
</script>

<style>
.contact-background {
  background-color: #d9d9d9;
}
</style>
