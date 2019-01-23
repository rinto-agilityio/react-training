import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.nav`
  padding: 1rem;
  background-color: ${({ theme }) => theme.navBgColor };
  border-bottom: 2px solid ${({ theme }) => theme.navBorderColor};
  display: grid;
  grid-template-columns: auto auto;
`

const SiteTitle = styled.h2`
  margin: 0;
`
const SiteTitleLink = styled(Link)`
  text-decoration: none;
`

const Header = () => (
  <HeaderWrapper>
    <SiteTitle>
      <SiteTitleLink to="/" title="React-hook demo">
        GraphQL & React
      </SiteTitleLink>
    </SiteTitle>
  </HeaderWrapper>
)

export default Header
