import React from 'react';

import Loading from './Loading';
import ButtonLoad from './ButtonLoad';

const FetchMore = ({
  loading,
  hasNextPage,
  variables,
  updateQuery,
  fetchMore,
  children,
}) => {
    console.log('hasNextPage', hasNextPage)
   return (

    <div className="FetchMore">
        {loading ? (
        <Loading />
        ) : (
        hasNextPage && (
          <ButtonLoad
          className="FetchMore-button"
          onClick={() => fetchMore({ variables, updateQuery })}
          >
          More {children}
          </ButtonLoad>
        )
        )}
    </div>
   ) 
}

export default FetchMore;