import React, { memo, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Mutation } from 'react-apollo';
import { Form } from 'react-bootstrap';

//components
import Input from '../../components/commons/Input';

//style
import './CreatePostStyle.css';

//mutations
import { CREATE_POST } from '../../graphql/mutations/mutation';

import { GET_POST } from '../../graphql/queries/Queries'

const CreatePost = props => {
  const title = useRef('')
  const content = useRef('')

  const handleCreatePost = (event, createPost) => {
    event.preventDefault();
    createPost({
      variables: {
        id: `${ Date.now()}`,
        title: title.current ? title.current.value : '',
        content: content.current ? content.current.value : '',
        authorId: props.user.id
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
            name: props.user.name
          }
        }
      }
    })
  }
  return (
    <Mutation
      mutation={ CREATE_POST }
      onCompleted={ () => {
        props.handleCloseModal()
      }}
      update={(cache, { data: { createPost } }) => {
        // read cache
        const data = cache.readQuery({ query: GET_POST, variables: {authorId: props.user.id} });
        data.getPostsByAuthor.posts.push(createPost)

        // write back to cache
        cache.writeQuery({
          query: GET_POST,
          data
        })

      }}
    >
      {(createPost, { data, loading, error }) => {
        if (loading) return "Loading...";
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

export default memo(CreatePost);
