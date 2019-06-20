// Libs
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native'
import { Divider } from 'react-native-paper'

// Components
import InterestedCategories from './components/InterestedCategories'
import styles from './styles'
import Loading from '../../components/Loading'
import { customError } from '../../helpers/utils'
import Modal from '../../components/Modal'
import Error from '../../components/Error'

// Constants
import { PADDING_CATEGORIES } from '../../constants'

const { height } = Dimensions.get('window')

// Interested Category props type
type Props = {
  customStyle?: {},
  type?: string,
  handleSkipCategories?: () => void,
  data: {
    followCategory: Array<{
      id: string,
      name: string,
      imgUrl: string,
    }>,
  },
  loading: boolean,
  error: {
    graphQLErrors: Array<{message: string}>,
  },
  categories: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  userToggleCategory: (recipeId: string) => Promise<{ data: {userToggleCategory: {results: Array<string>}}}>,
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
  const isWeb = Platform.OS === 'web'

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
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
  }
  if (loading) return <Loading size={type === 'primary' ? 'small' : 'large'} />

  // handling toggle choose or not choose a category
  const handlingChooseCategory = async (categoryId: string) => {
    try {
      await userToggleCategory(categoryId).then(({ data }) => {
        const categories = data.userToggleCategory
        setChosenCategories(categories.results)
      })
    } catch (error) {
      setErrors(error)
    }
  }

  // check user do not choose category
  const missingCategory = chosenCategories.length < 4
  const heightCategories = height - heightHeader - PADDING_CATEGORIES

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
      {isWeb ? renderHeaderCategories() : (
        <View onLayout={event => event && setHeightHeader(event.nativeEvent.layout.height)}>
          {renderHeaderCategories()}
        </View>
      )}
      <View style={[styles.categoryWrapper, isWeb ? {} : { height: heightCategories || '100%' }]}>
        {isWeb ? (
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

export default Welcome
