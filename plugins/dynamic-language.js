export default function ({ app, req, redirect }) {
  const host = process.server ? req.headers.host : window.location.host;
  const path = !process.server && window.location.pathname;
  const allowToSwitch = host.includes('redhat') || host.includes('localhost');

  if (allowToSwitch) return;
  if (path && path.includes('/fa')) redirect(path.replace('/fa', ''));
  app.i18n.setLocale('en');

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    if (allowToSwitch) return;
    app.i18n.setLocale('en');
    if (newLocale === 'fa') redirect(path.replace('/fa', ''));
  };
}
