import * as actionTypes from './actions'
import * as adoptionType from './actions/adoption'

const initialState = {
    selectedTool: null,
    tools: {}
}

const reducer = (state = initialState, action) => {
    console.log('action:', action.type)
    if (action.type === actionTypes.SELECT_TOOL) {
        return {
            ...state,
            selectedTool: action.value
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
    if (action.type === adoptionType.REQUEST_ADOPTION) {
        return {
            ...state,
            selectedTool: {
                ...state.selectedTool,
                ...action.item
            },
            tools: {
                ...state.tools
            }
        }
    }
    if (action.type === adoptionType.RECEIVE_ADOPTION) {
        return {
            ...state,
            selectedTool: {
                ...state.selectedTool,
                adoption: action.item.adoption,
                adopters: action.item.adopters,
                absentees: action.item.absentees
            },
            tools: {
                ...state.tools
            }
        }
    }
    return state
}

export default reducer;