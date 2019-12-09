export const CONFIG_UPDATED = 'CONFIG_UPDATED'
export const updateConfig = (url, key, labels) => {
    return (dispatch) => {
        window.localStorage.setItem('apiUrl', url)
        window.localStorage.setItem('apiKey', key)
        window.localStorage.setItem('labels', JSON.stringify(labels))
        return dispatch({
            type: CONFIG_UPDATED,
            value: {
                url: url,
                key: key,
                labels: labels
            }
        })
    }
}