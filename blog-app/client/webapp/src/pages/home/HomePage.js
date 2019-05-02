import React, { memo, useState } from 'react';
import { Button } from 'react-bootstrap'
import { Query } from 'react-apollo'

//components
import Header from '../../components/header/Header'
import PrimaryModal from '../../components/commons/PrimaryModal'
import CreatePost from './CreatePost'
import PostList from '../../components/Posts/PostList'
//style
import './HomePageStyle.css'

//queries
import { LOGGED_USER, GET_POST } from '../../graphql/queries/Queries'

const HomePage = props => {

  const { accessClient } = props
  console.log('accessClient', accessClient)
  const user = accessClient.readQuery({query: LOGGED_USER})

  const [isCreatePost, setIsCreatePost] = useState(false)

  const handleCreatePost = () => {
    setIsCreatePost(true)
  }

  const handleCloseModal = () => {
    setIsCreatePost(false)
  }

  return (
    <Query
      query={GET_POST}
      variables={{authorId: user.loggedUser.id}}
      fetchPolicy='cache-and-network'
    >
      {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div className='container'>
          <Header />
          <div>
            <Button
              variant="primary"
              onClick={handleCreatePost}
            >
              Create Post
            </Button>
            <div>
              <PostList
                data={data && data.getPostsByAuthor.posts}
              />
            </div>

            <PrimaryModal
              show={isCreatePost}
              title='Create New Post'
              onClose={handleCloseModal}
            >
              <CreatePost
                user={user && user.loggedUser}
                handleCloseModal={handleCloseModal}
                history={props.history}
              />
            </PrimaryModal>
          </div>
        </div>
      );
    }}
    </Query>

  )
}

export default memo(HomePage);
