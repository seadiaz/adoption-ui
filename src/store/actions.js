export const SELECT_TOOL = 'SELECT_TOOL'

export const selectTool = (item) => {
    return { type: SELECT_TOOL, value: item }
}

export const REQUEST_TOOLS = 'REQUEST_TOOLS'
const requestTools = () => {
    return {
        type: REQUEST_TOOLS
    }
}

export const RECEIVE_TOOLS = 'RECEIVE_TOOLS'
function receivePosts(json) {
    console.log(json)
    return {
        type: RECEIVE_TOOLS,
        items: json,
        receivedAt: Date.now()
    }
}

export const fetchTools = () => {
    return (dispatch) => {
        console.log('DOG')
        dispatch(requestTools())
        return fetch(`http://localhost:3000/tools`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}