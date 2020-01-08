import * as React from 'react'
import Tabs from '../../../components/tabs'

export const Landing: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Gator">
        See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
        After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
        Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>

    </div>
  )
}
