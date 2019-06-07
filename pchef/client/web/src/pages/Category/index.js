import React from 'react'
import CategoryContainer from 'pchef-shared/src/containers/Category'

type Props = {
  history: Object,
  match: {
    params: {
      categoryId: string,
    },
  }
}

const Category = ({ history, match }: Props) => {
  const { categoryId } = match
  return (
    <CategoryContainer
      categoryId={categoryId}
      handleRedirectLogin={() => history.push('/login')}
    />
  )
}

export default Category
