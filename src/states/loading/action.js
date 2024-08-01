const ActionType = {
  SHOW_LOADING: 'SHOW_LOADING',
  HIDE_LOADING: 'HIDE_LOADING',
};

function showLoadingActionCreator() {
  return {
    type: ActionType.SHOW_LOADING,
    payload: {
      isLoading: true,
    },
  };
}

function hideLoadingActionCreator() {
  return {
    type: ActionType.HIDE_LOADING,
    payload: {
      isLoading: false,
    },
  };
}

export { ActionType, showLoadingActionCreator, hideLoadingActionCreator };
