import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//
// component
import FetchMoreButton from './FetchMoreButton';

storiesOf('FetchMoreButton Component', module)
  .addDecorator(story => <div style={{ marginTop: '30px', textAlign: 'center', width: '50%' }}>{story()}</div>)
  .add('FetchMoreButton', () => (
    <FetchMoreButton
      fetchMore={action('clicked')}
      hasNextPage={true}
      variables={{
        after: '',
        first: 3
      }}
      updateQuery={action('Update Query')}
    />
  ));
