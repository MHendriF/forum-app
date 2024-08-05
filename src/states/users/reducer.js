import { ActionType } from './action';

function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users;
    case ActionType.REGISTER_USER:
      return action.payload.user;
    default:
      return users;
  }
}

export default usersReducer;
