import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import  { TabsDemo } from './components'

const tabs = ['Gator', 'Croc', 'Sarcosuchus']

export const TabsRouter: React.FC<{}> = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <Redirect to={{ pathname: '/tabs', search: `?activeTab=${tabs[0]}` }} />
        </Route>
        <Route path="/tabs">
          <TabsDemo tabs={tabs}></TabsDemo>
        </Route>
      </Switch>
    </Router>
  )
}
