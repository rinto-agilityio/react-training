import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';

//query
import { LOGGED_USER } from '../../graphql/author/queries';

//components
import Image from '../commons/Image';
import Dropdown from '../commons/Dropdown';

//styles
import './HeaderStyle.css';

const Header = () => {
  const handleLogout = (event, client) => {
    event.stopPropagation()
    client.resetStore();
    localStorage.removeItem('userLoged');
  }

  return (
    <Query
      query={LOGGED_USER}
      fetchPolicy={'cache-only'}
    >
      {({ data, client }) => {
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
                    <p className='account-name'>
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
              <Image avarta={loggedUser && loggedUser.avatar}/>
              <Dropdown
                items={[
                  <Link
                    onClick={(event)=>handleLogout(event, client)}
                  >
                    Log Out
                  </Link>
                ]}
              />
            </div>
          </header>
        )
      }}
    </Query>
  )
}

export default memo(Header);
