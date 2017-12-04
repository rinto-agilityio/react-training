// Components
import Icon from './Icon'

describe('Icon component', () => {
  const iconHome = require('@assets/icons/home.png')

  it('Renders correctly', () => {
    const treeDOM = renderer.create(<Icon source={iconHome} />).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
