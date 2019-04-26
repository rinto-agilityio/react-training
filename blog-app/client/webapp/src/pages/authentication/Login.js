import React, { useRef } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//component
import SignUp from './SignUp'

//query
import SIGN_IN from '../../graphql/queries/Author';

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
              <Form onSubmit={(event) => handleSignIn(event, client)}>
                <Form.Group >
                  <Form.Control type='email' ref={email} placeholder='Enter email' />
                </Form.Group>
                <Form.Group >
                  <Form.Control type='password' ref={password} placeholder='Password' />
                </Form.Group>
                <Button type='submit'>Login</Button>
                <Link></Link>
              </Form>
              <p>
                Not Register?
                <Link to={'/signUp'} component={SignUp}>Create Account</Link>
              </p>
            </div>
          </div>
        )
      }
    </ApolloConsumer>
  )
}

export default Login;
