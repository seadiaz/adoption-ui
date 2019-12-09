import * as actionTypes from '../actions/config'

const initialState = {
    apiUrl: window.localStorage.getItem('apiUrl') || 'http://localhost:3000',
    apiKey: window.localStorage.getItem('apiKey') || '',
    labels: window.localStorage.getItem('labels') ? JSON.parse(window.localStorage.getItem('labels')) : [],
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.CONFIG_UPDATED) {
        return {
            ...state,
            labels: action.value.labels,
            apiUrl: action.value.url,
            apiKey: action.value.key
        }
    }

    return state
}

export default reducer;