import * as React from 'react'

export const Loading: React.FunctionComponent<{}> = (): React.ReactElement => {
  const [loading, setLoading] = React.useState('')
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    let interval = 0
    if (!loaded) {
      interval = setInterval(() => {
        switch (loading) {
          case '': setLoading('.'); break
          case '.': setLoading('..'); break
          case '..': setLoading('...'); break
          case '...': setLoading(''); break
        }
      }, 500)
    } else if (interval) {
      clearInterval(interval)
      setLoading('')
    }
    return () => clearInterval(interval)
  }, [loading, setLoading, loaded])

  // setTimeout(() => setLoaded(true), Math.floor(Math.random() * 5000))
  return <div>{`Loading${loading}`}</div>
}
