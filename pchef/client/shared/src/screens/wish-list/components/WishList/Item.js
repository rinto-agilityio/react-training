// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { Text, View } from 'react-native'
import whyDidYouRender from '@welldone-software/why-did-you-render'

// Styles
import styles from './styles'

// Helpers
import { getDateForCalendar } from '../../../../helpers/date-time'

import type { WishList } from '../../../../flow-types/wish-list'
import type { Category } from '../../../../flow-types/category'
import type { CookingType } from '../../../../flow-types/cooking-type'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
  })
}

type Props = {
  size: string,
  item: WishList,
  categories: Array<Category>,
  cookingTypes: Array<CookingType>,
}

const Item = ({
  size = 'medium',
  item = {},
  categories = [],
  cookingTypes = [],
}: Props) => {
  const {
    id,
    date,
    categoryId,
    cookingTypeId,
  } = item

  const category = categories.find(item => item.id === categoryId) || {}
  const cookingType = cookingTypes.find(item => item.id === cookingTypeId) || {}

  return (
    (category.name && cookingType.name) ? (
      <View
        style={[styles.wrapperItem, styles[`${size}WrapperItem`]]}
        key={id}
      >
        <Text style={[styles.date, styles[`${size}Date`]]}>{getDateForCalendar(Number(date))}</Text>
        <Text style={[styles.content, styles[`${size}Content`]]}>
          Get the recipe for
          <Text
            style={[
              styles.content,
              styles[`${size}Content`],
              styles.specialContent]
            }
          >
            {` ${category.name} `}
          </Text>
          with
          <Text
            style={[
              styles.content,
              styles[`${size}Content`],
              styles.specialContent]
            }
          >
            {` ${cookingType.name} `}
          </Text>
        </Text>
      </View>
    ) : null
  )
}

Item.whyDidYouRender = true

export default memo<Props>(Item)
