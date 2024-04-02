import ActionType from '../../../utils/ActionType';

function usersReducer(users = [], action = {}) {
    switch (action.type) {
        case ActionType.REGISTER_USER:
            return action.payload.users;
        default:
            return users;
    }
}

export default usersReducer;
