import gql from 'graphql-tag';

export const CREATE_POST = gql`
  mutation createPost($id: ID!, $title: String, $content: String, $authorId: ID!) {
    createPost(id: $id, title: $title, content: $content, authorId: $authorId) {
      id
      title
      content
      author {
        name
      }
    }
  }
`;

export const EDIT_POST = gql`
  mutation editPost($post: PostInput) {
    editPost(post: $post) {
      id
      title
      content
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID) {
    deletePost(id: $id) {
      post {
        id
        title
      }
    }
  }
`;

