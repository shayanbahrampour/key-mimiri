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
  getCTAstory({ commit }, { params } = {}) {
    return this.$axios.$get(api.call_to_actions_story(this.$i18n.locale), { params });
  },
  getCTAimpact({ commit }, { params } = {}) {
    return this.$axios.$get(api.call_to_actions_impact(this.$i18n.locale), { params });
  }
};
