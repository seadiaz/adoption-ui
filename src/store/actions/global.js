export let getApiKey = () => window.localStorage.getItem('apiKey')

class Global {
    static get apiKey() {
        return window.localStorage.getItem('apiKey')
    }

    static get apiUrl() {
        if (/^.*staging.*/.test(window.location.hostname)) {
            return process.env.REACT_APP_API_URL_STAGING
        }
        if (/^.*production.*/.test(window.location.hostname)) {
            return process.env.REACT_APP_API_URL_PRODUCTION
        }

        return 'http://localhost:3000'
    }
}

export default Global