import React from 'react'
import ProfileContainer from 'pchef-shared/src/containers/Profile'

type Props = {
  history: Object
}

const Profile = ({ history }: Props) => (
  <ProfileContainer
    handleRedirectLogin={() => history.push('/login')}
  />
)

export default Profile
