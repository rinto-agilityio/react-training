// Components
import InterestedCategories from '.'
import { categories } from '../../../../mocks'

describe('InterestedCategories', () => {
  it('InterestedCategories render with defaultProps', () => {
    const component = renderer.create(<InterestedCategories />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('InterestedCategories snapshots', () => {
    // define props
    const props = {
      onChooseCategory: () => {},
      activeList: [categories[0].id, categories[1].id],
      categories,
    }

    const primaryComponent = renderer.create(
      <InterestedCategories {...props} type="primary" customStyle={{ flex: 1 }} />,
    ).toJSON()
    const secondaryComponent = renderer.create(
      <InterestedCategories {...props} type="secondary" />,
    ).toJSON()

    expect(primaryComponent).toMatchSnapshot()
    expect(secondaryComponent).toMatchSnapshot()
  })

  it('InterestedCategories actions', () => {
    // define props
    const props = {
      customStyle: {},
      onChooseCategory: jest.fn(),
      activeList: [categories[0].id, categories[1].id],
      categories,
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
})
