import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.nav`
  padding: 1rem;
  background-color: #fff;
  border-bottom: 2px solid #ddd;
  display: grid;
  grid-template-columns: auto auto;
`

const SiteTitle = styled.h2`
  margin: 0;
`
const SiteTitleLink = styled(Link)`
  text-decoration: none;
`

export {
  HeaderWrapper,
  SiteTitle,
  SiteTitleLink,
}
