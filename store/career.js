import * as api from '~/api';

export const state = () => ({
  answers: []
});

export const getters = {
  answers: (state) => state.answers
};

export const mutations = {
  SET: (state, payload) => {
    for (const [key, value] of Object.entries(payload)) {
      state[key] = value;
    }
  }
};

export const actions = {
  sendApplication(ctx, { body } = {}) {
    return this.$axios.$post(api.job_applications(), body);
  }
};
