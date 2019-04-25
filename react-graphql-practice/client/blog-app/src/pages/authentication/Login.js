import React, { useRef } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Form, Button } from "react-bootstrap";

//query
import SIGN_IN from '../../graphql/queries/Author';
// import LOGGED_USER from '../../graphql/queries/Logged';

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
          <div className='authentication-form'>
            <Form onSubmit={(event) => handleSignIn(event, client)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={email} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={password} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>;
          </div>
        )
      }
    </ApolloConsumer>
  )
}

export default Login;
