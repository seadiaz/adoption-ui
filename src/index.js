import 'tachyons'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import adoptionReducer from './store/reducers/adoption'
import toolsReducer from './store/reducers/tools'
import monitorReducer from './store/reducers/monitor'
import configReducer from './store/reducers/config'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
    adoption: adoptionReducer,
    tools: toolsReducer,
    monitor: monitorReducer,
    config: configReducer
})
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

serviceWorker.unregister()
