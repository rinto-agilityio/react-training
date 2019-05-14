import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { categories } from '../../../../mocks'
import Wrapper from '../../../../layout/Wrapper'
import styles from './styles'

// Interested Category props type
type Props = {
  customStyle?: {},
  type?: string,
  onChooseCategory: (id: string) => void,
  activeList: Array<string>,
}

// component Comment Form
const InterestedCategories = ({
  customStyle = {},
  type = 'primary',
  activeList,
  onChooseCategory,
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
      customStyles={[styles.container, customStyle]}
      onLayout={handlingGetLayout}
    >
      {categories.map(category => {
        // check if categary has been chosen
        const chosen = activeList.includes(category.id)

        return (
          <View key={category.id} style={[styles.item, itemSize]}>
            <TouchableOpacity onPress={() => onChooseCategory(category.id)}>
              <Image
                style={[styles.image, itemSize]}
                source={{ uri: category.image }}
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

// component default props value
InterestedCategories.defaultProps = {
  customStyle: {},
  type: 'primary',
}

export default InterestedCategories
