import Vue from 'vue';
import videojs from 'video.js';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';

Vue.use(VueVideoPlayer);
Vue.prototype.$videojs = videojs;
