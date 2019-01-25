import React from 'react'
import { Query, Mutation } from 'react-apollo'

import { QUERY_PAGE_TITLE, UPDATE_PAGE_TITLE } from '../../grapql/pageTitle'

const PageInfo = () => {
  return (
    <Query query={QUERY_PAGE_TITLE}>
      {({ loading, error, data }) => {
        if (error) return <h1>Error...</h1>;
        if (loading || !data) return <h1>Loading...</h1>;

        return (
          <>
            <h1>{data.app.pageTitle}</h1>
            <Mutation
              mutation={UPDATE_PAGE_TITLE}
              variables={{ pageTitle: 'New pagename ABCD'}}
            >
              {updatePageTitle => (
                <button onClick={updatePageTitle}>Update-Mutation</button>
              )}
            </Mutation>
          </>
        )
      }}
    </Query>
  )
}

export default PageInfo
