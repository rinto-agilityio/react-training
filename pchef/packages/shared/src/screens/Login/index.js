// Libs
import React from 'react';
import { View } from 'react-native';

// Components
import LoginForm from './LoginForm';

type Props = {
  customStyle?: Object
}
const Login = ({ customStyle }: Props) => (
  <View>
    <LoginForm customStyle={customStyle} />
  </View>
);

Login.defaultProps = {
  customStyle: {},
}
export default Login;
