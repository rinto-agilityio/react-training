// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Header from '.'

const category = {
  name: 'Heathy',
  imgUrl:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
}

storiesOf('Header', module).add('default', () => (
  <Header category={category} isGrid size="large" />
))
