import React from 'react'
import CategoryContainer from 'pchef-shared/src/screens/category/containers'

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
      // Update style for icon at banner
      wrapperIconStyle={{
        fontSize: '40px',
      }}
      // Update style for icon at each recipe
      customIconStyle={{
        fontSize: '30px',
      }}
    />
  )
}

export default Category
