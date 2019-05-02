import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

//mutation
import { CREATE_USER } from '../../graphql/mutations/mutation';

//import css
import './LoginStyle.css'

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
		>
			{(signUp, { data, loading, error }) => {
				return (
				<div className="login-wrap">
					<div className="titleWrap">
						<p>Welcome To Blog</p>
					</div>
					<div className='authentication-form'>
						<Form onSubmit={e => handleSignUp(e, signUp)}>
							<Form.Group >
								<Form.Control type='text' ref={name} placeholder='Enter name' />
							</Form.Group>
							<Form.Group >
								<Form.Control type='email' ref={email} placeholder='Enter email' />
							</Form.Group>
							<Form.Group >
								<Form.Control type='password' ref={password} placeholder='Password' />
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
