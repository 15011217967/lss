import { set } from "core-js/fn/dict";

const actions =  {
  updataActionsName({ commit }) {
    setTimeout(() => {
      commit('SET_ACTIONS_NAME','璇玑');
    }, 2000)
  }
}

export default actions;