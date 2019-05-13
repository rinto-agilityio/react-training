import React from 'react'
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
}: Props) => (
  <Wrapper
    direction="row"
    childPosition="left"
    customStyles={[styles.container, styles[`${type}Container`], customStyle]}
  >
    {categories.map(category => {
      // check if categary has been chosen
      const chosen = activeList.includes(category.id)

      return (
        <View
          key={category.id}
          style={[
            styles.item,
            styles[`${type}Item`],
            chosen ? styles.activeItem : null,
          ]}
        >
          <TouchableOpacity onPress={() => onChooseCategory(category.id)}>
            <Image
              style={[styles.image, styles[`${type}Image`]]}
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
                styles[`${type}Layer`],
                styles[`${chosen ? 'active' : 'inactive'}Layer`],
              ]}
            />
          </TouchableOpacity>
        </View>
      )
    })}
  </Wrapper>
)

// component default props value
InterestedCategories.defaultProps = {
  customStyle: {},
  type: 'primary',
}

export default InterestedCategories
