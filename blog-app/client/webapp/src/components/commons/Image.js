import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  const { avarta } = props;
  return (
    avarta ?

    (
      <img
        className='user-avarta'
        src={avarta}
        alt='user-profile'
        />
    )
    :
    (
      <div></div>
    )
  )
}

export default memo(Image)

Image.defaultProps = {
  avarta: ''
};

Image.propTypes = {
  avarta: PropTypes.string
};
