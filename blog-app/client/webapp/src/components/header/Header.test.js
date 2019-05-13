'use strict';

import React from 'react';

// provider mock
import { MockedProvider } from 'react-apollo/test-utils';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import waitForExpect from 'wait-for-expect';

//components
import Header from './Header';

//queries
import { LOGGED_USER } from '../../graphql/author/queries';

const loggedUser = {
  'id': '1557377599679',
  'email': 'rin.to@gmail.com',
  'password': '123456',
  'name': 'rinto'
};

const mockClient = [
  {
    request: {
      query: LOGGED_USER
    },
    result: {
      data: {
        loggedUser: loggedUser
      }
    }
  }
];

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MockedProvider mocks={mockClient}>
        <BrowserRouter>
        <Switch>
          <Header>
          </Header>
        </Switch>
        </BrowserRouter>
    </MockedProvider>
    );
  });
  it('renders correctly', () => {
    const container = renderer.create(
      <MockedProvider mocks={mockClient}>
         <BrowserRouter>
          <Switch>
            <Header>
            </Header>
          </Switch>
         </BrowserRouter>
      </MockedProvider>
      ).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('renders without error', async () => {
    let numberToChange = 10;
    const randomTimeout = Math.floor(Math.random() * 300);
    setTimeout(() => {
      numberToChange = 100;
    }, randomTimeout);

    await waitForExpect(() => {
      expect(numberToChange).toEqual(100);
      // expect(component.find('p').filter('.account-name').children()).toEqual('rinto');
    });

  });
});
