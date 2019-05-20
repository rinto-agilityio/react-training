import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';
// component
import PostItem from './PostItem';

storiesOf('PostItem Component', module)
  .addDecorator(story => <div style={{ marginTop: '30px', textAlign: 'center', width: '50%' }}>{story()}</div>)
  .add('PostItem', () => (
    <MockedProvider>
      <PostItem
        handleOpenModal={() => {}}
        post={{
          title: 'post name',
          content: 'post content'
        }}
      />
    </MockedProvider>
  ));
