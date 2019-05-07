// Libs
import React from 'react';
import { View } from 'react-native';

// Components
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import Wrapper from '../../layout/Wrapper';

// Styles
import { styles } from './styles';

const LoginForm = () => {
  return (
    <Wrapper direction='column'>
      <View style={styles.textBoxWrapper}>
        <TextBox 
          placeholder="Enter your email..." 
          placeholderTextColor="darkgray"
          customStyle={{ width: '100%'}}
          
          />
      </View>
      <View style={styles.textBoxWrapper}>
        <TextBox 
          placeholder="Enter your password..." 
          placeholderTextColor="darkgray"
          customStyle={{ width: '100%'}}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Button title="Login" />
      </View>
    </Wrapper>
  );
};


export default LoginForm;
