// Components
import Welcome from '.'
import { categories } from '../../mocks'

it('Welcome snapshots', () => {
  // define props
  const props = {
    onChooseCategories: () => {},
    categories,
  }

  const primaryComponent = shallow(<Welcome {...props} type="primary" />)
  const secondaryComponent = shallow(<Welcome {...props} type="secondary" />)

  expect(primaryComponent).toMatchSnapshot()
  expect(secondaryComponent).toMatchSnapshot()
})

it('Welcome actions', () => {
  // define props
  const props = {
    customStyle: {},
    onChooseCategories: jest.fn(),
    categories,
  }

  const component = shallow(<Welcome {...props} />)

  component
    .find('InterestedCategories')
    .at(0)
    .props()
    .onChooseCategory()
  component
    .find('TouchableOpacity')
    .at(0)
    .props()
    .onPress()
  expect(props.onChooseCategories).toHaveBeenCalled()
})
