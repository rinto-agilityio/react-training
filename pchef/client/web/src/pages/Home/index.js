import React from 'react'

// Containers
import NewFeed from 'pchef-shared/src/containers/NewFeed'

type Props = {
  history: Object
}

const Home = ({ history }: Props) => {
  const handleClickRecipe = recipeId => {
    history.push(`/recipe-detail/${recipeId}/`)
  }
  const handlePressPipelineCategory = (categoryId: string) => {
    history.push(`category/${categoryId}`)
  }

  return (
    <NewFeed
      onPressCategoryPipeline={handlePressPipelineCategory}
      handleClickRecipe={handleClickRecipe}
      handleRedirectLogin={() => history.push('/login')}
      handleNavigateWelcome={() => history.push('/welcome')}
    />
  )
}

export default Home
