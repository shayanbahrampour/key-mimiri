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
        success: '#00a59b',
        orange: '#F3911F',
        cyan: '#00a59b',
        blue: '#0A91DF',
        slategrey: '#66869A',
        cobelgrey: '#59595b',
        lightgrey: '#D9D9D9',
        darkGreen: '#4C6D80',
        teaGreen: 'B0BEC5'
      }
    }
  }
};
