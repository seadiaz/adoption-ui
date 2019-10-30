export const REQUEST_ADOPTION = 'REQUEST_ADOPTION'
const requestTools = (item) => {
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


export const selectTool = (item) => {
    return (dispatch) => {
        dispatch(requestTools(item))
        return fetch(`http://localhost:3000/tools/${item.id}/adoption`)
            .then(response => response.json())
            .then(json => dispatch(receiveAdoption(json)))
    }
}