//components
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Dropdown>Facebook</Dropdown>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})
