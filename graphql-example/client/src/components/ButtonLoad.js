import React from 'react'

const ButtonUnobtrusive = ({
    children,
    className,
    type = 'button',
    ...props
  }) => (
    <button
      className={`${className} Button_unobtrusive`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
  
  export default ButtonUnobtrusive