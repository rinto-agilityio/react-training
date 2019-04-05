import React from 'react'

export const AccountContextWrapper = WrappedComponent => {
  return function Wrapper(props) {
    return(
      <Consumer>
        { value => (
          <WrappedComponent {...props} {...value} />
        )}
      </Consumer>
    )
  }
}
