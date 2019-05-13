import React from 'react';

import { configure } from '@storybook/react';

// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);

const req = require.context('../src/stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
