import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Loading from './index'
import { GlobalStyle } from '../../theme/globalStyle' // For animation

storiesOf('Components', module)
  .add('Loading', () => (
    <>
      <GlobalStyle />
      <Loading />
    </>
  ))
