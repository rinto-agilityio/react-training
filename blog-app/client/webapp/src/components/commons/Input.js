import React, { memo } from 'react';
import PropTypes from 'prop-types';

// import style
import './styles/InputStyle.css'

export const Input = props => {
  const { label, className, type, name, onBlur, onChange, placeholder, onFocus, onRef } = props
  return (
    <div className='input-wrap'>
      <label>{label}</label>
      <input
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

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func
};

Input.defaultProps = {
  label: '',
  type: '',
  name: '',
  onBlur: () => {},
  onChange: () => {},
  placeholder: '',
  onFocus: () => {}
};

export default memo(Input);
