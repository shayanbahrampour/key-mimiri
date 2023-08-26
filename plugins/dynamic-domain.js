export default ({ app, req }, inject) => {
  const baseUrl = 'https://api.cobelgroup.com';
  const imageUrl = `${baseUrl}/storage`; // '/images/temp/';

  app.$axios.onRequest((config) => {
    config.baseURL = `${baseUrl}/api/v1`;
  });

  inject('baseUrl', baseUrl);
  inject('imageUrl', imageUrl);
};
