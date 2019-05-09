// Libs
import React from 'react';
import { View } from 'react-native';

// Components
import LoginForm from './LoginForm';

type Props = {
  customStyles?: Object,
  handleLoginRequest?: () => void,
  refInput: { current: HTMLInputElement | null },
}

const Login = ({ customStyles, handleLoginRequest, refInput }: Props) => (
  <View>
    <LoginForm refInput={refInput} customStyles={customStyles} handleLoginRequest={handleLoginRequest} />
  </View>
);

Login.defaultProps = {
  customStyles: {},
  handleLoginRequest: () => {},
}

export default Login;
