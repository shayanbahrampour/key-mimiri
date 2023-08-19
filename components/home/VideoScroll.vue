<template>
  <div class="app">
    <div id="bound-one" class="video-scroll">
      <div class="content">
        <div class="scroll-helper" v-if="showIcon">
          <h1>Scroll To Play</h1>
          <v-icon color="white" size="36">mdi-chevron-double-down</v-icon>
        </div>
        <v-icon class="exit-scroll" color="white" size="36" @click="$emit('close')">mdi-close-box</v-icon>
        <video width="95%" muted style="width: 100vw !important">
          <source :src="webmVideoSrc" type="video/mp4" />
          <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webmVideoSrc: '/video/pov.mp4',
      showIcon: true
    };
  },
  mounted() {
    this.registerVideo('#bound-one', '#bound-one video');
  },
  methods: {
    registerVideo(boundSelector, videoSelector) {
      const bound = document.querySelector(boundSelector);
      const video = document.querySelector(videoSelector);

      const scrollVideo = () => {
        if (video.duration) {
          const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
          const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

          video.currentTime = video.duration * percentScrolled;

          if (percentScrolled > 0) {
            this.showIcon = false;
          }
        }
        requestAnimationFrame(scrollVideo);
      };

      requestAnimationFrame(scrollVideo);
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: sans-serif;
  font-size: 1.4rem;
}

#bound-one {
  background: #d0d8db;
}
.video-scroll {
  height: 1000vh;

  .content {
    height: 100vh !important;
    width: 100vw;
    position: sticky;
    top: 0;
  }

  video {
    width: 100vw !important;
  }
}

.scroll-helper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 99;
  font-size: 20px;
  text-align: center;
  color: white;
}
.exit-scroll {
  position: fixed;
  top: 10%;
  left: 5%;
  transform: translate(-50%, -50%);
  z-index: 99;
  font-size: 20px;
  text-align: center;
  color: white;
}
</style>
