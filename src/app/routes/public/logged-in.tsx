import * as React from 'react'

export const LoggedIn = (): React.ReactElement => {
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    setTimeout(() => {
      setData({list: []})
    }, 500)
  }, [])
  return (
    <div>
      <h1>You're logged in</h1>
      <h2>List of things</h2>
      <ul>
        {data.list.map(l => <li key={l}>{l}</li>)}
      </ul>
    </div>
  )
}