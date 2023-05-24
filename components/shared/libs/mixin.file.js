import FilePropsMixin from '~/components/shared/libs/mixin.props';

export default {
  mixins: [FilePropsMixin], // All loader components
  data() {
    return {
      ref: null,
      flag: {
        loading: false,
        showPreview: false
      }
    };
  },
  created() {
    this.ref = this.generateId();
  },
  methods: {
    generateId() {
      const idGenerator = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      };

      let result = '';
      for (let i = 0; i <= 3; i++) {
        result += idGenerator();
      }
      return result;
    }
  }
};
