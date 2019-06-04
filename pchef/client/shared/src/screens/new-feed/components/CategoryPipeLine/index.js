// Libs
import React from 'react';
import { View } from 'react-native'

// Components
import CategoryPipeLineItem from './CategoryPipeLineItem'

// Styles
import styles from './styles'
import Loading from '../../../../components/Loading';

type Props = {
  followCategory: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  onPressCategoryPipeline?: () => void,
  loading: boolean,
}

const CategoryPipeLine = ({ followCategory, onPressCategoryPipeline, loading }: Props) => (
  <View style={styles.pipelineWrapper}>
    {
      loading
        ? <Loading />
        : (
          followCategory
          &&
          followCategory.map(item => (
            <CategoryPipeLineItem key={item.id} category={item} onPressCategoryPipeline={onPressCategoryPipeline} />
          ))
        )
    }
  </View>
)

CategoryPipeLine.defaultProps = {
  onPressCategoryPipeline: () => {},
}


export default CategoryPipeLine
