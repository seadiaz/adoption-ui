export const ADOPTABLES_REQUESTED = 'ADOPTABLES_REQUESTED'
export const requestAdoptables = () => {
    return (dispatch) => {
        dispatch({
            type: ADOPTABLES_REQUESTED
        })
        return dispatch(dispatchHttpRequest())
    }
}

export const ADOPTABLES_HTTP_REQUEST_DISPATCHED = 'ADOPTABLES_HTTP_REQUEST_DISPATCHED'
export const dispatchHttpRequest = () => {
    return (dispatch, getState) => {
        const { config: { apiUrl: url, apiKey: key } } = getState()
        dispatch({
            type: ADOPTABLES_HTTP_REQUEST_DISPATCHED
        })
        return fetch(`${url}/adoptables`, {
            headers: {
                'Authorization': key
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receiveHttpRequest(json)))
    }
}

export const ADOPTABLES_HTTP_REQUEST_SUCCEED = 'ADOPTABLES_HTTP_REQUEST_SUCCEED'
function receiveHttpRequest(json) {
    return (dispatch) => {
        dispatch({
            type: ADOPTABLES_HTTP_REQUEST_SUCCEED,
            items: json,
            receivedAt: Date.now()
        })
        json.forEach((item) => {
            dispatch(fetchAdoption(item))
        });
    }
}

export const ADOPTION_HTTP_REQUEST_DISPATCHED = 'ADOPTION_HTTP_REQUEST_DISPATCHED'
function fetchAdoption(adoptable) {
    return (dispatch, getState) => {
        const { config: { apiUrl: url, apiKey: key } } = getState()
        dispatch({
            type: ADOPTION_HTTP_REQUEST_DISPATCHED
        })
        return fetch(`${url}/adoptables/${adoptable.id}/adoption`, {
            headers: {
                'Authorization': key
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAdoption(adoptable, json)))
    }
}

export const MONITOR_RECEIVE_ADOPTION = 'MONITOR_RECEIVE_ADOPTION'
function receiveAdoption(adoptable, adoption) {
    return {
        type: MONITOR_RECEIVE_ADOPTION,
        adoptable: adoptable,
        adoption: adoption,
    }
}

