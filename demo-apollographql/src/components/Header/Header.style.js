import styled from 'styled-components'

// Components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

export const Wrapper = styled(Grid)({
  marginBottom: '1rem',
})

export const Container = styled(Paper)({
  borderRadius: 0,
  textAlign: 'center',
})

export const StyledLink = styled(Link)({
  textDecoration: 'none',
})
