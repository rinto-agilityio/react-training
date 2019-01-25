import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'

// GraphQL
import {
  QUERY_POST,
  QUERY_TOP_AUTHORS,
} from './graphql'

// Components
import Loading from '../../components/Loading'
import Container from '../../components/Layout/Container'
import ListPost from '../../components/ListPost'
import ListAuthor from '../../components/ListAuthor'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-column-gap: 1rem;
`
const MainContent = styled.section``
const Sidebar = styled.aside``

const LatestPost = () => (
  <Query query={QUERY_POST}>
    {( {loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <p>Error !!!</p>

      return <ListPost posts={data.posts} />
    }}
  </Query>
)

const TopAuthor = () => (
  <Query query={QUERY_TOP_AUTHORS}>
    {( {loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error !!!</p>

      return <ListAuthor authors={data.authors} />
    }}
  </Query>
)

const Homepage = () => (
  <Container>
    <Wrapper>
      <MainContent>
        <h1>Latest post</h1>
        <LatestPost />
      </MainContent>
      <Sidebar>
        <TopAuthor />
      </Sidebar>
    </Wrapper>
  </Container>
)

export default Homepage
