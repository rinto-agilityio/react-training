import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation signUp($id: ID!, $email: String!, $password: String!, $name: String) {
    signUp(id: $id, email: $email, password: $password, name: $name) {
      success
      message
      author {
        id
        name
        password
        email
      }
    }
  }
`;

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

