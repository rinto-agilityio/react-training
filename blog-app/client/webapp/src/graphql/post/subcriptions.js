import gql from "graphql-tag";

export const POST_ADDED = gql`
  subscription postAdded {
    postAdded {
      id
      title
      content
      author {
        name
      }
    }
  }
`;
