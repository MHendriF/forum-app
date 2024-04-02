import ActionType from '../../../utils/ActionType';

function notesReducer(notes = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ACTIVE_NOTES:
            return action.payload.notes;
        case ActionType.GET_ARCHIVED_NOTES:
            return action.payload.notes;
        case ActionType.SEARCH_ACTIVE_NOTES:
            return action.payload.notes.filter((note) => !note.archived && note.title.toLowerCase().includes(action.payload.keyword.toLowerCase()));
        case ActionType.SEARCH_ARCHIVED_NOTES:
            return action.payload.notes.filter((note) => note.archived && note.title.toLowerCase().includes(action.payload.keyword.toLowerCase()));
        default:
            return notes;
    }
}

export default notesReducer;
