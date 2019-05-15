import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

//components
import Input from '../../components/commons/Input';
import TextArea from '../../components/commons/TextArea';
import Indicator from '../../components/commons/Indicator';
//style
import './styles/CreatePostStyle.css';

//mutations
import { CREATE_POST } from '../../graphql/post/mutations';

const CreatePost = ({user, handleCloseModal, history}) => {

  const title = useRef('');
  const content = useRef('');

  const handleSubmitForm = (event, createPost) => {

    event.preventDefault();

    createPost({
      variables: {
        id: `${ Date.now()}`,
        title: title.current ? title.current.value : '',
        content: content.current ? content.current.value : '',
        authorId: user.id,
      }
    });
  };

  return (
    <Mutation
      mutation={CREATE_POST}
      onCompleted={ () => {
        handleCloseModal();
        history.push('/');
      }}
      onError={() => {}}
    >
      {(createPost, { data, loading, error }) => {

        if (loading) return (<Indicator />);

        if (error) return `Error! ${error.message}`;

        return (
          <div className='create-post'>
            <Form onSubmit={ e => handleSubmitForm(e, createPost)} className='form-new-post'>
              <Input
                placeholder='input title'
                onRef={title}
                value={''}
              />

              <TextArea
                placeholder='input content'
                onRef={content}
                value={''}
              />

              <div className='button-save-post'>
                <Button variant="primary" type="submit" >Save</Button>
              </div>

            </Form>
          </div>
        );
      }}
    </Mutation>
  );
};

CreatePost.propTypes = {
  user: PropTypes.object,
  handleCloseModal: PropTypes.func,
};

CreatePost.defaultProps = {
  user: {},
  handleCloseModal: () => {},
};

export default CreatePost;
