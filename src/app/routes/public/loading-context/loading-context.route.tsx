import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { store, StateProvider } from './store'

export const LoadingContext = ({ throwError = false }) => {
  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        throwError
          ? reject(new Error({ message: 'Failed miserably' }))
          : resolve({ data: 'success' })
      }, 2000)
    })
  }
  return (
    <StateProvider>
      <Loader getData={getData}/>
      <ImaginaryChild req='apiReq'/>
    </StateProvider>
  )
}

const Loader = ({getData}) => {
  const {state, dispatch} = React.useContext(store)
  React.useEffect(() => {
    const p = getData()

    dispatch({type: 'setIsLoading', payload: {apiReq: true}})

    p.then(d => dispatch({type: 'setData', payload: {apiReq: d}}))
      .catch(e => dispatch({type: 'setHasErrored', payload: {apiReq: e}}))
      .finally(() => dispatch({type: 'setIsLoading', payload: {apiReq: false}}))
  }, [])
  return null
}

const ImaginaryChild = ({req}) => {
  const { state } = React.useContext(store)
  return (
    <h1>
      <Skeleton req={req}>
        {state['apiReq'].data.data}
      </Skeleton>
    </h1>
  )
}

export const Skeleton = ({
  req,
  children,
  errorMessage = 'Nothing to show here',
  translucent,
  width = '100%',
}) => {
  const { state: { [req]: {isLoading, hasErrored} } }= React.useContext(store)
  return isLoading ? (
    <DynamicSkeletonLine translucent={translucent} width={width} />
  ) : (
    <>{hasErrored ? errorMessage : children}</>
  )
}

const pulse = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`

const SkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: ${props =>
    props.translucent
      ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
      : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
  background-size: 400% 400%;
  animation: ${pulse} 1.2s ease-in-out infinite;
`

const SkeletonLine = styled(SkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;
  width: props => props.width;
  &::before {
    content: '\\00a0';
  }
`
const DynamicSkeletonLine = ({ translucent = false, width }) => (
  <SkeletonLine translucent={translucent} width={width} />
)
