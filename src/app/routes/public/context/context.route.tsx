import * as React from 'react'
import { store, StateProvider } from './store'

export function ContextRoute() {
  const {state, dispatch} = React.useContext(store)
  console.log(React.useContext(store))
  return (
    <StateProvider>
      <ContextDemo />
    </StateProvider>
  );
}

function ContextDemo() {
  const {state, dispatch} = React.useContext(store)

  return (
    <>
      <div>{state.word}</div>
      <button onClick={() => dispatch({type: 'change', payload: Math.random()})}>click me</button>
    </>
  );
}
