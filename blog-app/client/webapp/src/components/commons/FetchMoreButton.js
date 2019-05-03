import React from 'react';

import './styles/FetchMoreButton.css';

const FetchMoreButton = ({
  loading,
  hasNextPage,
  variables,
  updateQuery,
  fetchMore,
  children,
}) => (
  <div className="fetch-more">
    {loading ? (
      "Loading..."
    ) : (
      hasNextPage && (
        <button
          className="fetch-more-button"
          onClick={() => fetchMore({ variables, updateQuery })}
        >
          More {children}
        </button>
      )
    )}
  </div>
);

export default FetchMoreButton;
