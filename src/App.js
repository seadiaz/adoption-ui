import React, { Component } from "react"
import Navigation from './containers/Navigation/Navigation'
import Monitor from './containers/Monitor/Monitor'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/adoption">
        <Switch>
          <Route path="/navigation" exact={true} component={Navigation} />
          <Route path="/monitor" exact={true} component={Monitor} />
          <Redirect from="/" to="/navigation" exact />
          <Route path="/" render={() => <div>Not found</div>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
