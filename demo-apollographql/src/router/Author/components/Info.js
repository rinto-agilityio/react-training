import React from 'react'

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

export default AuthorInfo
