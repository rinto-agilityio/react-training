import React from 'react'
import { NavLink } from 'react-router-dom'

//styles
import './styles/NavigationBarStyle.css'

const NavigationBar = () => {

  return (
    <div className='navigation-wrap'>
      <NavLink to="/" exact activeClassName='active'>Home</NavLink>
      <NavLink to="/account/profile" activeClassName='active'>PROFILE</NavLink>
    </div>
  )
}

export default NavigationBar
