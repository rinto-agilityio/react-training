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

type Props = {
  loading: boolean,
  error: string,
  data: {
    user: {
      name: string,
      avatar: string,
      id: string,
      email: string,
    },
    ownRecipes: Array<{
      id: string,
      title: string,
      imgUrl: string,
      votes: Array<string>,
      description: string,
    }>,
    favoriteRecipe: Array<{
      id: string,
      title: string,
      imgUrl: string,
      votes: Array<string>,
      description: string,
    }>,
  },
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
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

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
