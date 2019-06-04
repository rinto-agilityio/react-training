import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'

// Styles
import styles from './styles'

type Props = {
  category: {
    id: string,
    name: string,
    imgUrl: string,
  },
  onPressCategoryPipeline?: () => void,
}

const CategoryPipeLineItem = ({
  category,
  onPressCategoryPipeline,
}: Props) => (
  <View style={styles.pipelineItem}>
    <Text style={styles.pipelineItemName}>{category.name}</Text>
    <TouchableOpacity onPress={() => onPressCategoryPipeline(category.id)}>
      <Avatar.Image style={styles.pipelineItemImage} size={70} source={category.imgUrl} />
    </TouchableOpacity>
  </View>
)

CategoryPipeLineItem.defaultProps = {
  onPressCategoryPipeline: () => {},
}

export default CategoryPipeLineItem
