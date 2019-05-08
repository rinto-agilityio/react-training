// Libs
import React from 'react'
import { View } from 'react-native'

// Components
import TextBox from '../../components/TextBox'
import Button from '../../components/Button'
import Wrapper from '../../layout/Wrapper'

// Styles
import { styles } from './styles'

type Props = {
  customStyles?: Object
}

const LoginForm = ({ customStyles }: Props) => (
  <Wrapper direction="column" customStyles={customStyles}>
    <View style={styles.textBoxWrapper}>
      <TextBox
        placeholder="Enter your email..."
        placeholderTextColor="darkgray"
        customStyle={{ width: '100%' }}
        refInput={{ current: null }}
      />
    </View>
    <View style={styles.textBoxWrapper}>
      <TextBox
        placeholder="Enter your password..."
        placeholderTextColor="darkgray"
        customStyle={{ width: '100%' }}
        refInput={{ current: null }}
      />
    </View>
    <View style={styles.btnWrapper}>
      <Button title="Login" />
    </View>
  </Wrapper>
)

LoginForm.defaultProps = {
  customStyles: {},
}

export default LoginForm
