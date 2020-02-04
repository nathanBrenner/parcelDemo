import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing, SignIn, TabsRouter, LoadingRoute, SkeletonRoute, ContextRoute, LoadingContext } from './public'
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
          <Route path="/loading">
            <LoadingRoute />
          </Route>
          <Route path="/skeleton">
            <SkeletonRoute />
          </Route>
          <Route path="/context" component={ContextRoute} />
          <Route path="/loading-context" component={LoadingContext} />
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
