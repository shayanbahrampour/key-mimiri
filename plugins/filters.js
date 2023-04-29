import Vue from 'vue';

Vue.filter('number', (value, withDecimal = true) => {
  if (!value || typeof Number(value) !== 'number') return 0;
  if (Number(value) === value) {
    value = Number(value).toFixed(2);
  } else {
    value = String(value).split(',').join('');
  }
  if (value % 1 !== 0) {
    value = Number(value).toFixed(2);
  } else {
    value = Number(value).toFixed(0);
  }
  if (!withDecimal) value = Math.ceil(Number(value));
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

/**
 *
 */
Vue.filter('truncate', (value, { length = 100, ending = '...', disabled = false } = {}) => {
  if (disabled || !value) return value;
  if (value.length > length) {
    const trimmedString = value.substr(0, length);
    return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ending;
  }

  return value;
});
