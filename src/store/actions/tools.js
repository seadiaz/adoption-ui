import { fetchAdoption } from './adoption'

export const SELECT_TOOL = 'SELECT_TOOL'
export const selectTool = (item) => {
    return (dispatch) => {
        dispatch(fetchAdoption(item))
        return dispatch({
            type: SELECT_TOOL,
            value: item
        })
    }
}

export const REQUEST_TOOLS = 'REQUEST_TOOLS'
const requestTools = () => {
    return {
        type: REQUEST_TOOLS
    }
}

export const RECEIVE_TOOLS = 'RECEIVE_TOOLS'
function receiveTools(json) {
    console.log(json)
    return {
        type: RECEIVE_TOOLS,
        items: json,
        receivedAt: Date.now()
    }
}

export const fetchTools = () => {
    return (dispatch, getState) => {
        const { config: { apiUrl: url, apiKey: key } } = getState()
        dispatch(requestTools())
        return fetch(`${url}/tools`, {
            headers: {
                'Authentication': key
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receiveTools(json)))
    }
}