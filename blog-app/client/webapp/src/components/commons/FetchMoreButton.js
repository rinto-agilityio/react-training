import React from 'react';
import { Spinner } from 'react-bootstrap'

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
      <div>
        <Spinner animation="border" variant="primary" />
      </div>
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
