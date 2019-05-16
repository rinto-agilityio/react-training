import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-paper'
import InterestedCategories from './components/InterestedCategories'
import styles from './styles'

// Interested Category props type
type Props = {
  customStyle?: {},
  type?: string,
  onChooseCategories: (categories: Array<string>) => void,
  categories: Array<{ id: string, name: string, image: string }>,
}

// component Comment Form
const Welcome = ({
  customStyle = {},
  type = 'primary',
  onChooseCategories,
  categories,
}: Props) => {
  const [chosenCategories, setChosenCategories] = useState([])

  // handling toggle choose or not choose a category
  const handlingChooseCategory = (categoryId: string) => {
    if (chosenCategories.includes(categoryId)) {
      const data = chosenCategories.filter(item => item !== categoryId)
      setChosenCategories(data)
    } else {
      setChosenCategories([...chosenCategories, categoryId])
    }
  }

  // Submit chosen interested categories
  const handlingSubmit = () => {
    onChooseCategories(chosenCategories)
  }

  // check user do not choose category
  const missingCategory = chosenCategories.length < 4

  return (
    <View style={[styles.container, styles[`${type}Container`], customStyle]}>
      <TouchableOpacity
        style={[styles.button, styles[`${type}Button`]]}
        disabled={missingCategory}
        onPress={handlingSubmit}
      >
        <Text
          style={[
            styles.next,
            styles[`${type}Next`],
            missingCategory ? styles.disabledNext : null,
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>
      <Text style={[styles.description, styles[`${type}Description`]]}>
        Select 4 or more interests
      </Text>
      <Text style={[styles.content, styles[`${type}Content`]]}>
        Select below to personalize the app with your tastes
      </Text>
      <Text style={[styles.introduction, styles[`${type}Introduction`]]}>
        I have a special diet
      </Text>
      <Divider style={[styles.divider, styles[`${type}Divider`]]} />
      <View style={styles.categoryWrapper}>
        <InterestedCategories
          categories={categories}
          onChooseCategory={handlingChooseCategory}
          customStyle={{}}
          type={type}
          activeList={chosenCategories}
        />
      </View>
    </View>
  )
}

// component default props value
Welcome.defaultProps = {
  customStyle: {},
  type: 'primary',
}

export default Welcome
