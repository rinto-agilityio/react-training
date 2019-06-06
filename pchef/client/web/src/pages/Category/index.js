import React from 'react'
import CategoryContainer from 'pchef-shared/src/containers/Category'

type Props = {
  history: Object,
}

const Category = ({ history }: Props) => (
  <CategoryContainer
    id="3xjHYbeO7D4b4UhjKeWU"
    handleRedirectLogin={() => history.push('/login')}
  />
)

export default Category
