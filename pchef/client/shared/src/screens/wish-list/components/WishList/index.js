// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, memo } from 'react'
import { View } from 'react-native'
import whyDidYouRender from '@welldone-software/why-did-you-render'

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

import type { WishList as WishListType } from '../../../../flow-types/wish-list'
import type { Category } from '../../../../flow-types/category'
import type { CookingType } from '../../../../flow-types/cooking-type'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
  })
}

type Props = {
  wishList: Array<WishListType>,
  size: string,
  loading: boolean,
  error: {
    graphQLErrors: Array<{ message: string }>,
  },
  categories: Array<Category>,
  cookingTypes: Array<CookingType>,
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

WishList.whyDidYouRender = true

export default memo<Props>(WishList)
