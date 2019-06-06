// Libs
import React, { useState } from 'react'
import { Platform, View, FlatList } from 'react-native'

// Constant
import { GRID_VIEW_COLUMN, LIST_VIEW_COLUMN } from '../../constants/index'

// Components
import Header from './components/Header'
import Recipe from './components/Recipe'
import Loading from '../../components/Loading'
import { customError } from '../../helpers/utils'
import Modal from '../../components/Modal'
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
    graphQLErrors: Array<{ message: string }>,
  },
  history: Object,
}
const CategoryScreen = ({
  category = {},
  recipes = [],
  loading,
  error,
  history,
}: Props) => {
  const size = Platform.OS === 'web' ? 'large' : 'small'
  const [columns, setColumns] = useState(LIST_VIEW_COLUMN)
  const [isGrid, setIsGrid] = useState(false)
  const [visible, setVisible] = useState(true)

  if (loading) return <Loading size="small" />

  const handleNavigateLogin = () => {
    setVisible(false)
    history.push('/login')
  }

  if (error) {
    return (
      <Modal
        visible={visible}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size="medium"
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

  return (
    <>
      <Header category={category} isGrid={isGrid} onSelectListView={handleSelectListView} size={size} />
      <View style={styles.container}>
        <FlatList
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
