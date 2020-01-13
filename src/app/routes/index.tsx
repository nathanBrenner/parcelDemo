import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Landing, SignIn } from './public'
import { Home } from './private'
import { Header } from '../../components'

const tabs = ['Gator', 'Croc', 'Sarcosuchus']

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
          <Route exact path="/">
            <Redirect to={{ pathname: '/tabs', search: `?activeTab=${tabs[0]}` }} />
          </Route>
          <Route path='/tabs'>
            <Landing tabs={tabs}></Landing>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
