import * as React from 'react'

const initialState = {
  word: 'foo'
}
const store = React.createContext(initialState)

const { Provider } = store

const StateProvider = ({children}) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch(action.type) {
      case 'change':
        return {word: action.payload}
      default:
        throw new Error()
    }
  }, initialState)
  return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { store, StateProvider }
