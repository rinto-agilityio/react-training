// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { View } from 'react-native'

// Components
import CategoryPipeLineItem from './CategoryPipeLineItem'

// Styles
import styles from './styles'
import Loading from '../../../../components/Loading'

import type { FollowCategoryType } from '../../../../types'

type Props = {
  followCategory: Array<FollowCategoryType>,
  onPressCategoryPipeline?: () => void,
  loading: boolean,
}

const CategoryPipeLine = ({
  followCategory,
  onPressCategoryPipeline,
  loading,
}: Props) => (
  <View style={styles.pipelineWrapper}>
    {loading ? (
      <Loading />
    ) : (
      followCategory &&
      followCategory.map(item => (
        <CategoryPipeLineItem
          key={item.id}
          category={item}
          onPressCategoryPipeline={onPressCategoryPipeline}
        />
      ))
    )}
  </View>
)

CategoryPipeLine.defaultProps = {
  onPressCategoryPipeline: () => {},
}

export default memo<Props>(CategoryPipeLine)
