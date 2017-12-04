import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Icon from './Icon'

// Define assets path
const iconHome = require('@assets/icons/home.png'),
  iconUpload = require('@assets/icons/plus.png'),
  iconAccount = require('@assets/icons/avatar.png')

storiesOf('Components', module)
  .add('Icon Home', () => <Icon source={iconHome} />)
  .add('Icon Upload', () => <Icon source={iconUpload} />)
  .add('Icon Account', () => <Icon source={iconAccount} />)
