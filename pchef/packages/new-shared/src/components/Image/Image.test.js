// Libs
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Image from '.'

it('renders correctly', () => {
  renderer.create(
    <Image
      url="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      disabled
    />,
  )
});
