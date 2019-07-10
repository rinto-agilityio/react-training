// Components
import CategoryPipeLine from '.'
import Loading from '../../../../components/Loading'
import CategoryPipeLineItem from './CategoryPipeLineItem'

// Mocks
import { categories } from '../../../../mocks'

const props = {
  followCategory: categories,
  onPressCategoryPipeline: jest.fn(),
}

describe('Components', () => {
  describe('CategoryPipeLine', () => {
    let component

    beforeEach(() => {
      component = shallow(<CategoryPipeLine {...props} />)
    })

    it('Should render CategoryPipeLine component', () => {
      const renderComponent = renderer.create(<CategoryPipeLine {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('Should render Loading component if is loading', () => {
      component.setProps({ loading: true })
      expect(component.find(Loading)).toHaveLength(1)
    })

    it('Should call onPressCategoryPipeline when press on category', () => {
      const category = component.find(CategoryPipeLineItem).at(0)
      category.props().onPressCategoryPipeline()
      expect(props.onPressCategoryPipeline).toHaveBeenCalled()
    })
  })
})
