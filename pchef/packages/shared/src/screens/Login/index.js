// Libs
import React from 'react';
import { View } from 'react-native';

// Components
import ImageComponent from '../../components/Image';
import LoginForm from './LoginForm';

const Login = () => (
  <View>
    {/* <ImageComponent 
      url={{ uri: 'https://cdn0.iconfinder.com/data/icons/hotel-vacation-long-shadow-flat/33/chef-512.png'}} 
      // customImageStyle={{
      //   borderRadius: '50%'
      // }}  
    /> */}
    <LoginForm />
  </View>
);

export default Login;
