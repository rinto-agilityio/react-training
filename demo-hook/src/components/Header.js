import React from 'react'
import styled from 'styled-components'

// Themes
import { SiteThemeContext } from '../contexts/ThemeContext'

// Components
import LampIcon from './Icons/Lamp'

const IconWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
`

const HeaderWrapper = styled.nav`
  padding: 1rem;
  background-color: ${({ theme }) => theme.navBgColor };
  border-bottom: 2px solid ${({ theme }) => theme.navBorderColor};
`

const Header = () => (
  <HeaderWrapper>
    This is header
    <SiteThemeContext.Consumer>
      {({ currentTheme, handleThemeChange }) => (
        <IconWrapper onClick={handleThemeChange}>
          <LampIcon isOn={currentTheme === 'dark'} />
        </IconWrapper>
      )}
    </SiteThemeContext.Consumer>
  </HeaderWrapper>
)

export default Header
