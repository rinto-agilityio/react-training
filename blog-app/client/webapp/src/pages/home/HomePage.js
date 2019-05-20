import React, { memo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Query } from 'react-apollo';

//components
import Header from '../../components/header/Header';
import PrimaryModal from '../../components/commons/primaryModal/PrimaryModal';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import PostList from '../../components/posts/postList/PostList';
import AppConfig from '../../configs/AppConfig';

//style
import './styles/HomePageStyle.css';

import { POST_ADDED, POST_EDIT, POST_DELETE } from '../../graphql/post/subcriptions';

//queries
import { LOGGED_USER } from '../../graphql/author/queries';
import { GET_POST } from '../../graphql/post/queries';
import { Indicator } from '../../components/commons/indicator/Indicator';

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
    <Query
      query={GET_POST}
      fetchPolicy="cache-and-network"
      variables={{
        authorId: user.loggedUser.id,
        first: AppConfig.PER_PAGE
      }}
    >
      {({ loading, error, data, fetchMore, subscribeToMore, client }) => {
        if (loading) return <Indicator />;
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
              <Button
                variant="primary"
                onClick={() => handleOpenModal()}
              >
                Create Post
              </Button>
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
              <PrimaryModal
                show={isOpenModal}
                title={`${isEdit ? 'Edit Post' : 'Create Post'}`}
                onClose={handleCloseModal}
                confirmPayment
              >
              {
                isEdit ?
                <EditPost
                  user={user && user.loggedUser}
                  handleCloseModal={handleCloseModal}
                  history={props.history}
                  isEdit={isEdit}
                  postEditing={postEditing}
                />
                :
                <CreatePost
                  user={user && user.loggedUser}
                  handleCloseModal={handleCloseModal}
                  history={props.history}
                />
              }
              </PrimaryModal>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default memo(HomePage);
