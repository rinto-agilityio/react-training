import React, { useRef, useState } from 'react';
import { Query } from 'react-apollo';
import SIGN_IN from '../../graphql/queries/Author';

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
        if (data.signIn.success) {
          localStorage.setItem('userLoged', JSON.stringify(data.signIn.author));
        }
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className='authentication-form'>
            <input ref={email} type='text' />
            <input ref={password} type='password' />
            <button onClick={() => handleSignIn(data)}>Sign In</button>
          </div>
        )
      }
      }
    </Query>
  )
}

export default Login;
