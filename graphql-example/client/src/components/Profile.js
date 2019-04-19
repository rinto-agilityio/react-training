import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import RepositoryList from './RepositoryList'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'
import REPOSITORY_FRAGMENT  from '../Fragment/RepositoryFragment'

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(
        first: 2
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            ...repository
          }
        },
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;  

const Profile = () => (
  <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
    {({ data, loading, error, fetchMore }) => {
      const { viewer } = data;
      if (loading && !viewer) {
        return <Loading />;
      }
      if (error) return <ErrorMessage error={error}/>
      return (
        <RepositoryList
          repositories={viewer.repositories}
          fetchMore={fetchMore}
          loading={loading}
        />
      )
    }}
  </Query>  
)

export default Profile;