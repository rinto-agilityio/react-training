import React, { memo } from 'react';
import PropTypes from 'prop-types';

//style
import './styles/PostStyle.css'

const PostItem = ({title, content}) => {

  return (
    <div className='wrap-post'>
      <p className='post-title'>{title}</p>
      <p>{content}</p>
    </div>
  )
}

PostItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

PostItem.defaultProps = {
  title: '',
  content: '',
};

export default memo(PostItem);
