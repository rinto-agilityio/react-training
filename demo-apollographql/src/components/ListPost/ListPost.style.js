import styled from 'styled-components'

// Components
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

export const ItemWrapper = styled(Paper)({
  padding: '1rem',
  marginBottom: '1rem'
})

export const ItemLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
})
