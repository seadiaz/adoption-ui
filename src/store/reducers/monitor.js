import * as actionTypes from '../actions/monitor'

const initialState = {
    fetching: false,
    tools: [],
    receivedAt: null
}

const reducer = (state = initialState, action) => {
    console.log('action:', action.type)
    if (action.type === actionTypes.TOOLS_REQUESTED) {
        return {
            ...state,
            fetching: false,
            receivedAt: null
        }
    }
    if (action.type === actionTypes.TOOLS_HTTP_REQUEST_DISPATCHED) {
        return {
            ...state,
            fetching: true,
        }
    }
    if (action.type === actionTypes.TOOLS_HTTP_REQUEST_SUCCEED) {
        return {
            ...state,
            fetching: false,
            tools: action.items,
            receivedAt: new Date()
        }
    }
    if (action.type === actionTypes.MONITOR_RECEIVE_ADOPTION) {
        let index = getIndex(state.tools, action.tool.id)
        if (index < 0) {
            return { ...state }
        }
        let tools = state.tools.map(item => {
            if (item.id === action.tool.id) {
                item.adoption = {
                    adoption: action.adoption.adoption,
                    teamAdoption: action.adoption.team_adoption
                }
            }
            return item
        })
        return {
            ...state,
            tools: tools
        }
    }

    return state
}

function getIndex(tools, id) {
    if (!tools) { return -1 }
    tools.find(item => {
        return item.id === id
    })
}

export default reducer;