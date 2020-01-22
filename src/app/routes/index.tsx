import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing, SignIn, TabsRouter } from './public'
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
          <Route path="/tabs">
            <TabsRouter />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
