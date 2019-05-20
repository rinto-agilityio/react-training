import TabHeaderItem from '.'

const props = {
  totalOfItem: 10,
  name: 'recipes',
  active: true,
  handlePressTab: jest.fn(),
}

describe('Components', () => {
  describe('TabHeaderItem', () => {
    let component

    beforeEach(() => {
      props.handlePressTab.mockReturnValue('Icon on press invoked')
      component = shallow(<TabHeaderItem {...props} />)
    })

    it('should render TabHeaderItem component', () => {
      const renderComponent = renderer.create(<TabHeaderItem {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should call handlePressTab when press on tab', () => {
      component
        .find('TouchableWithoutFeedback')
        .props()
        .onPress()
      expect(props.handlePressTab.mock.calls.length).toBe(1)
    })
  })
})
