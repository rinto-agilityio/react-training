import React, { memo } from 'react';
import PropTypes from 'prop-types';
import IMAGE_URL from '../../constants/ImageUrl'

const Image = props => {
  const { avarta } = props;
  return (
    <img
      className='user-avarta'
      src={avarta ? avarta : IMAGE_URL.userLogo}
      alt='user-profile'
      ref={props.ref}
    />
  )
}

Image.defaultProps = {
  avarta: ''
};

Image.propTypes = {
  avarta: PropTypes.string
};

export default memo(Image)
