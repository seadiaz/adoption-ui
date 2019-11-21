import { API_URL, API_KEY } from './global'

export const fetchAdoption = (item) => {
    return (dispatch) => {
        dispatch(requestAdoption(item))
        return fetch(`${API_URL}/tools/${item.id}/adoption`, {
            headers: {
                'Authentication': API_KEY
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
