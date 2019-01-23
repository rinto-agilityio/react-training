import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledContainer = styled.div`
  padding: 1rem 3rem;
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
