export const CONFIG_UPDATED = 'CONFIG_UPDATED'
export const updateConfig = (url, key) => {
    return (dispatch) => {
        return dispatch({
            type: CONFIG_UPDATED,
            value: {
                url: url,
                key: key
            }
        })
    }
}