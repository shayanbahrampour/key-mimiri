<template>
  <div class="app">
    <div id="bound-one" class="video-scroll">
      <div class="content d-flex align-center justify-center">
        <video width="95%" muted>
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
      webmVideoSrc: '/video/pov.mp4'
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
    width: 100%;
    position: sticky;
    top: 0;
  }

  video {
    width: 100%;
  }
}
</style>
