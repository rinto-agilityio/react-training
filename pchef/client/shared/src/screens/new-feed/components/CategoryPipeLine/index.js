// Libs
import React from 'react';
import { View } from 'react-native'

// Components
import CategoryPipeLineItem from './CategoryPipeLineItem'

// Styles
import styles from './styles'
import Loading from '../../../../components/Loading';

const CategoryPipeLine = ({ followCategory, loading }: Props) => (
  <View style={styles.pipelineWrapper}>
    {
      loading
        ? <Loading />
        : (
          followCategory
          &&
          followCategory.map(item => (
            <CategoryPipeLineItem key={item.id} category={item} />
          ))
        )
    }
  </View>
)

export default CategoryPipeLine
