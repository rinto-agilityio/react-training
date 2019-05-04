import React, { memo } from 'react';
import PropTypes from 'prop-types';

// import style
import './styles/InputStyle.css'

export const TextArea = props => {
  const { label, className, type, name, onBlur, onChange, placeholder, onFocus, onRef } = props
  return (
    <div className='input-wrap'>
      <label>{label}</label>
      <textarea
        className={`input-field ${className}`}
        type={type}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        ref={onRef}
      />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func
};

TextArea.defaultProps = {
  label: '',
  type: '',
  name: '',
  onBlur: () => {},
  onChange: () => {},
  placeholder: '',
  onFocus: () => {}
};

export default memo(TextArea);
