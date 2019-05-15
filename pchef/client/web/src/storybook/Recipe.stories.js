// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Component
import Recipe from 'shared/src/screens/category/components/Recipe'

storiesOf('Recipe', module).add('Recipe component', () => (
  <Recipe
    size="large"
    image="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
    title="Bun Bo Hue Recipe"
    description="2lb pork neck bones, 2lb beef bones, 1lb oxtail, 1lb brisket, 9 more ingredients"
  />
))
