const mutations = {
  SET_BAR_LIST(state, row) {
    state.barList = row;
  },
  // 异步修改某个值
  SET_ACTIONS_NAME(state, row) {
    state.actionsName = row;
  }
}

export default mutations;