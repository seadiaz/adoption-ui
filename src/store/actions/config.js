export const CONFIG_UPDATED = 'CONFIG_UPDATED'
export const updateConfig = (url, key) => {
    return (dispatch) => {
        window.localStorage.setItem('apiUrl', url)
        window.localStorage.setItem('apiKey', key)
        return dispatch({
            type: CONFIG_UPDATED,
            value: {
                url: url,
                key: key
            }
        })
    }
}