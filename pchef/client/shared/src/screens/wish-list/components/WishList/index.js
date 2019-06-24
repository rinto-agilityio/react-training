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
import Error from '../../../../components/Error'
import Button from '../../../../components/Button'

// Constants
import { WEB_PLATFORM } from '../../../../constants'

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
  handleRedirectLogin: () => void,
  handleRedirectWishlistForm: () => void,
}

const WishList = ({
  wishList = [],
  size = 'medium',
  loading,
  error,
  categories = [],
  cookingTypes = [],
  handleRedirectLogin,
  handleRedirectWishlistForm,
}: Props) => {
  const [visible, setVisible] = useState(true)
  if (loading) return <Loading size={size} />

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
        size={size}
        customDialog={{ top: 150 }}
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
  }

  return (
    <View style={styles.container}>
      {wishList.map(item => (
        <Item
          key={item.id}
          item={item}
          size={size}
          categories={categories}
          cookingTypes={cookingTypes}
        />
      ))}
      {
        WEB_PLATFORM && (
          <Button
            title="Add Wishlist"
            onPress={() => handleRedirectWishlistForm()}
            buttonStyle={styles.button}
          />
        )
      }
    </View>
  )
}

export default WishList
