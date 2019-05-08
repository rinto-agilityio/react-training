import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo'

//style
import './styles/PostStyle.css'

//mutation
import { DELETE_POST } from '../../graphql/post/mutations'

import { GET_POST } from '../../graphql/post/queries'

const PostItem = ({post, user, handleOpenModal}) => {
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
    <div className='wrap-post'>
      <p className='post-title'>{post.title}</p>
      <p>{post.content}</p>
      <button onClick={handleEditPost}>Edit</button>
      <Mutation
        mutation={DELETE_POST}
        update={(cache, { data: { editPost } }) => {

        // read cache
        const data = cache.readQuery({ query: GET_POST, variables: {authorId: user.id, first: 5} });

        const newData = {
          ...data.getPostsByAuthor,
          posts: [data.getPostsByAuthor.posts.filter(item => item.id !== post.id)]
        }

        // write back to cache
        cache.writeQuery({
          query: GET_POST,
          data: newData
        })
        }}
      >
        {(deletePost, { data, loading, error }) => {
          return (
            <button onClick={() => handleDeletePost(deletePost)}>Delete</button>
          )
        }}
      </Mutation>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object,
};

PostItem.defaultProps = {
  post: {}
};

export default memo(PostItem);
