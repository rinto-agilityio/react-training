import React from 'react'

// Show Error Boundary
class ItemErrorBoundary extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch error')
  }

  render() {

    if (this.state.hasError) {
      return <h1>Something wrong!</h1>
    }

    return this.props.children
  }
}

export default ItemErrorBoundary
