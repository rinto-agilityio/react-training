// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Component
import Recipe from '.'

storiesOf('New feed recipe', module)
  .add('medium', () => (
    <Recipe
      size="medium"
      recipe={{
        imgUrl: 'https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg',
        title: 'Bun Bo Hue Recipe',
        description: '2lb pork neck bones, 2lb beef bones, 1lb oxtail',
        votes: [1],
      }}
    />
  ))
  .add('large', () => (
    <Recipe
      size="large"
      recipe={{
        imgUrl: 'https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg',
        title: 'Bun Bo Hue Recipe',
        description: '2lb pork neck bones, 2lb beef bones, 1lb oxtail',
        votes: [1],
      }}
    />
  ))
