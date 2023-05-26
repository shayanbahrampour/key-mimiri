import * as api from '~/api';

export const actions = {
  sendContact(ctx, { body } = {}) {
    return this.$axios.$post(api.contact(), body);
  }
};
