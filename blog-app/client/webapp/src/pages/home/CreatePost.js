import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Mutation } from 'react-apollo';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

//components
import Input from '../../components/commons/Input';
import TextArea from '../../components/commons/TextArea'

//style
import './CreatePostStyle.css';

//mutations
import { CREATE_POST } from '../../graphql/post/mutations';

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
        authorId: user.id,
      }
    })
  }
  return (
    <Mutation
      mutation={ CREATE_POST }
      onCompleted={ () => {
        handleCloseModal()
      }}

    >
      {(createPost, { data, loading, error }) => {
        if (loading) return "Loading.............................";
        if (error) return `Error! ${error.message}`;

        return (
          <div className='create-post'>
            <Form onSubmit={e => handleCreatePost(e, createPost)} className='form-new-post'>
              <Input
                placeholder='input title'
                onRef={title}
              />

              <TextArea
                placeholder='input content'
                onRef={content}
              />

              <div className='button-save-post'>
                <Button variant="primary" type="submit">Save</Button>
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
export default CreatePost;
