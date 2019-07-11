// Components
import { TouchableOpacity } from 'react-native'
import CategoryPipeLineItem from './CategoryPipeLineItem'

// Mocks
import { categories } from '../../../../mocks'

const props = {
  category: categories[0],
  onPressCategoryPipeline: jest.fn(),
}

describe('Components', () => {
  describe('CategoryPipeLineItem', () => {
    let component

    beforeEach(() => {
      component = shallow(<CategoryPipeLineItem {...props} />)
    })

    it('Should render CategoryPipeLineItem component', () => {
      const renderComponent = renderer.create(
        <CategoryPipeLineItem {...props} />
      )
      expect(renderComponent).toMatchSnapshot()
    })

    it('Should call onPressCategoryPipeline when press on image button', () => {
      const button = component.find(TouchableOpacity)
      button.props().onPress()
      expect(props.onPressCategoryPipeline).toHaveBeenCalled()
    })
  })
})
