import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

// GraphQL Query
import { QUERY_AUTHOR } from './graphql'

// Components
import Container from '../../components/Layout/Container'
import Loading from '../../components/Loading'
import ListPost from '../../components/ListPost'
import AuthorInfo from './components/Info'

const Author = ({ match }) => {
  const authorId = parseInt(match.params.id)

  return (
    <Query query={QUERY_AUTHOR} variables={{ id: authorId }}>
      {( {loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <p>Error !!!</p>

        const {
          author: {
            name,
            photo,
            desc,
            posts
          }
        } = data

        return (
          <Container>
            <AuthorInfo
              name={name}
              photo={photo}
              bio={desc}
            />
            <ListPost posts={posts} />
          </Container>
        )
      }}
    </Query>
  )
}

Author.propTypes = {
  match: PropTypes.object.isRequired
}

export default Author
