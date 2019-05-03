import React, { memo, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Mutation } from 'react-apollo';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

//components
import Input from '../../components/commons/Input';

//style
import './CreatePostStyle.css';

//mutations
import { CREATE_POST } from '../../graphql/post/mutations';

import { GET_POST } from '../../graphql/post/queries';

const CreatePost = ({user, pageInfo, handleCloseModal, history}) => {
  const title = useRef('')
  const content = useRef('')
  const handleCreatePost = (event, createPost) => {
    event.preventDefault();
    createPost({
      variables: {
        id: `${ Date.now()}`,
        title: title.current ? title.current.value : '',
        content: content.current ? content.current.value : '',
        authorId: user.id
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createPost: {
          __typename: 'PostResponse',
          id: `${ Date.now()}`,
          title: title.current ? title.current.value : '',
          content: content.current ? content.current.value : '',
          author: {
            __typename: 'Author',
            name: user.name
          }
        }
      }
    })
  }
  return (
    <Mutation
      mutation={ CREATE_POST }
      onCompleted={ () => {
        history.push('/')
        handleCloseModal()
      }}

      refetchQueries={[{ query: GET_POST, variables: {authorId: user.id, after: pageInfo.endCursor, first: 5}}]}

      update={(cache, { data: { createPost } }) => {

        // read cache
        const data = cache.readQuery({ query: GET_POST, variables: {authorId: user.id, first: 5}});

        data.getPostsByAuthor.posts.unshift(createPost)

        if (data.getPostsByAuthor.posts.length > 5) {
          data.getPostsByAuthor.posts.pop()
        }

        // write back to cache
        cache.writeQuery({
          query: GET_POST,
          data
        })

      }}
    >
      {(createPost, { data, loading, error }) => {
        if (loading) return "Loading.............................";
        if (error) return `Error! ${error.message}`;
        return (
          <div className='create-post'>
            <Form onSubmit={e => handleCreatePost(e, createPost)}>
              <Input
                placeholder='input title'
                onRef={title}
              />
              <div>
                <textarea
                  placeholder='input content'
                  ref={content}
                />
              </div>

              <div>
                <Button variant="primary" type="submit">Create Post</Button>
              </div>
            </Form>
        </div>
        )
      }}
    </Mutation>
  )
}

CreatePost.propTypes = {
  pageInfo: PropTypes.object
};

CreatePost.defaultProps = {
  pageInfo: {}
};
export default memo(CreatePost);
