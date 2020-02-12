import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing, TabsRouter, LoadingRoute, SkeletonRoute, ContextRoute, LoadingContext } from './public'
import { Home } from './private'
import { Header } from '../../components'
import Logo from './public/ion-loading'


export const AppRouter: React.FunctionComponent<{}> = (): React.ReactElement => {
  // const SignIn = React.lazy(() => import("./public/sign-in"))
  const SignIn = React.lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./public/sign-in")), 5000)
      )
  );
  return (
    <Router>
      <Header />
      <div>
        <React.Suspense fallback={<Logo />}>
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
            <Route path="/ion-loading">
              <Logo />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  )
}
