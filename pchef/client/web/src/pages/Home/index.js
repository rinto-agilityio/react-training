import React from 'react'
import { Link } from 'react-router-dom'

// Component
// $FlowFixMe
import BtnPaper from 'pchef-shared/src/components/Button'

const Home = () => (
  <>
    <h3>Home page</h3>
    <Link to="profile">Link to Profile</Link>
    <Link to="category">Link to Category</Link>
    <BtnPaper />
  </>
)

export default Home
