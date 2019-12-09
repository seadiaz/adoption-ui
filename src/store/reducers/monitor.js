import * as actionTypes from '../actions/monitor'

const initialState = {
    fetching: false,
    tools: [],
    receivedAt: null
}

const reducer = (state = initialState, action) => {
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
        const sortedItems = action.items.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        return {
            ...state,
            fetching: false,
            tools: sortedItems,
            receivedAt: new Date()
        }
    }
    if (action.type === actionTypes.ADOPTION_HTTP_REQUEST_DISPATCHED) {
        return {
            ...state,
            fetchingAdoption: true
        }
    }
    if (action.type === actionTypes.MONITOR_RECEIVE_ADOPTION) {
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
            fetchingAdoption: false,
            tools: tools
        }
    }

    return state
}

export default reducer;