import * as api from '~/api';

export const state = () => ({
  answers: []
});

export const getters = {
  getAnswers: (state) => state.answers
};

export const mutations = {
  SET: (state, payload) => {
    for (const [key, value] of Object.entries(payload)) {
      state[key] = value;
    }
  },
  RESET: (state) => {
    state.answers = [];
  }
};

export const actions = {
  sendApplication(ctx, { body } = {}) {
    return this.$axios.$post(api.job_applicants(), body);
  },
  getJobPositions({ commit }, { params } = {}) {
    return this.$axios.$get(api.job_positions(this.$i18n.locale), { params });
  }
};
