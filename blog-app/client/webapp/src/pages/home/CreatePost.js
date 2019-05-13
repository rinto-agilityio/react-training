import React, { useRef } from 'react';
import { Spinner, Button, Form } from 'react-bootstrap';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import AppConfig from '../../configs/AppConfig';

//components
import Input from '../../components/commons/Input';
import TextArea from '../../components/commons/TextArea';
import Indicator from '../../components/commons/Indicator';
//style
import './styles/CreatePostStyle.css';

//mutations
import { CREATE_POST, EDIT_POST } from '../../graphql/post/mutations';

//queries
import { GET_POST } from '../../graphql/post/queries';

const CreatePost = ({user, pageInfo, handleCloseModal, history, isEdit, postEditing}) => {
  const title = useRef('');
  const content = useRef('');

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
      });
    } else {
      muation({
        variables: {
          id: `${ Date.now()}`,
          title: title.current ? title.current.value : '',
          content: content.current ? content.current.value : '',
          authorId: user.id,
        }
      });
    }
  };

  return (
    <>
      {
        !isEdit ?
        <Mutation
          mutation={CREATE_POST}
          onCompleted={ () => {
            handleCloseModal();
            history.push('/');
          }}

        >
          {(createPost, { data, loading, error }) => {
            if (loading) return (
              <div className='wrap-loading'>
                <Indicator />
              </div>
            );

            if (error) return `Error! ${error.message}`;

            return (
              <div className='create-post'>
                <Form onSubmit={ e => handleSubmitForm(e, createPost)} className='form-new-post'>
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
            );
          }}
        </Mutation>
        :
        <Mutation
          mutation={ EDIT_POST }
          onCompleted={ () => {
            handleCloseModal();
          }}
          update={(cache, { data: { editPost } }) => {
            // read cache
            const data = cache.readQuery({ query: GET_POST, variables: {authorId: user.id, first: AppConfig.PER_PAGE}});

            const newData = {
              ...data.getPostsByAuthor,
              posts: [data.getPostsByAuthor.posts.map(item => item.id === editPost.id ? editPost : item )]
            };

            // write back to cache
            cache.writeQuery({
              query: GET_POST,
              data: newData
            });
          }}
        >
          {(editPost, { data, loading, error }) => {

            if (loading) return (
              <div className='wrap-loading'>
                <Spinner animation="border" variant="primary" />
              </div>
            );

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
            );
          }};
        </Mutation>
      }
    </>
  );
};

CreatePost.propTypes = {
  pageInfo: PropTypes.object,
  user: PropTypes.object,
  handleCloseModal: PropTypes.func,
  isEdit: PropTypes.bool,
  postEditing: PropTypes.object
};

CreatePost.defaultProps = {
  pageInfo: {},
  user: {},
  handleCloseModal: () => {},
  isEdit: false,
  postEditing: {}
};

export default CreatePost;
