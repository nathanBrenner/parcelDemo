import * as React from 'react'
import { AppRouter } from './routes'
import './style.css'

export const App: React.FunctionComponent<{}> = (): React.ReactElement => {
  return <div className='app'><AppRouter /></div>
}
