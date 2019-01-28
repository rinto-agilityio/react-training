import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
`
const Name = styled.h1``
const Bio = styled.p``
const Photo = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

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
