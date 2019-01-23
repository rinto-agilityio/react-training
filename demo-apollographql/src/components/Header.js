import React from 'react'

import {
  HeaderWrapper,
  SiteTitle,
  SiteTitleLink,
} from './Header.style'

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
