import * as React from 'react'
import { useLocation, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Tabs from '../../../components/tabs'

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

const TabsDemo: React.FunctionComponent<{tabs: string[]}> = ({ tabs }: {tabs: string[]}): React.ReactElement => {
  const location = useLocation()
  const [activeTab, setActiveTab] = React.useState(tabs[0])

  React.useEffect(() => {
    const query = new URLSearchParams(location.search)
    setActiveTab(query.get('activeTab') || tabs[0])
  }, [location, activeTab, setActiveTab])

  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs activeTab={activeTab}>
        <div label={tabs[0]}>
        See ya later, <em>Alligator</em>!
        </div>
        <div label={tabs[1]}>
        After 'while, <em>Crocodile</em>!
        </div>
        <div label={tabs[2]}>
        Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>

    </div>
  )
}
