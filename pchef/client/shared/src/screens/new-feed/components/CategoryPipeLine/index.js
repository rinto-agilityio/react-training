// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react';
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
  followCategory: Array<{
    id: string,
    imgUrl: string,
    name: string,
    recipes: Array<{
      id: string,
      title: string,
      description: string,
      imgUrl: string,
      votes: Array<string>,
      thumbnail: string,
    }>,
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
            <CategoryPipeLineItem
              key={item.id}
              category={item}
              onPressCategoryPipeline={onPressCategoryPipeline}
            />
          ))
        )
    }
  </View>
)

CategoryPipeLine.defaultProps = {
  onPressCategoryPipeline: () => {},
}


export default memo<Props>(CategoryPipeLine)
