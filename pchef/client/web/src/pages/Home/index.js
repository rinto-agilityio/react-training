// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'

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

const areEqual = (prevProps, nextProps) => prevProps.location.pathname === nextProps.location.pathname

export default memo<Props>(Home, areEqual)
