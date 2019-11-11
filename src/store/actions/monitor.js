export const TOOLS_REQUESTED = 'TOOLS_REQUESTED'
export const requestTools = () => {
    return (dispatch) => {
        dispatch({
            type: TOOLS_REQUESTED
        })
        return dispatch(dispatchHttpRequest())
    }
}

export const TOOLS_HTTP_REQUEST_DISPATCHED = 'TOOLS_HTTP_REQUEST_DISPATCHED'
export const dispatchHttpRequest = () => {
    return (dispatch) => {
        dispatch({
            type: TOOLS_HTTP_REQUEST_DISPATCHED
        })
        return fetch(`http://localhost:3000/tools`)
            .then(response => response.json())
            .then(json => dispatch(receiveHttpRequest(json)))
    }
}

export const TOOLS_HTTP_REQUEST_SUCCEED = 'TOOLS_HTTP_REQUEST_SUCCEED'
function receiveHttpRequest(json) {
    return (dispatch) => {
        dispatch({
            type: TOOLS_HTTP_REQUEST_SUCCEED,
            items: json,
            receivedAt: Date.now()
        })
        json.forEach((item) => {
            dispatch(fetchAdoption(item))
        });
    }
}

export const ADOPTION_HTTP_REQUEST_DISPATCHED = 'ADOPTION_HTTP_REQUEST_DISPATCHED'
function fetchAdoption(tool) {
    return (dispatch) => {
        dispatch({
            type: ADOPTION_HTTP_REQUEST_DISPATCHED
        })
        return fetch(`http://localhost:3000/tools/${tool.id}/adoption`)
            .then(response => response.json())
            .then(json => dispatch(receiveAdoption(tool, json)))
    }
}

export const MONITOR_RECEIVE_ADOPTION = 'MONITOR_RECEIVE_ADOPTION'
function receiveAdoption(tool, adoption) {
    return {
        type: MONITOR_RECEIVE_ADOPTION,
        tool: tool,
        adoption: adoption,
    }
}

