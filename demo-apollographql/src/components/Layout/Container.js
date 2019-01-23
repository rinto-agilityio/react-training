import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 1rem 3rem;
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

export default Container
