import * as actionTypes from '../actions/tools'

const initialState = {
    selectedTool: null,
    items: [],
    receivedAt: null
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.SELECT_TOOL) {
        return {
            ...state,
            selectedTool: action.value
        }
    }
    if (action.type === actionTypes.RECEIVE_TOOLS) {
        return {
            ...state,
            items: action.items,
            receivedAt: action.receivedAt
        }
    }
    return state
}

export default reducer;