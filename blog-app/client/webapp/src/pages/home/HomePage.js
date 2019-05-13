import React, { memo, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Query } from 'react-apollo';

//components
import Header from '../../components/header/Header';
import PrimaryModal from '../../components/commons/PrimaryModal';
import CreatePost from './CreatePost';
import PostList from '../../components/Posts/PostList';
import AppConfig from '../../configs/AppConfig';

//style
import './styles/HomePageStyle.css';

import { POST_ADDED, POST_EDIT, POST_DELETE } from '../../graphql/post/subcriptions';

//queries
import { LOGGED_USER } from '../../graphql/author/queries';
import { GET_POST } from '../../graphql/post/queries';

const HomePage = props => {

  const { accessClient } = props;

  const user = accessClient.readQuery({query: LOGGED_USER});

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [postEditing, setPostEditing] =  useState(null);

  const handleOpenModal = (post) => {
    if (post) {
      setIsEdit(true);
      setPostEditing(post);
    } else {
      setIsEdit(false);
      setPostEditing(null);
    }

    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleSubcriptionNewPost = subscribeToMore => {
    subscribeToMore({
      document: POST_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const newPost = subscriptionData.data.postAdded;
        return {
          ...prev,
          getPostsByAuthor: {
            ...prev.getPostsByAuthor, posts: [...prev.getPostsByAuthor.posts, newPost]
          }
        };
      }
    });
    subscribeToMore({
      document: POST_EDIT,
      updateQuery: (prev, { subscriptionData }) => {

        if (!subscriptionData.data) return prev;
        const newPost = subscriptionData.data.postEdit;

        return {
          ...prev,
          getPostsByAuthor: {
            ...prev.getPostsByAuthor,
            posts: [...prev.getPostsByAuthor.posts.map(item => item.id === newPost.id ? newPost : item)]
          }
        };
      }
    });

    subscribeToMore({
      document: POST_DELETE,
      updateQuery: (prev, { subscriptionData }) => {

        if (!subscriptionData.data) return prev;
        const postDeleted = subscriptionData.data.postDelete;

        const postUpdate = {
          ...prev,
          getPostsByAuthor: {
            ...prev.getPostsByAuthor,
            posts: [...prev.getPostsByAuthor.posts.filter(post => post.id !== postDeleted.id)]
          }
        };
        return postUpdate;
      }
    });
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => handleOpenModal()}
      >
        Create Post
      </Button>
      <Query
        query={GET_POST}
        fetchPolicy="cache-and-network"
        variables={{
          authorId: user.loggedUser.id,
          first: AppConfig.PER_PAGE
        }}
      >
        {({ loading, error, data, fetchMore, subscribeToMore, client }) => {
          if (loading) return <Spinner animation="border" variant="primary" />;
          if (error) return `Error! ${error.message}`;
          const posts = data && data.getPostsByAuthor && data.getPostsByAuthor.posts;
          if (posts) {
            client.writeData({
              data: {
                posts: posts
              }
            });
          }

          return (
            <div className='container'>
              <Header />
              <div>

                <div>
                  <PostList
                    posts={posts}
                    pageInfo={ data && data.getPostsByAuthor && data.getPostsByAuthor.pageInfo }
                    // loading={loading}
                    fetchMore={fetchMore}
                    handleSubcriptionNewPost={() => handleSubcriptionNewPost(subscribeToMore)}
                    handleOpenModal={handleOpenModal}
                    user={user && user.loggedUser}
                    history={props.history}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
      <PrimaryModal
        show={isOpenModal}
        title={`${isEdit ? 'Edit Post' : 'Create Post'}`}
        onClose={handleCloseModal}
        confirmPayment
      >
        <CreatePost
          user={user && user.loggedUser}
          handleCloseModal={handleCloseModal}
          history={props.history}
          isEdit={isEdit}
          postEditing={postEditing}
        />
      </PrimaryModal>
    </div>
  );
};

export default memo(HomePage);