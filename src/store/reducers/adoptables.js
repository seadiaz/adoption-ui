import * as actionTypes from '../actions/adoptables'

const initialState = {
    selectedAdoptable: null,
    items: [],
    receivedAt: null
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.SELECT_ADOPTABLE) {
        return {
            ...state,
            selectedAdoptable: action.value
        }
    }
    if (action.type === actionTypes.RECEIVE_ADOPTABLES) {
        return {
            ...state,
            items: action.items,
            receivedAt: action.receivedAt
        }
    }
    return state
}

export default reducer;