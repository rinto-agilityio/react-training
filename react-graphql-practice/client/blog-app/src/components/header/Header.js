import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { Query } from 'react-apollo';
import LOGGED_USER from '../../graphql/queries/Logged';

//styles
import './HeaderStyle.css';

const currentUser = {
  name: 'rinto',
  avarta: 'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600105/59070189-user-icon-man-profile-businessman-avatar-person-icon-in-vector-illustration.jpg'
}

const image = (
  currentUser.avarta ?

  (
    <img
      className='user-avarta'
      src={currentUser.avarta}
      alt='user-profile'
      />
  )
  :
  (
    <div></div>
  )
)
const Header = () => {
  return (
    <Query
      query={LOGGED_USER}
    >
      {({ data, client }) => {
        console.log('data', data)
        return (
          <header className="header">
            <div className='logo-wrap'>
              <h1 className="brand">
                <Link to='/' className="brand-link">
                  <div className="brand-name">
                    <p>Blog App</p>
                  </div>
                </Link>
              </h1>
            </div>
            <div className='login-bar'>
              {currentUser ?
                (
                  <>
                    <p>
                      Hello, {currentUser.name}
                    </p>
                  </>
                )
                :
                (
                  <Link className="hover-decoration" to={'/login'}>
                    LOGIN
                  </Link>
                )
              }
              <NavDropdown title={image} id="nav-dropdown">
                <NavDropdown.Item onClick={()=>{}} >Logout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
            </div>

          </header>
        )
      }}
    </Query>
  )

}

export default memo(Header);
