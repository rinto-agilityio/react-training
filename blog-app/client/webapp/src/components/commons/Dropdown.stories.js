import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
//
// component
import Dropdown from './Dropdown';

storiesOf('Dropdown Component', module)
  .addDecorator(story => <div style={{ marginTop: '30px', textAlign: 'center', width: '50%' }}>{story()}</div>)
  .add('Dropdown', () => (
    <Dropdown
      items={['item 1', 'item 2', 'item 3']}
    />
  ));
