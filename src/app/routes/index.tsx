import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Landing, SignIn } from './public'
import { Home } from './private'
import { Header } from '../../components'

export const AppRouter: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/log-in">
            <SignIn />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
