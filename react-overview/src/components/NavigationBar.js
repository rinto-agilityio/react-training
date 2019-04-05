import React from 'react'
import { Link } from 'react-router-dom'

//import context
import { AccountContextWrapper } from '../contexts/AccountContextWrapper'

//styles
import './styles/NavigationBarStyle.css'

const NavigationBar = account => {
  return (
    <div className='navigation-wrap'>
      <Link to="/">Home</Link>
      <Link to="/account/profile">{account.username}</Link>
    </div>
  )
}

export default AccountContextWrapper(NavigationBar)
