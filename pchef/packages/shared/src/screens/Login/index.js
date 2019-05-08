// Libs
import React from 'react';
import { View } from 'react-native';

// Components
import LoginForm from './LoginForm';

type Props = {
  customStyles?: Object
}

const Login = ({ customStyles }: Props) => (
  <View>
    <LoginForm customStyles={customStyles} />
  </View>
);

Login.defaultProps = {
  customStyles: {},
}

export default Login;
