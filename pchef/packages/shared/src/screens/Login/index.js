// Libs
import React from 'react';
import { View } from 'react-native';

// Components
import LoginForm from './LoginForm';

type Props = {
  customStyles?: Object,
  handleLoginRequest?: () => void,
}

const Login = ({ customStyles, handleLoginRequest }: Props) => (
  <View>
    <LoginForm customStyles={customStyles} handleLoginRequest={handleLoginRequest} />
  </View>
);

Login.defaultProps = {
  customStyles: {},
  handleLoginRequest: () => {},
}

export default Login;
