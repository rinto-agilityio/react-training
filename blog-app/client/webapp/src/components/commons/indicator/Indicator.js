import React, { memo } from 'react';
import { Spinner } from 'react-bootstrap';

export const Indicator = ({className}) => {

  return (
    <div className={`wrap-loading ${className}`}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default memo(Indicator);
