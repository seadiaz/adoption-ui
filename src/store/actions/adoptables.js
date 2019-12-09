import { fetchAdoption } from './adoption'

export const SELECT_ADOPTABLE = 'SELECT_ADOPTABLE'
export const selectAdoptable = (item) => {
    return (dispatch) => {
        dispatch(fetchAdoption(item))
        return dispatch({
            type: SELECT_ADOPTABLE,
            value: item
        })
    }
}

export const REQUEST_ADOPTABLES = 'REQUEST_ADOPTABLES'
const requestAdoptables = () => {
    return {
        type: REQUEST_ADOPTABLES
    }
}

export const RECEIVE_ADOPTABLES = 'RECEIVE_ADOPTABLES'
function receiveAdoptables(json) {
    return {
        type: RECEIVE_ADOPTABLES,
        items: json,
        receivedAt: Date.now()
    }
}

export const fetchAdoptables = () => {
    return (dispatch, getState) => {
        const { config: { apiUrl: url, apiKey: key } } = getState()
        dispatch(requestAdoptables())
        return fetch(`${url}/adoptables`, {
            headers: {
                'Authorization': key
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAdoptables(json)))
    }
}