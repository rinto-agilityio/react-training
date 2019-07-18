// @flow
import React, { useState, memo } from 'react'
import { withApollo } from 'react-apollo'
import whyDidYouRender from '@welldone-software/why-did-you-render'

// Components
import { View } from 'react-native'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Tabs from './components/Tabs'
import Modal from '../../components/Modal'
import Header from './components/Header'
import Setting from '../settings'

// Styles
import styles from './styles'

// Helpers
import { customError } from '../../helpers/utils'

import type { User } from '../../flow-types/user'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
  })
}

type Props = {
  loading: boolean,
  error: {
    graphQLErrors: Array<{ message: string }>,
  },
  data: User,
  size: string,
  store: Object,
  handleRedirectLogin?: () => void,
  wrapperIconStyle: Object,
}
const Profile = ({
  data,
  loading,
  error,
  size = 'small',
  store,
  handleRedirectLogin = () => {},
  wrapperIconStyle,
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [visible, setVisible] = useState(true)

  const handleToSetting = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleLogout = () => {
    store ? store.removeItem('token') : localStorage.removeItem('token')
    setIsOpenModal(false)
    handleRedirectLogin()
  }

  if (loading) {
    return <Loading size={size} />
  }

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

  const { user, favoriteRecipe, ownRecipes } = data

  return (
    <View style={styles.profile}>
      <Header user={user} handleToSetting={handleToSetting} />
      <Tabs
        ownRecipes={ownRecipes}
        favoriteRecipe={favoriteRecipe}
        userId={user.id}
        wrapperIconStyle={wrapperIconStyle}
      />
      <Modal
        visible={isOpenModal}
        dismissBtn
        onDismiss={handleToSetting}
        onSubmit={handleToSetting}
        size="medium"
      >
        <Setting user={user} handleLogout={handleLogout} />
      </Modal>
    </View>
  )
}

Profile.whyDidYouRender = true

export default memo<Props>(withApollo(Profile))
