import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header: React.FunctionComponent<{}> = (): React.ReactElement => (
  <Nav>
    <StyledLink to="/">Landing</StyledLink>
    <StyledLink to="/log-in">Login</StyledLink>
    <StyledLink to="/home">Home</StyledLink>
  </Nav>
)

const StyledLink = styled(Link)`

`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
