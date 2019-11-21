import * as actionTypes from '../actions/config'

const initialState = {
    apiUrl: 'http://localhost:3000',
    apiKey: null
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