// Libs
import React, { useState } from 'react'
import { Platform, View, FlatList, Button } from 'react-native'

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
  const [column, setColumn] = useState(3)
  // const [key, setKey] = useState(1)
  const [isListView, setIsListView] = useState(true)

  if (loading) return <Loading size="small" />
  if (error) return <Error message={error.message} size={size} />

  return (
    <>
      <Header category={category} isGrid size={size} />
      <View style={styles.container}>
        <Button
          onPress={() => {
            setColumn(1)
            // setKey(key + 1)
            setIsListView(true)
          }}
          title="List View"
        />
        <Button
          onPress={() => {
            setColumn(3)
            // setKey(key + 1)
            setIsListView(false)
          }}
          title="Grid View"
        />
        <FlatList
          // key={key}
          showsVerticalScrollIndicator={false}
          numColumns={column}
          data={recipes}
          renderItem={({ item }) => <Recipe isListView={isListView} recipe={item} size={size} />}
          keyExtractor={index => index}
        />
      </View>
    </>
  )
}

export default CategoryScreen
