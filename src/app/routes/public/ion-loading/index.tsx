import * as React from 'react'
import LogoIconSVG from './logo-icon.svg'
import styled, {keyframes} from 'styled-components'
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`
const LogomarkStyle = styled.img`
  // em because the parent CombinationMark component
  // will set the font size for this instance of the Logotype
  height: 3.4em;
  margin: 0 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 3s infinite linear;
`
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default props => (
  <Container>
    <LogomarkStyle {...props} src={LogoIconSVG} alt={'Ion Channel Logo'} />
  </Container>
)