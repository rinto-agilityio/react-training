// Libs
import React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Item from './Item'

type Props = {
  wishList: Array<{
    id: string,
    categoryId: string,
    cookingTypeId: string,
    date: string,
  }>,
  size: string,
}

const WishList = ({
  wishList = [],
  size = 'medium',
}: Props) => (
  <View style={styles.container}>
    {wishList.map(item => (
      <Item
        key={item.id}
        item={item}
        size={size}
      />
    ))}
  </View>
)

export default WishList
