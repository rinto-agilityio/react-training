import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//
// component
import TextArea from './TextArea';

storiesOf('TextArea Component', module)
  .addDecorator(story => <div style={{ marginTop: '30px', textAlign: 'center', width: '50%' }}>{story()}</div>)
  .add('TextArea', () => (
    <TextArea
      placeholder='input content'
      value=''
      onChange={action('change text')}
    />
  ));
