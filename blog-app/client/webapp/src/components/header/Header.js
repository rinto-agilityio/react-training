import React, { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';


import { Query } from 'react-apollo';

//query
import LOGGED_USER from '../../graphql/queries/Logged';

//components
import Image from '../commons/Image'

//styles
import './HeaderStyle.css';

const Header = () => {
  const node = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current || node.current.contains(e.target)) {
      return;
    }
    setOpen(false)
  }

  const handleLogout = client => {
    client.resetStore();
    localStorage.removeItem('userLoged');
  }

  return (
    <Query
      query={LOGGED_USER}
      // fetchPolicy={'cache-only'}
    >
      {({ data, client }) => {
        console.log(client)
        const { loggedUser } = data
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
              {loggedUser ?
                (
                  <>
                    <p>
                      {loggedUser.name}
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
              <NavDropdown
                ref={node}
                onClick={e => setOpen(!open)}
                title={<Image avarta={loggedUser && loggedUser.avatar} />}
                id="nav-dropdown"
              >
                {
                  open &&
                  <>
                    <NavDropdown.Item onClick={()=>handleLogout(client)} >Logout</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  </>
                }
              </NavDropdown>
            </div>
          </header>
        )
      }}
    </Query>
  )
}

export default memo(Header);
