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
    <div>
      <NewFeed
        onPressCategoryPipeline={handlePressPipelineCategory}
        handleClickRecipe={handleClickRecipe}
        handleRedirectLogin={() => history.push('/login')}
        handleNavigateWelcome={() => history.push('/welcome')}
        customStyleWrapRecipes={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1024px',
          flexWrap: 'wrap',
        }}
        wrapperIconStyle={{
          maxWidth: '45px',
          fontSize: '30px',
        }}
      />
    </div>
  )
}

export default Home
