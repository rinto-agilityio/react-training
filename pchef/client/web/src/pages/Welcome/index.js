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
    <WelcomeContainer
      handleSkipCategories={handleSkipCategories}
      history={history}
    />
  )
}

export default Welcome
