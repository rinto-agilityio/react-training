import React from 'react'
import { storiesOf } from '@storybook/react-native'

import TabBarIcon from './TabBarIcon'

// Define assets path
const iconHome = require('@assets/icons/home.png'),
  iconUpload = require('@assets/icons/plus.png'),
  iconAccount = require('@assets/icons/avatar.png')

storiesOf('Components', module)
  .add('Icon Home', () => <TabBarIcon source={iconHome} />)
  .add('Icon Upload', () => <TabBarIcon source={iconUpload} />)
  .add('Icon Account', () => <TabBarIcon source={iconAccount} />)
