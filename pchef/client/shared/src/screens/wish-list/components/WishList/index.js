// Libs
import React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Item from './Item'

type Props = {
  wishList: Array<{}>,
  size: string,
}

const WishList = ({
  wishList = [],
  size = 'medium',
}: Props) => (
  <View>
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
