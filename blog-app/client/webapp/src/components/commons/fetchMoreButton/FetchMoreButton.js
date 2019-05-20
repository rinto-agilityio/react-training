import React from 'react';
import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

import '../styles/FetchMoreButton.css';

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
        <Button
          className="fetch-more-Button"
          onClick={() => fetchMore({ variables, updateQuery })}
        >
          More Post....
        </Button>
      )
    )}
  </div>
);

export default FetchMoreButton;
