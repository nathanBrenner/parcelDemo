import * as React from 'react'
import { Link } from 'react-router-dom'

const routes = [
  { to: '/log-in', label: 'Formik' },
  { to: '/home', label: 'home' },
  { to: '/tabs', label: 'tabs' },
  { to: '/loading', label: 'loading' },
  { to: '/skeleton', label: 'skeleton' }
  { to: '/context', label: 'context'},
  { to: '/loading-context', label: 'loading-context'}
]

export const Landing: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <ul>{routes.map(({ to, label }) => (<li key={to}><Link to={to}>{label}</Link></li>))}</ul>
  )
}
