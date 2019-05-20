// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Image from '../../../../components/Image'

type Props = {
  category: {
    name: string,
    imgUrl: string,
  },
}

const Category = ({ category }: Props) => {
  const { name, imgUrl } = category

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{name}</Text>
      <Image url={imgUrl} customImageStyle={styles.image} />
    </View>
  )
}

export default Category
