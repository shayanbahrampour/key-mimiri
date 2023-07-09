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
      const { data } = await this.$axios.$get(api.storyteller_categories(id), { params });
      commit('SET', { categories: [{ id: null, en_name: 'All', fa_name: 'همه' }, ...data] });
    } catch (e) {
      console.log(e);
    }
  },
  getStorytellersList({ commit }, { params } = {}) {
    return this.$axios.$get(api.storyteller_list(this.$i18n.locale), { params });
  },
  getFeaturedStorytellers({ commit }, { params } = {}) {
    return this.$axios.$get(api.storyteller_featured(this.$i18n.locale), { params });
  },
  getStorytellersDetail({ commit }, { params, id } = {}) {
    return this.$axios.$get(api.storyteller_detail(this.$i18n.locale, id), { params });
  }
};
