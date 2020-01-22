import * as React from 'react'
import { Link } from 'react-router-dom'

const routes = [
  { to: '/', label: 'Landing' },
  { to: '/log-in', label: 'Formik' },
  { to: '/home', label: 'home' },
  { to: '/tabs', label: 'tabs' },
  { to: '/loading', label: 'loading' }
]

export const Landing: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <ul>{routes.map(({ to, label }) => (<li key={to}><Link to={to}>{label}</Link></li>))}</ul>
  )
}
