import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap'

//style
import './styles/PostStyle.css'

//mutation
import { DELETE_POST } from '../../graphql/post/mutations'

const PostItem = ({post, history, user, handleOpenModal}) => {
  const handleEditPost = () => {
    handleOpenModal(post)
  }

  const handleDeletePost = deletePost => {
    deletePost({
      variables: {
        id: post.id
      }
    })
  }
  return (
      <Mutation
        mutation={DELETE_POST}
        onCompleted={() => history.push('/') }
      >
        {(deletePost, { data, loading, error }) => {

          if (loading) return (
              <div className='wrap-loading'>
                <Spinner animation="border" variant="primary" />
              </div>
            );
          return (
            <div className='wrap-post'>
              <p>
                <span className='label'>Title:</span>
                <span className='post-title'>{post.title}</span>
              </p>
              <p>
                <span className='label'>Content:</span>
                <span className='post-title'>{post.content}</span>
              </p>
              <Button onClick={handleEditPost} variant='primary'>Edit</Button> 
              <Button onClick={() => handleDeletePost(deletePost)} variant='danger' className='custom-button'>Delete</Button> 
            </div>
          )
        }}
      </Mutation>
  )
}

PostItem.propTypes = {
  post: PropTypes.object,
};

PostItem.defaultProps = {
  post: {}
};

export default memo(PostItem);
