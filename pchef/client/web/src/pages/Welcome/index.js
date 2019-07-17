import React from 'react'

// Containers
import WelcomeContainer from 'pchef-shared/src/screens/welcome/containers'

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
      handleRedirectLogin={() => history.push('/login')}
      handleRedirectHome={handleSkipCategories}
    />
  )
}

export default Welcome
