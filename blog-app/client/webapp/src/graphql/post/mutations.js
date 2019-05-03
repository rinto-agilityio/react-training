import gql from 'graphql-tag'

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
