// Libs
import React, { useState } from 'react'
import { Platform, View, FlatList } from 'react-native'

// Constant
import { GRID_VIEW_COLUMN, LIST_VIEW_COLUMN } from '../../constants/index'

// Components
import Header from './components/Header'
import Recipe from './components/Recipe'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

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
    message: string,
  },
}
const CategoryScreen = ({
  category = {},
  recipes = [],
  loading,
  error,
}: Props) => {
  const size = Platform.OS === 'web' ? 'large' : 'small'
  const [columns, setColumns] = useState(LIST_VIEW_COLUMN)
  const [isGrid, setIsGrid] = useState(false)

  if (loading) return <Loading size="small" />
  if (error) return <Error message={error.message} size={size} />

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

  return (
    <>
      <Header category={category} isGrid={isGrid} onSelectListView={handleSelectListView} size={size} />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={columns}
          horizontal={false}
          data={recipes}
          renderItem={({ item }) => <Recipe isGrid={isGrid} recipe={item} size={size} />}
          keyExtractor={item => item.id}
          key={columns}
          columnWrapperStyle={isGrid && { justifyContent: 'space-between' }}
        />
      </View>
    </>
  )
}

export default CategoryScreen
