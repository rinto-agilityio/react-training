import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  Name,
  Bio,
  Photo
} from './Info.style'

const AuthorInfo = ({ name, photo, bio }) => (
  <Wrapper>
    <div>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
    </div>
    <Photo src={photo} alt={name} />
  </Wrapper>
)

AuthorInfo.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  bio: PropTypes.string,
}

export default AuthorInfo
