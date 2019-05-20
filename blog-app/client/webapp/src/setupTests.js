// libs
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

// Setup adapter to work with enzyme
Enzyme.configure({
  adapter: new Adapter()
});

//define global variable to use for all file test in app
global.shallow = shallow;
global.React = React;
global.render = render;
global.mount = mount;
global.renderer = renderer;
