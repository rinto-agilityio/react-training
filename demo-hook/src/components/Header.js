import React from 'react'
import styled from 'styled-components'

// Themes
import { SiteThemeContext } from '../contexts/ThemeContext'

// Components
import LampIcon from './Icons/Lamp'

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
const IconWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  justify-self: right;
`

const Header = () => (
  <HeaderWrapper>
    <SiteTitle>React-hook Demo</SiteTitle>
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
