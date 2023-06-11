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
    // try {
    //   const { data } = await this.$axios.$get(api.impact_story_categories(id), { params });
    //   commit('SET', { categories: [{ id: null, en_name: 'All', fa_name: 'همه' }, ...data] });
    // } catch (e) {
    //   console.log(e);
    // }

    await commit('SET', {
      categories: [
        { id: null, en_name: 'All', fa_name: 'همه' },
        ...[
          {
            id: 47161516,
            en_name: 'Best talent',
            fa_name: '\u0627\u0633\u062a\u0639\u062f\u0627\u062f\u0647\u0627\u06cc \u0628\u0631\u062a\u0631'
          },
          {
            id: 230305135,
            en_name: 'Long-term value creation',
            fa_name:
              '\u062e\u0644\u0642 \u0627\u0631\u0632\u0634 \u0647\u0627 \u062f\u0631 \u0628\u0644\u0646\u062f \u0645\u062f\u062a'
          },
          {
            id: 140945966,
            en_name: 'Social responsibility',
            fa_name: 'مسئولیت اجتماعی'
          },
          {
            id: 324089577,
            en_name: 'Localized know-how',
            fa_name: '\u0628\u0648\u0645\u06cc \u0633\u0627\u0632\u06cc \u062f\u0627\u0646\u0634\u200c\u0647\u0627'
          }
        ]
      ]
    });
  },
  getList({ commit }, { params, id } = {}) {
    return this.$axios.$get(api.impact_story({ id, lang: this.$i18n.locale }), { params });
  }
};
