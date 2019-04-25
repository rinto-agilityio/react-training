import React, { useRef, useState } from 'react';
import { Query } from 'react-apollo';
import SIGN_IN from '../../graphql/queries/Author';
import { Form, Button } from "react-bootstrap";

const Login = props  => {
  const email = useRef( '' )
  const password = useRef( '' )
  const [isLoging, setIsLoging] = useState(false);

  const handleSignIn = (data) => {
    setIsLoging(true);
    console.log('data', data)
  };
  console.log('isLoging', isLoging)
  return (
    <Query
      query={SIGN_IN}
      skip={!isLoging}
      variables={{
        email: email.current ? email.current.value : '',
        password: password.current ? password.current.value : ''
      }}
      onCompleted={(data) => {
        console.log('data', data)
        if (data.signIn.success) {
          localStorage.setItem('userLoged', JSON.stringify(data.signIn.author));
          props.history.push('/');
        }
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className='authentication-form'>
            <Form onSubmit={() => handleSignIn(data)}>
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
      }
    </Query>
  )
}

export default Login;
