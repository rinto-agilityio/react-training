import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './Container.style'

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
