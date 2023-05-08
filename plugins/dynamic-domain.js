export default ({ app, req }, inject) => {
  const baseUrl = 'https://api-cobel.applife.ir';

  app.$axios.onRequest((config) => {
    config.baseURL = `${baseUrl}/api/v1`;
  });

  inject('baseUrl', baseUrl);
};
