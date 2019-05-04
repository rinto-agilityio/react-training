// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Themes
import { COLORS } from 'components/src/themes'

// Component
import TextBox from 'components/src/components/TextBox'

const inputField = React.createRef()

storiesOf('TextBox', module)
  .add('Text box single line', () => (
    <div style={{ width: 100 }}>
      <TextBox
        multiline={false}
        autoCapitalize="none"
        autoCorrect={false}
        editable
        placeholder="Please type your name"
        placeholderTextColor={COLORS.brown}
        numberOfLines={1}
        defaultValue="Quan Do"
        refInput={inputField}
        onSubmitEditing={action('submited')}
      />
    </div>
  ))

  .add('Text box multi line', () => (
    <div style={{ width: 200 }}>
      <TextBox
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        editable
        placeholder="Please type your age"
        placeholderTextColor={COLORS.brown}
        numberOfLines={1}
        defaultValue="Quan Do"
        refInput={inputField}
        onSubmitEditing={action('submited')}
      />
    </div>
  ))
