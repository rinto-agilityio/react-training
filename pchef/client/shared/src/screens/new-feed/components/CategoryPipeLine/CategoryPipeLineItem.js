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
  onPressCategoryPipeline?: (name: string) => void,
}

const CategoryPipeLineItem = ({
  category,
  onPressCategoryPipeline = () => {},
}: Props) => {
  const { id, name, imgUrl } = category

  return (
    <View style={styles.pipelineItem}>
      <Text style={styles.pipelineItemName}>{name}</Text>
      <TouchableOpacity onPress={() => onPressCategoryPipeline(id)}>
        <Avatar.Image
          style={styles.pipelineItemImage}
          size={70}
          source={{
            uri: imgUrl,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

CategoryPipeLineItem.defaultProps = {
  onPressCategoryPipeline: () => {},
}

export default CategoryPipeLineItem
