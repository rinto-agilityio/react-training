import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Wrapper from '../../../../layout/Wrapper'
import styles from './styles'

type Props = {
  type?: string,
  onChooseCategory: (id: string) => Promise<void>,
  activeList: Array<string>,
  categories: Array<{ id: string, name: string, imgUrl: string }>,
}

const InterestedCategories = ({
  type = 'primary',
  activeList,
  onChooseCategory,
  categories = [],
}: Props) => {
  // declare state item size
  const [itemSize, setItemSize] = useState({ width: 0, height: 0 })

  // get wrapper size
  const handlingGetLayout = (event = { nativeEvent: { layout: {} } }) => {
    const { width } = event.nativeEvent.layout

    // get item Size, three items in a row, margin between items is 2px
    const itemWidth = (width - 6) / 3

    // set item size
    setItemSize({
      width: itemWidth,
      height: itemWidth,
    })
  }

  return (
    <Wrapper
      direction="row"
      childPosition="right"
      customStyles={styles.container}
      onLayout={handlingGetLayout}
    >
      {categories.map(category => {
        // check if category has been chosen
        const chosen = activeList.includes(category.id)

        return (
          <View key={category.id} style={[styles.item, itemSize]}>
            <TouchableOpacity onPress={() => onChooseCategory(category.id)}>
              <Image
                style={[styles.image, itemSize]}
                source={{ uri: category.imgUrl }}
              />
              <Text
                style={[
                  styles.name,
                  styles[`${type}Name`],
                  styles[`${chosen ? 'active' : 'inactive'}Name`],
                ]}
              >
                {category.name}
              </Text>
              <View
                style={[
                  styles.layer,
                  itemSize,
                  styles[`${chosen ? 'active' : 'inactive'}Layer`],
                ]}
              />
            </TouchableOpacity>
          </View>
        )
      })}
    </Wrapper>
  )
}

InterestedCategories.defaultProps = {
  type: 'primary',
}

export default InterestedCategories
