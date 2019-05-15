// Components
import InterestedCategories from '.'
import { categories } from '../../../../mocks'

it('InterestedCategories snapshots', () => {
  // define props
  const props = {
    onChooseCategory: () => {},
    activeList: [categories[0].id, categories[1].id],
  }

  const primaryComponent = shallow(
    <InterestedCategories {...props} type="primary" customStyle={{ flex: 1 }} />,
  )
  const secondaryComponent = shallow(
    <InterestedCategories {...props} type="secondary" />,
  )

  expect(primaryComponent).toMatchSnapshot()
  expect(secondaryComponent).toMatchSnapshot()
})

it('InterestedCategories actions', () => {
  // define props
  const props = {
    customStyle: {},
    onChooseCategory: jest.fn(),
    activeList: [categories[0].id, categories[1].id],
  }

  const component = shallow(<InterestedCategories {...props} />)

  // simulate press item
  component.props().onLayout()
  component
    .find('TouchableOpacity')
    .at(0)
    .props()
    .onPress()

  expect(props.onChooseCategory).toHaveBeenCalled()
})
