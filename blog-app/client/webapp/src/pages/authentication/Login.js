import React, { useRef } from 'react';
import { ApolloConsumer } from 'react-apollo';

//query
import SIGN_IN from '../../graphql/queries/Author';
// import LOGGED_USER from '../../graphql/queries/Logged';

//import css
import './LoginStyle.css'

const Login = props  => {
  const email = useRef('')
  const password = useRef('')

  const handleSignIn = (event, client) => {
    event.preventDefault();
    client.query({
      query: SIGN_IN,
      variables: {
        email: email.current ? email.current.value : '',
        password: password.current ? password.current.value : ''
      }
    }).then(response => {
      const { author } = response.data.signIn

      const loginUser = {
        __typename: 'loggedUser',
        email: author.email,
        name: author.name,
        avatar: author.avatar,
        password: author.password
      };

      console.log(client)
      client.writeData({
        data: {
          loggedUser: loginUser,
        }
      });

      localStorage.setItem('userLoged', JSON.stringify(author));

      props.history.push('/');

    })
  };

  return (
    <ApolloConsumer>
      {
        client => (
          
          <div className="login-wrap">
            <div className="titleWrap">
              <p>Welcome To Blog</p>
            </div>
            <div className='authentication-form'>
              <form onSubmit={(event) => handleSignIn(event, client)} className='form-group'>
                <label className='field-group'>
                  Name:
                  <input type='email' ref={email} />
                </label>
                <label>
                  Name:
                  <input type='password' ref={password} />
                </label>
                <input type='submit' value='Submit' className='button-login' />
              </form>
            </div>
          </div>
          
        )
      }
    </ApolloConsumer>
  )
}

export default Login;
