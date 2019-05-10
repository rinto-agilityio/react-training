'use strict';

import React from 'react';

//components
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage Component', () => {

  const tree = shallow(<ErrorMessage />);

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

});
