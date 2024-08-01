import { ActionType } from './action';

function loadingReducer(isLoading = false, action = {}) {
  switch (action.type) {
    case ActionType.SHOW_LOADING:
      return action.payload.isLoading;
    case ActionType.HIDE_LOADING:
      return action.payload.isLoading;
    default:
      return isLoading;
  }
}

export default loadingReducer;
