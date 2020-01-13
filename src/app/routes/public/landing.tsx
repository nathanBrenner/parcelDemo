import * as React from 'react'
import { useLocation } from 'react-router-dom'

import Tabs from '../../../components/tabs'

export const Landing: React.FunctionComponent<{tabs: string[]}> = ({ tabs }: {tabs: string[]}): React.ReactElement => {
  const location = useLocation()
  const [activeTab, setActiveTab] = React.useState(tabs[0])

  React.useEffect(() => {
    const query = new URLSearchParams(location.search)
    setActiveTab(query.get('activeTab') || '')
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
