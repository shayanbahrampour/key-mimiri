export default function ({ app, $axios }) {
  $axios.onRequest((config) => {
    config.headers.common['Cache-Control'] = 'no-cache';
  });
  $axios.onError((error) => {
    if (error.response && String(error.response.status) === '401') app.$auth.logout();
  });
}
