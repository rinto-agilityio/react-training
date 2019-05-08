import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

//mutation
import { CREATE_USER } from '../../graphql/author/mutations';

//import css
import './LoginStyle.css'

//helpers
import { CustomError } from '../../helpers/CustomError'

//component
import ErrorMessage from '../../components/commons/ErrorMessage'

const SignUp = props  => {

  const email = useRef('')
  const password = useRef('')
  const name = useRef('')

  const handleSignUp = (event, signUp) => {

    event.preventDefault();
    signUp({variables: {
      id: `${ Date.now()}`,
      email: email.current ? email.current.value : '',
      password: password.current ? password.current.value : '',
      name: name.current ? name.current.value : ''
    }})
  };

  return (
    <Mutation
      mutation={CREATE_USER}
      onCompleted={ () => props.history.push('/login') }
      // errorPolicy="all"
    >
      {(signUp, { data, loading, error }) => {

        const errorSignUp = CustomError(error && error.graphQLErrors)

      return (
        <div className="login-wrap">
          <div className="titleWrap">
            <p>Register Account</p>
          </div>
          <div className='authentication-form'>
            <Form onSubmit={e => handleSignUp(e, signUp)}>
              <Form.Group >
                <Form.Control type='text' ref={name} placeholder='Enter name' />
                {
                  errorSignUp && errorSignUp.name &&
                  <ErrorMessage message={errorSignUp.name}/>
                }
              </Form.Group>
              <Form.Group >
                <Form.Control type='email' ref={email} placeholder='Enter email' />
                {
                  errorSignUp && errorSignUp.email &&
                  <ErrorMessage message={errorSignUp.email}/>
                }
              </Form.Group>
              <Form.Group >
                <Form.Control type='password' ref={password} placeholder='Password' />
                {
                  errorSignUp && errorSignUp.password &&
                  <ErrorMessage message={errorSignUp.password}/>
                }
              </Form.Group>
              <Button type='submit'>Sign Up</Button>
              <Link></Link>
            </Form>
          </div>
        </div>
      )
      }}
    </Mutation>
  )
}

export default SignUp;
