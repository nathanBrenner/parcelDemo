import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header: React.FunctionComponent<{}> = (): React.ReactElement => (
  <Nav>
    <StyledLink to="/">Landing</StyledLink>
  </Nav>
)

const StyledLink = styled(Link)`

`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
