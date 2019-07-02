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
  const { params: { categoryId } } = match

  return (
    <CategoryContainer
      id={categoryId}
      handleRedirectLogin={() => history.push('/login')}
      wrapperIconStyle={{
        fontSize: '40px',
      }}
      customIconStyle={{
        fontSize: '30px',
      }}
    />
  )
}

export default Category
