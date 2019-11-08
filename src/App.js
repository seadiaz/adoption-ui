import React, { Component } from "react"
import Navigation from './containers/Navigation/Navigation'
import Monitor from './containers/Monitor/Monitor'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/navigation" exact={true} component={Navigation} />
          <Route path="/monitor" exact={true} component={Monitor} />
          <Redirect from="/" to="/navigation" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
