import React from "react";
// import { render } from "react-dom";
import { Query } from "react-apollo";

import gql from "graphql-tag";

const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;

const Todos = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.todos.map((todo, indx) => {
        return (
          <p key={indx}>{todo.type}</p>
        );
      });
    }}
  </Query>
);

export default Todos