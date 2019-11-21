import * as actionTypes from '../actions/config'

const initialState = {
    apiUrl: window.localStorage.getItem('apiUrl') || 'http://localhost:3000',
    apiKey: window.localStorage.getItem('apiKey') || ''
}

const reducer = (state = initialState, action) => {
    console.log('action:', action.type)
    if (action.type === actionTypes.CONFIG_UPDATED) {
        return {
            ...state,
            apiUrl: action.value.url,
            apiKey: action.value.key
        }
    }

    return state
}

export default reducer;