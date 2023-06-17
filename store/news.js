import * as api from '~/api';

export const state = () => ({
  list: [],
  categories: []
});

export const getters = {
  list: (state) => state.list,
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
      const { data } = await this.$axios.$get(api.news_categories(id), { params });
      commit('SET', { categories: [{ id: null, en_name: 'All', fa_name: 'همه' }, ...data] });
    } catch (e) {
      console.log(e);
    }
  },
  getList({ commit }, { params, id } = {}) {
    return this.$axios.$get(api.news(this.$i18n.locale, id), { params });
  }
};
