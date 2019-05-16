// Libs
import renderer from 'react-test-renderer'

// Components
import Header from '.'

it('renders correctly', () => {
  const header = renderer.create(
    <Header
      size="medium"
      image="http://www.kptncook.com/assets/downloads/AppIcon/KptnCook_AppIcon.png"
    />,
  ).toJSON()

  expect(header).toMatchSnapshot()
});
