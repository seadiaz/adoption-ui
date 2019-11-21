export const fetchAdoption = (item) => {
    return (dispatch, getState) => {
        const { config: { apiUrl: url, apiKey: key } } = getState()
        dispatch(requestAdoption(item))
        return fetch(`${url}/tools/${item.id}/adoption`, {
            headers: {
                'Authentication': key
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAdoption(json)))
    }
}

export const REQUEST_ADOPTION = 'REQUEST_ADOPTION'
const requestAdoption = (item) => {
    return {
        type: REQUEST_ADOPTION,
        item: item
    }
}

export const RECEIVE_ADOPTION = 'RECEIVE_ADOPTION'
function receiveAdoption(json) {
    return {
        type: RECEIVE_ADOPTION,
        item: json,
    }
}
