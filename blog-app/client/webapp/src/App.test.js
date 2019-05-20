// Libs
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';

// Components
import App from './App';

it('renders without crashing', () => {
  const component = renderer.create(
    <BrowserRouter>
      <MockedProvider>
        <App />
      </MockedProvider>
    </BrowserRouter>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

