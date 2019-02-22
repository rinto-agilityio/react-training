import React from 'react'
import PropTypes from 'prop-types'

// Components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Wrapper, Container, StyledLink } from './Header.style'

const Header = ({ siteTitle }) => (
  <Wrapper container>
    <Grid item xs={12}>
      <Container>
        <Typography component="h1" variant="h3">
          <StyledLink
            to="/"
            title="React-hook demo"
          >
            {siteTitle}
          </StyledLink>
        </Typography>
      </Container>
    </Grid>
  </Wrapper>
)

Header.defaultProps = {
  siteTitle: 'GraphQL & React'
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

export default Header
