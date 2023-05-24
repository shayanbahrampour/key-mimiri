export default {
  props: {
    src: {
      type: String,
      default: false
    },
    poster: {
      type: String,
      default: false
    },
    withPreview: {
      type: Boolean,
      default: false
    },
    isGallery: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    height: {
      type: String | Number,
      default: ''
    },
    width: {
      type: String | Number,
      default: ''
    },
    options: {
      type: Object,
      default: () => ({})
    }
  }
};
