// Components
import Icon from './Icon'

// Styles
import Icons from '@themes/icons'

describe('Icon component', () => {

  it('Renders correctly', () => {
    const treeDOM = renderer.create(<Icon source={Icons.home} />).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
