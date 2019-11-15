import { API_URL, API_KEY } from './global'

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
        return fetch(`${API_URL}/tools`, {
            headers: {
                'Authentication': API_KEY
            }
        })
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
<<<<<<< HEAD
        return fetch(`${API_URL}/tools/${tool.id}/adoption`, {
            headers: {
                'Authentication': API_KEY
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAdoption(tool, json)))
=======
        return setTimeout(() => {
            fetch(`http://localhost:3000/tools/${tool.id}/adoption`)
                .then(response => response.json())
                .then(json => dispatch(receiveAdoption(tool, json)))
        }, 1000 * Math.random() * 10)
>>>>>>> c056003fcb4b9e2d3d33214511bae4c9ef79c921
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

