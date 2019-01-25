import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

// GraphQL Query
import { QUERY_POST } from './graphql'

// Components
import Container from '../../components/Layout/Container'
import Loading from '../../components/Loading'
import Post from './components/Post'

const UpdateTitle = ({ title }) => {
  useEffect(() => {
    document.title = title
  })

  return null
}

const SinglePost = ({ match }) => {
  const { slug } = match.params

  return (
    <Query query={QUERY_POST} variables={{ slug }}>
      {( {loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <p>Error !!!</p>

        const { post: { title, content, author } } = data
        console.log('data: ', data)

        return (
          <Container>
            <UpdateTitle title={data.post.title} />
            <Post
              title={title}
              content={content}
              author={author}
            />
          </Container>
        )
      }}
    </Query>
  )
}

UpdateTitle.defaultProps = {
  title: 'Single Post'
}

UpdateTitle.propTypes = {
  title: PropTypes.string
}

SinglePost.propTypes = {
  match: PropTypes.object.isRequired
}

export default SinglePost
