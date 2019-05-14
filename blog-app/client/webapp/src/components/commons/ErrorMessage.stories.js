import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
//
// component
import ErrorMessage from './ErrorMessage';

storiesOf('ErrorMessage Component', module)
  .addDecorator(story => <div style={{ marginTop: '30px', textAlign: 'center', width: '50%' }}>{story()}</div>)
  .add('ErrorMessage', () => (
    <ErrorMessage
      message='Error Message'
    />
  ));
