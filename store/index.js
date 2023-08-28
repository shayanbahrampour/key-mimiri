export const state = () => ({
  device: {},
  povDialog: false
});

export const getters = {
  povDialog: (state) => state.povDialog,
  getDevice: (state) => state.device
};

export const actions = {};

export const mutations = {
  SET: (state, payload) => {
    for (const [key, value] of Object.entries(payload)) {
      state[key] = value;
    }
  }
};
