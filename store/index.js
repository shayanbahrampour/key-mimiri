export const state = () => ({
  device: {}
});

export const getters = {
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
