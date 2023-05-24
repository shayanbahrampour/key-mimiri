import * as api from '~/api';

export const state = () => ({
  categories: []
});

export const getters = {
  categories: (state) => state.categories
};

export const mutations = {
  SET: (state, payload) => {
    for (const [key, value] of Object.entries(payload)) {
      state[key] = value;
    }
  }
};

export const actions = {
  async getCategories({ commit }, { params, id } = {}) {
    try {
      const { data } = await this.$axios.$get(api.impact_story_categories(id), { params });
      commit('SET', { categories: data });
    } catch (e) {
      console.log(e);
    }
  },
  getList({ commit }, { params, id } = {}) {
    return this.$axios.$get(api.impact_story({ id, lang: this.$i18n.locale }), { params });
  }
};
