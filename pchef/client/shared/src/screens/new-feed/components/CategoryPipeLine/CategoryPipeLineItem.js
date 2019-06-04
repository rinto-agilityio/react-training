import React from 'react';
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-paper'

// Styles
import styles from './styles'

type Props = {
  category: {
    name: string,
    imgUrl: string,
  },
}

const CategoryPipeLineItem = ({
  category,
}: Props) => (
  <View style={styles.pipelineItem}>
    <Text style={styles.pipelineItemName}>{category.name}</Text>
    <Avatar.Image style={styles.pipelineItemImage} size={70} source={category.imgUrl} />
  </View>
)

export default CategoryPipeLineItem
