import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// component
import Input from './Input';

storiesOf('Input Component', module)
  .addDecorator(story => <div style={{ marginTop: '30px', textAlign: 'center', width: '50%' }}>{story()}</div>)
  .add('Input', () => (
    <Input
      type="text"
      name="name"
      defaultValue="Text input"
      handleChange={action('changing text')}
    />
  ));
