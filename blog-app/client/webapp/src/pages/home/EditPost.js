import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
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
import { EDIT_POST, } from '../../graphql/post/mutations';

//queries
import { GET_POST } from '../../graphql/post/queries';

const EditPost = ({user, handleCloseModal, postEditing}) => {

  const title = useRef('');
  const content = useRef('');

  const handleSubmitForm = (event, editPost) => {

    event.preventDefault();

    editPost({
      variables: {
        post: {
          id: postEditing.id,
          title: title.current ? title.current.value : '',
          content: content.current ? content.current.value : '',
          authorId: user.id
        }
      }
    });
  };

  return (
    <Mutation
      mutation={EDIT_POST}
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
        return null;
      }}
    >
      {(editPost, { data, loading, error }) => {
        if (loading) return (
          <div className='wrap-loading'>
            <Indicator />
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
      }}
    </Mutation>
  );
};

EditPost.propTypes = {
  user: PropTypes.object,
  handleCloseModal: PropTypes.func,
  isEdit: PropTypes.bool,
  postEditing: PropTypes.object
};

EditPost.defaultProps = {
  pageInfo: {},
  user: {},
  handleCloseModal: () => {},
  isEdit: false,
  postEditing: {}
};

export default EditPost;
