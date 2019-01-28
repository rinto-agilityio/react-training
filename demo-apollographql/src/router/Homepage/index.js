import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'

// GraphQL
import { QUERY_LATEST_POST_AND_TOP_AUTHORS } from './graphql'

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

const Homepage = () => (
  <Query query={QUERY_LATEST_POST_AND_TOP_AUTHORS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <p>Erroor!</p>

      return (
        <Container>
          <Wrapper>
            <MainContent>
              <h1>Latest post</h1>
              <ListPost posts={data.posts} />
            </MainContent>
            <Sidebar>
              <ListAuthor authors={data.authors} />
            </Sidebar>
          </Wrapper>
        </Container>
      )
    }}
  </Query>
)

export default Homepage
