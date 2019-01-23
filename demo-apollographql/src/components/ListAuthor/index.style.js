import styled from 'styled-components'

const ListAuthorWrapper = styled.section`
  background-color: #fff;
  padding: 1rem;
  border-radius: 3px;
`
const Title = styled.h3`
  margin: 1rem auto;
  text-align: center;
`
const AuthorWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`
const AuthorPhoto = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`
const AuthorName = styled.h3`
  margin: 0.5rem 1rem;
`

export {
  ListAuthorWrapper,
  Title,
  AuthorWrapper,
  AuthorPhoto,
  AuthorName,
}
