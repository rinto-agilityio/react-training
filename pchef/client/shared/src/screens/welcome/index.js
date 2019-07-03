// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, useEffect, memo } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Divider } from 'react-native-paper'

// Helpers
import { customError, checkContain } from '../../helpers/utils'

// Common Components
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import Error from '../../components/Error'
import Button from '../../components/Button'

// Components
import InterestedCategories from './components/InterestedCategories'

// Styles
import styles from './styles'

// Constants
import { CATEGORIES_PADDING, WEB_PLATFORM } from '../../constants'

const { height } = Dimensions.get('window')

import type { CategoryType } from '../../types'

// Interested Category props type
type Props = {
  customStyle?: {},
  type?: string,
  handleSkipCategories?: () => void,
  data: {
    followCategory: Array<CategoryType>,
  },
  loading: boolean,
  error: {
    graphQLErrors: Array<{message: string}>,
  },
  categories: Array<CategoryType>,
  userToggleCategory: (categoryId: Array<string>) => Promise<{ data: {userToggleCategory: {results: Array<string>}}}>,
  customButtonStyle?: {},
  handleRedirectLogin: () => void,
  size: string,
}

// component Comment Form
const Welcome = ({
  customStyle,
  type = 'primary',
  handleSkipCategories,
  data = {},
  loading,
  error,
  categories = [],
  userToggleCategory,
  customButtonStyle,
  handleRedirectLogin,
  size = 'medium',
}: Props) => {
  const [chosenCategories, setChosenCategories] = useState([])
  const [errors, setErrors] = useState()
  const [visible, setVisible] = useState(true)
  const [heightHeader, setHeightHeader] = useState(0)

  useEffect(() => {
    const followCategory = data.followCategory || []
    const followCategoryIds = followCategory.map(item => item.id)
    setChosenCategories(followCategoryIds)
    !loading && setErrors(error)
  }, [loading, data.followCategory, error])

  const handleNavigateLogin = () => {
    setVisible(false)
    handleRedirectLogin()
  }

  if (errors) {
    return (
      <Modal
        visible={visible}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size={size}
        customDialog={{ top: 150 }}
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
  }
  if (loading) return <Loading size={type === 'primary' ? 'small' : 'large'} />

  // handling toggle choose or not choose a category
  const handlingChooseCategory = async (categoryId: string) => {
    const chosenCategoryIds = checkContain(chosenCategories, categoryId)
      ? chosenCategories.filter(item => item !== categoryId)
      : chosenCategories.concat(categoryId)

    setChosenCategories(chosenCategoryIds)
  }

  const handleSaveCategory = async () => {
    try {
      await userToggleCategory(chosenCategories)
    } catch (error) {
      setErrors(error)
    }
  }

  // check user do not choose category
  const missingCategory = chosenCategories.length < 4
  const heightCategories = height - heightHeader - CATEGORIES_PADDING

  const renderHeaderCategories = () => (
    <>
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
      <View style={styles.saveCategoryBtn}>
        <Button onPress={handleSaveCategory} title="Save Category" />
      </View>
    </>
  )

  return (
    <View style={[styles.container, styles[`${type}Container`], customStyle]}>
      <TouchableOpacity
        style={[styles.button, styles[`${type}Button`], customButtonStyle]}
        disabled={missingCategory}
        onPress={handleSkipCategories}
      >
        <Text
          style={[
            styles.next,
            styles[`${type}Next`],
            missingCategory ? styles.disabledNext : null,
          ]}
        >
          Skip
        </Text>
      </TouchableOpacity>
      {WEB_PLATFORM ? renderHeaderCategories() : (
        <View onLayout={event => event && setHeightHeader(event.nativeEvent.layout.height)}>
          {renderHeaderCategories()}
        </View>
      )}
      <View style={[styles.categoryWrapper, WEB_PLATFORM ? {} : { height: heightCategories || '100%' }]}>
        {WEB_PLATFORM ? (
          <InterestedCategories
            categories={categories}
            onChooseCategory={handlingChooseCategory}
            type={type}
            activeList={chosenCategories}
          />
        ) : (
          <ScrollView>
            <InterestedCategories
              categories={categories}
              onChooseCategory={handlingChooseCategory}
              type={type}
              activeList={chosenCategories}
            />
          </ScrollView>
        )}
      </View>
    </View>
  )
}

// component default props value
Welcome.defaultProps = {
  customStyle: {},
  type: 'primary',
  handleSkipCategories: () => {},
  customButtonStyle: {},
}

export default memo<Props>(Welcome)
