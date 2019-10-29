import * as actionTypes from './actions'

const initialState = {
    selectedTool: null,
    tools: {}
}

const reducer = (state = initialState, action) => {
    console.log('action:', action.type)
    if (action.type === actionTypes.SELECT_TOOL) {
        return {
            ...state,
            selectedTool: action.value.name
        }
    }
    if (action.type === actionTypes.RECEIVE_TOOLS) {
        return {
            ...state,
            tools: {
                items: action.items,
                receivedAt: action.receivedAt
            }
        }
    }
    return state
}

export default reducer;