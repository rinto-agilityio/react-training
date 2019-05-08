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
import { CREATE_POST, EDIT_POST } from '../../graphql/post/mutations';

//queries
import { GET_POST } from '../../graphql/post/queries'

const CreatePost = ({user, pageInfo, handleCloseModal, history, isEdit, postEditing}) => {
  const title = useRef('')
  const content = useRef('')

  const handleSubmitForm = (event, muation) => {

    event.preventDefault();
    if (isEdit) {
      muation({
        variables: {
          post: {
            id: postEditing.id,
            title: title.current ? title.current.value : '',
            content: content.current ? content.current.value : '',
            authorId: user.id
          }
        }
      })
    } else {
      muation({
        variables: {
          id: `${ Date.now()}`,
          title: title.current ? title.current.value : '',
          content: content.current ? content.current.value : '',
          authorId: user.id,
        }
      })
    }
  }

  return (
    <>
      {
        !isEdit ?
        <Mutation
          mutation={CREATE_POST}
          onCompleted={ () => {
            handleCloseModal()
          }}

        >
          {(editPost, { data, loading, error }) => {
            if (loading) return "Loading.............................";
            if (error) return `Error! ${error.message}`;

            return (
              <div className='create-post'>
                <Form onSubmit={ e => handleSubmitForm(e, editPost)} className='form-new-post'>
                  <Input
                    placeholder='input title'
                    onRef={title}
                    value={postEditing ? postEditing.title : ''}
                  />

                  <TextArea
                    placeholder='input content'
                    onRef={content}
                    value={postEditing ? postEditing.content : ''}
                  />

                  <div className='button-save-post'>
                    <Button variant="primary" type="submit">Save</Button>
                  </div>

                </Form>
            </div>
            )
          }}
        </Mutation>
        :
        <Mutation
          mutation={ EDIT_POST }
          onCompleted={ () => {
            handleCloseModal()
          }}
          update={(cache, { data: { editPost } }) => {

            // read cache
            const data = cache.readQuery({ query: GET_POST, variables: {authorId: user.id, first: 5} });

            const newData = {
              ...data.getPostsByAuthor,
              posts: [data.getPostsByAuthor.posts.map(item => item.id === editPost.id ? editPost : item )]
            }

            // write back to cache
            cache.writeQuery({
              query: GET_POST,
              data: newData
            })
          }}
        >
          {(editPost, { data, loading, error }) => {
            if (loading) return "Loading.............................";
            if (error) return `Error! ${error.message}`;

            return (
              <div className='create-post'>
                <Form onSubmit={ e => handleSubmitForm(e, editPost)} className='form-new-post'>
                  <Input
                    placeholder='input title'
                    onRef={title}
                    value={postEditing ? postEditing.title : ''}
                  />

                  <TextArea
                    placeholder='input content'
                    onRef={content}
                    value={postEditing ? postEditing.content : ''}
                  />

                  <div className='button-save-post'>
                    <Button variant="primary" type="submit">Save</Button>
                  </div>

                </Form>
            </div>
            )
          }}
        </Mutation>
      }
    </>
  )
}

CreatePost.propTypes = {
  pageInfo: PropTypes.object
};

CreatePost.defaultProps = {
  pageInfo: {}
};
export default CreatePost;
