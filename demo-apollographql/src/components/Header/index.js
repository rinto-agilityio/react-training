import React from 'react'

// Components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Wrapper, Container, StyledLink } from './Header.style'

const Header = () => (
  <Wrapper container>
    <Grid item xs={12}>
      <Container>
        <Typography component="h1" variant="h3">
          <StyledLink
            to="/"
            title="React-hook demo"
          >
            GraphQL & React
          </StyledLink>
        </Typography>
      </Container>
    </Grid>
  </Wrapper>
)

export default Header
