// Libs
import React, { useState } from 'react'
import { View } from 'react-native'

// Helpers
import { customError } from '../../../../helpers/utils'

// Styles
import styles from './styles'

// Components
import Item from './Item'
import Loading from '../../../../components/Loading'
import Modal from '../../../../components/Modal'
import Error from '../../components/Error'

type Props = {
  wishList: Array<{
    id: string,
    categoryId: string,
    cookingTypeId: string,
    date: string,
  }>,
  size: string,
  loading: boolean,
  error: {
    graphQLErrors: Array<{ message: string }>,
  },
  categories: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  cookingTypes: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  history: Object,
}

const WishList = ({
  wishList = [],
  size = 'medium',
  loading,
  error,
  categories = [],
  cookingTypes = [],
  history,
}: Props) => {
  if (loading) return <Loading size={size} />
  const [visible, setVisible] = useState(true)

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
        size={size}
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
  }

  return (
    <View style={styles.container}>
      { wishList.map(item => (
        <Item
          key={item.id}
          item={item}
          size={size}
          categories={categories}
          cookingTypes={cookingTypes}
        />
      ))}
    </View>
  )
}

export default WishList
