// Mock
import { user } from '../../mocks'

// Components
import Profile from '.'

const props = {
  user,
}

describe('Screen', () => {
  describe('Profile', () => {
    it('should render Category component with grid', () => {
      const renderComponent = renderer.create(<Profile {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })
  })
})
