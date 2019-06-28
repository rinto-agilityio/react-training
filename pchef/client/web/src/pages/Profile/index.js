import React from 'react'
import ProfileContainer from 'pchef-shared/src/containers/Profile'

type Props = {
  history: Object
}

const Profile = ({ history }: Props) => (
  <ProfileContainer
    handleRedirectLogin={() => history.push('/login')}
    wrapperIconStyle={{
      fontSize: '30px',
    }}
  />
)

export default Profile
