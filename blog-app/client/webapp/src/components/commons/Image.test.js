'use strict';

import React from 'react';

//components
import Image from './Image';

describe('ErrorMessage Component', () => {

  const tree = shallow(<Image avarta={'avarta'} />);

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

});
