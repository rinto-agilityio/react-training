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

  return (
    <NewFeed handleClickRecipe={handleClickRecipe} />
  )
}

export default Home
