// Libs
import React from 'react'
import { ScrollView } from 'react-native'

// Components
import styles from './styles'
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import Error from '../../components/Error'

type Props = {
  customStyles?: {},
  loading?: boolean,
  error: string,
  recipes?: Array<{
    id: string,
    title: string,
    description: string,
    imgUrl: string,
    votes: Array<number>,
  }>,
  type?: string,
  onPressCategoryIcon: () => void,
  onPressLogo: () => void,
}

// Home screen
const NewFeed = ({
  customStyles = {},
  type = 'primary',
  loading,
  error,
  recipes,
  onPressCategoryIcon,
  onPressLogo,
}: Props) => {
  const errorMessage = 'Connect failed!!!'

  if (error) {
    return <Error message={errorMessage} />
  }

  return (
    <ScrollView
      style={[styles.container, styles[`${type}Container`], customStyles]}
    >
      <Header
        onPressIcon={() => {}}
        onPressCategoryIcon={onPressCategoryIcon}
        onPressLogo={onPressLogo}
        type={type}
      />
      {recipes && (
        <RecipeList loading={loading} recipes={recipes} type={type} />
      )}
    </ScrollView>
  )
}

NewFeed.defaultProps = {
  customStyles: {},
  type: 'primary',
  recipes: [],
  loading: false,
}

export default NewFeed
