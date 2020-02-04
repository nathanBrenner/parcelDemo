import * as React from 'react'

const initialState = {
  apiReq: {
    data: { data: ''},
    isLoading: true,
    hasErrored: false
  }
}
const store = React.createContext(initialState)

const { Provider } = store

const StateProvider = ({children}) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    const [key, value] = Object.entries(action.payload)[0]

    switch(action.type) {
      case 'setIsLoading':
        return {...state, [key]: {...state[key], isLoading: value}}
      case 'setHasErrored':
        return {...state, [key]: {...state[key], hasErrored: value}}
      case 'setData':
        return {...state, [key]: {...state[key], data: value}}
      default:
        throw new Error()
    }
  }, initialState)
  return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { store, StateProvider }