import React, { useRef, useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//component
import SignUp from '../signUp/SignUp';
import ErrorMessage from '../../../components/commons/errorMessage/ErrorMessage';

//query
import { SIGN_IN } from '../../../graphql/author/queries';

//import css
import './LoginStyle.css';

const Login = props  => {
  const email = useRef('');
  const password = useRef('');
  const [errorMes, setErrorMes] = useState('');

  const handleSignIn = async (event, client) => {

    event.preventDefault();

    await client.query({
      query: SIGN_IN,
      variables: {
        email: email.current ? email.current.value : '',
        password: password.current ? password.current.value : ''
      },
      options: { fetchPolicy: 'cache-and-network' }
    }).then(response => {

      const { author } = response.data.signIn;

      client.writeData({
        data: {
          loggedUser: author,
        }
      });

      localStorage.setItem('userLoged', JSON.stringify(author));

      props.history.push('/');

    },
    (error => {
      setErrorMes(error && error.graphQLErrors && error.graphQLErrors[0].message )
    })
    );
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
                {
                  errorMes &&
                  <ErrorMessage message={errorMes}/>
                }
                <Button type='submit'>Login</Button>
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
  );
};

export default Login;
