import { configure } from '@storybook/react';

// Styles
import '../src/App.css'

function loadStories () {
  const reqCommon = require.context('../src/', true, /\.stories\.js$/)
  reqCommon.keys().forEach((filename) => reqCommon(filename));
}

configure(loadStories, module);
