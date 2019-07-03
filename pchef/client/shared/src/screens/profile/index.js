import React, { useState } from 'react'
import { withApollo } from 'react-apollo'

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

import type { UserInfoType } from '../../types'

type Props = {
  loading: boolean,
  error: {
    graphQLErrors: Array<{ message: string }>,
  },
  data: UserInfoType,
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  userToggleVote: (
    recipeId: string,
    votes: Array<string>,
    userId: string
  ) => Promise<{ data: { userToggleVote: { results: Array<string>}}}>,
  size: string,
  store: Object,
  handleRedirectLogin?: () => void,
  wrapperIconStyle: Object,
}
const Profile = ({
  data,
  loading,
  error,
  userToggleRecipe,
  userToggleVote,
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

  const errorMessage =
    'Can not load information of user. Please check for connection!!!'

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

  if (error) {
    return <Error message={errorMessage} />
  }

  const { user, favoriteRecipe, ownRecipes } = data

  return (
    <View style={styles.profile}>
      <Header
        user={user}
        handleToSetting={handleToSetting}
      />
      <Tabs
        ownRecipes={ownRecipes}
        favoriteRecipe={favoriteRecipe}
        userToggleRecipe={userToggleRecipe}
        userToggleVote={userToggleVote}
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
        <Setting
          user={user}
          handleLogout={handleLogout}
        />
      </Modal>
    </View>
  )
}

export default withApollo(Profile)
