import React from 'react'
import { storiesOf } from '@storybook/react-native'

import TabBarIcon from './TabBarIcon'

// Define assets path
const iconHome = require('@assets/icons/home.png'),
  iconUpload = require('@assets/icons/plus.png'),
  iconAccount = require('@assets/icons/avatar.png')

storiesOf('Components', module)
  .add('TabBarIcon - Home', () => <TabBarIcon source={iconHome} />)
  .add('TabBarIcon - Upload', () => <TabBarIcon source={iconUpload} />)
  .add('TabBarIcon - Account', () => <TabBarIcon source={iconAccount} />)
