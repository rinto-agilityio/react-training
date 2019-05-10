import React, { memo } from 'react';
import { Spinner } from 'react-bootstrap';

export const Indicator = props => {

  return (
    <div className='wrap-loading'>
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default memo(Indicator);
