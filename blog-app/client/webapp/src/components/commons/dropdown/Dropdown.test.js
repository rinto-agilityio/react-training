'use strict';

import React from 'react';

//components
import Dropdown from './Dropdown';
import { render, fireEvent, getByTestId} from 'react-testing-library';

describe('Dropdown Component', () => {
  const items = ['one', 'two'];
  it('renders correctly', () => {
    const tree = renderer.create(<Dropdown items={items}>Dropdown</Dropdown>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders wraper', () => {
    const wrapper = shallow(<Dropdown items={items}>Dropdown</Dropdown>);
    expect(wrapper.find('.dropdown-wrap')).toBeDefined();
  });

  it('renders list-items', () => {
    const wrapper = shallow(<Dropdown items={items} />);

    // Check if an element in the Component exists
    const childrenWraper = wrapper.find('.dropdown-wrap').children();
    const ulWraper = childrenWraper.children();
    expect(ulWraper.find('.dropdown-menu-wrap')).toBeDefined();
    expect(ulWraper.find('.dropdown-item')).toBeDefined();
  });

  it('renders list-items', () => {
    const wrapper = mount(<Dropdown items={items} />);

    // Check if an element in the Component exists
    const childrenWraper = wrapper.find('.dropdown-wrap').children();
    expect(childrenWraper.simulate('click'));
  });

  it('Test render list option when click arrow:', () => {
    const { container } = render(<Dropdown items={items} />);

    const arrow = getByTestId(container, 'arrowId');
    expect(arrow.textContent).toBe('');
    fireEvent.click(arrow);
    expect(container.contains(getByTestId(container, 'listOption'))).toBe(true);

    fireEvent.click(arrow);
    expect(container.querySelector('ul')).toBeNull();
  });

  it('Test render list option when click outside:', () => {
    const { container } = render(<Dropdown items={items} />);

    fireEvent.click(container);
    expect(container.querySelector('ul')).toBeNull();
  });

  it('Test function handleClick trigger:', () => {

    const handleClick = jest.fn();
    const { container } = render(<Dropdown items={items} />);
    fireEvent.click(container.querySelector('.dropdown-wrap'));
    expect(container.querySelector('ul')).toBeNull();
  });
});
