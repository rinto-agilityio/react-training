import React from 'react'

// Containers
import WelcomeContainer from 'pchef-shared/src/containers/Welcome'

type Props = {
  history: Object
}

const Welcome = ({ history }: Props) => {
  const handleSkipCategories = () => {
    history.push('/')
  }
  return (
    <>
      <h3>Welcome page</h3>
      <WelcomeContainer
        handleSkipCategories={handleSkipCategories}
      />
    </>
  )
}

export default Welcome
