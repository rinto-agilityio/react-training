// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, useEffect, memo } from 'react'
import { View, Text, FlatList } from 'react-native'

// Constant
import { GRID_VIEW_COLUMN, LIST_VIEW_COLUMN, NO_RECIPES_MESSAGE, WEB_PLATFORM } from '../../constants/index'
import { checkContainField } from '../../helpers/utils'

// Components
import Banner from './components/Header'
import Recipe from './components/Recipe'
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import Error from '../../components/Error'

// helper
import { customError, checkContain } from '../../helpers/utils'

// styles
import styles from './styles'

type Props = {
  category: {
    name: string,
    imgUrl: string,
  },
  recipes: Array<{
    id: string,
    title: string,
    imgUrl: string,
    description: string,
  }>,
  loading: boolean,
  error: {
    graphQLErrors: Array<{ message: string }>,
  },
  data: {
    favoriteRecipe: Array<{id: string}>,
    followCategory: Array<{
      id: string,
      name: string,
      imgUrl: string,
      recipes: Array<{
        id: string,
        title: string,
        imgUrl: string,
        description: string,
      }>
    }>,
  },
  userToggleRecipe: (
    id: string,
    favoriteRecipe: Array<{id: string}>,
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  handleRedirectLogin: Function,
  userToggleCategory: (categoryId: Array<string>) => Promise<{ data: {userToggleCategory: {results: Array<string>}}}>,
  id: string,
  wrapperIconStyle: Object,
  customIconStyle: Object,
}
const CategoryScreen = ({
  category = {},
  recipes = [],
  loading,
  error,
  userToggleRecipe,
  data = {},
  handleRedirectLogin,
  userToggleCategory,
  id,
  wrapperIconStyle,
  customIconStyle,
}: Props) => {
  const size = WEB_PLATFORM ? 'large' : 'small'
  const [columns, setColumns] = useState(LIST_VIEW_COLUMN)
  const [isGrid, setIsGrid] = useState(false)
  const [visible, setVisible] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState([])

  const { favoriteRecipe } = data

  useEffect(() => {
    const followCategory = data.followCategory || []
    const followCategoryIds = followCategory.map(item => item.id)
    setSelectedCategories(followCategoryIds)
  }, [data.followCategory])

  if (loading) return <Loading size="small" />

  const handleNavigateLogin = () => {
    setVisible(false)
    handleRedirectLogin()
  }

  if (error) {
    return (
      <Modal
        visible={visible}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size="medium"
        customDialog={{ top: 150 }}
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
  }

  const handleSelectListView = itemName => {
    if (itemName === 'view-list') {
      // view List
      setColumns(LIST_VIEW_COLUMN)
      setIsGrid(false)
    } else {
      // view Grid
      setColumns(GRID_VIEW_COLUMN)
      setIsGrid(true)
    }
  }

  // handle toggle save Recipe
  const handleToggleSaveRecipe = async (id: string) => {
    await userToggleRecipe(id, favoriteRecipe)
  }

  const handleSaveCategory = async () => {
    const slectedCategoryIds = checkContain(selectedCategories, id)
      ? selectedCategories.filter(item => item !== id)
      : selectedCategories.concat(id)
    setSelectedCategories(slectedCategoryIds)
    await userToggleCategory(slectedCategoryIds)
  }

  return (
    <>
      <Banner
        category={category}
        isGrid={isGrid}
        onSelectListView={handleSelectListView}
        size={size}
        onFollowing={handleSaveCategory}
        isFollow={checkContain(selectedCategories, id)}
        wrapperIconStyle={wrapperIconStyle}
      />
      <View style={styles.container}>
        {
          recipes
            ? (
              <FlatList
                numColumns={columns}
                horizontal={false}
                data={recipes}
                renderItem={
                  ({ item }) => (
                    <Recipe
                      isGrid={isGrid}
                      recipe={item}
                      size={size}
                      onPressIcon={handleToggleSaveRecipe}
                      isFavorite={checkContainField(favoriteRecipe, item.id)}
                      customIconStyle={customIconStyle}
                    />
                  )
                }
                contentContainerStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => item.id}
                key={columns}
              />
            )
            : <Text>{NO_RECIPES_MESSAGE}</Text>
        }
      </View>
    </>
  )
}

export default memo<Props>(CategoryScreen)
