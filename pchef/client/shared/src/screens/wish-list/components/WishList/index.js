// Libs
import React from 'react'
import { View } from 'react-native'

// Helpers
import { customError } from '../../../../helpers/utils'

// Styles
import styles from './styles'

// Components
import Item from './Item'
import Loading from '../../../../components/Loading'
import Error from '../../../../components/Error'

type Props = {
  wishList: Array<{
    id: string,
    categoryId: string,
    cookingTypeId: string,
    date: string,
  }>,
  size: string,
  loading: boolean,
  error: {
    graphQLErrors: Array<{ message: string }>,
  },
  categories: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  cookingTypes: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
}

const WishList = ({
  wishList = [],
  size = 'medium',
  loading,
  error,
  categories = [],
  cookingTypes = [],
}: Props) => {
  if (loading) return <Loading size={size} />
  if (error) return <Error message={customError(error.graphQLErrors)} />

  return (
    <View style={styles.container}>
      {wishList.map(item => (
        <Item
          key={item.id}
          item={item}
          size={size}
          categories={categories}
          cookingTypes={cookingTypes}
        />
      ))}
    </View>
  )
}

export default WishList
