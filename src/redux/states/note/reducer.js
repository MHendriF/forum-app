import ActionType from '../../../utils/ActionType';

function noteReducer(note = null, action = {}) {
    switch (action.type) {
        case ActionType.ADD_NOTE:
            return action.payload.note;
        case ActionType.GET_NOTE:
            return action.payload.note;
        case ActionType.DELETE_NOTE:
            return null;
        case ActionType.ARCHIVE_NOTE:
            return {
                ...note,
                archived: true,
            };
        case ActionType.UNARCHIVE_NOTE:
            return {
                ...note,
                archived: false,
            };
        default:
            return note;
    }
}

export default noteReducer;
