// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  size: string,
  item: {
    id: number,
    categoryId: number,
    cookingTypeId: number,
    date: number,
  },
}

const Item = ({
  size = 'medium',
  item = {},
}: Props) => {
  const {
    id,
    date,
    categoryId,
    cookingTypeId,
  } = item

  return (
    <View
      style={[styles.wrapperItem, styles[`${size}WrapperItem`]]}
      key={id}
    >
      <Text style={[styles.date, styles[`${size}Date`]]}>{date}</Text>
      <Text style={[styles.content, styles[`${size}Content`]]}>
        Get the recipe for
        <Text
          style={[
            styles.content,
            styles[`${size}Content`],
            styles.specialContent]
          }
        >
          {` ${categoryId} `}
        </Text>
        with
        <Text
          style={[
            styles.content,
            styles[`${size}Content`],
            styles.specialContent]
          }
        >
          {` ${cookingTypeId} `}
        </Text>
      </Text>
    </View>
  )
}

export default Item
