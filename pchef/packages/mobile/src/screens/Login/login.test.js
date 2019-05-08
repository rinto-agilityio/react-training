import React from 'react';
import Login from './index';

it('Login snapshot', () => {
  const input = shallow(<Login />);

  expect(input).toMatchSnapshot();
});

it('test', () => {
  expect(1).toBe(1);
});
