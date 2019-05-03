import React from 'react';
import _ from 'lodash';

import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.js$/);

const loadStories = () => {
  _.sortBy(req.keys(), [filename => _.last(filename.split('/'))]).forEach(
    filename => req(filename)
  );
};

configure(loadStories, module);
