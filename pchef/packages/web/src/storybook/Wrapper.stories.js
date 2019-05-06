// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import Button from 'shared/src/components/Button'
import Wrapper from 'shared/src/components/Wrapper'

storiesOf('Wrapper', module)
  .add('Wrapper children', () => (
    <Wrapper>
      <Button
        title="Click me"
        size="small"
        onClick={action('clicked')}
        customStyle={{
          width: 100,
        }}
      />
    </Wrapper>
  ))
