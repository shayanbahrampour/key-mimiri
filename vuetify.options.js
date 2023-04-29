import fa from 'vuetify/es5/locale/fa';
import en from 'vuetify/es5/locale/en';

export default {
  lang: {
    locales: { fa, en },
    current: 'en'
  },
  theme: {
    options: {
      customProperties: true,
      minifyTheme(css) {
        return process.env.NODE_ENV === 'production' ? css.replace(/[\r\n|\r|\n]/g, '') : css;
      }
    },
    themes: {
      light: {
        primary: '#97245B',
        success: '#00A59B',
        orange: '#F3911F',
        hoki: '#66869A'
      }
    }
  }
};
