import * as adoptionType from '../actions/adoption'

const initialState = {
    fetching: false,
    adoption: null,
    adopters: [],
    absentees: [],
    teamAdoption: null,
    teamAdopters: [],
    teamAbsentees: []
}

const reducer = (state = initialState, action) => {
    if (action.type === adoptionType.REQUEST_ADOPTION) {
        return {
            ...state,
            fetching: true
        }
    }
    if (action.type === adoptionType.RECEIVE_ADOPTION) {
        return {
            ...state,
            fetching: false,
            adoption: action.item.adoption,
            adopters: action.item.adopters,
            absentees: action.item.absentees,
            teamAdoption: action.item.team_adoption,
            teamAdopters: action.item.team_adopters,
            teamAbsentees: action.item.team_absentees
        }
    }
    return state
}

export default reducer;