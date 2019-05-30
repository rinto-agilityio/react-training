// Components
import InterestedCategories from '.'
import { categories } from '../../../../mocks'

describe('InterestedCategories', () => {
  let props = {
    onChooseCategory: () => {},
    activeList: [categories[0].id, categories[1].id],
    categories,
  }

  it('InterestedCategories snapshots with type primary', () => {
    props = {
      ...props,
      type: 'primary',
    }

    const primaryComponent = renderer.create(
      <InterestedCategories {...props} />,
    ).toJSON()

    expect(primaryComponent).toMatchSnapshot()
  })

  it('InterestedCategories snapshots with type secondary', () => {
    props = {
      ...props,
      type: 'secondary',
    }

    const secondaryComponent = renderer.create(
      <InterestedCategories {...props} />,
    ).toJSON()

    expect(secondaryComponent).toMatchSnapshot()
  })

  it('InterestedCategories actions', () => {
    // define props
    props = {
      ...props,
      onChooseCategory: jest.fn(),
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

  it('InterestedCategories snapshots with type categories undefined', () => {
    props = {
      ...props,
      categories: undefined,
    }

    const primaryComponent = renderer.create(
      <InterestedCategories {...props} />,
    ).toJSON()

    expect(primaryComponent).toMatchSnapshot()
  })
})
