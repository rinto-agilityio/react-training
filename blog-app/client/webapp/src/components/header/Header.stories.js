import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';
import { BrowserRouter } from 'react-router-dom';

// component
import Header from './Header';

storiesOf('Header Component', module)
  .addDecorator(story => <div style={{ marginTop: '30px', textAlign: 'center', width: '50%' }}>{story()}</div>)
  .add('Header', () => (
    <BrowserRouter>
      <MockedProvider>
        <Header />
      </MockedProvider>
    </BrowserRouter>
  ));
