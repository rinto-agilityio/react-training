import React, { memo } from 'react';
import PropTypes from 'prop-types';

// import style
import './styles/ErrorMessageStyle.css'

export const ErrorMessage = ({ message }) => {

  return (
    <>
      <p className='error-message'>{message}</p>
    </>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string
};

ErrorMessage.defaultProps = {
  message: ''
};

export default memo(ErrorMessage);
