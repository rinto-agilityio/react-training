import TabBarIcon from './TabBarIcon'

describe('TabBarIcon component', () => {
  const iconHome = require('@assets/icons/home.png')

  it('Renders correctly', () => {
    const treeDOM = renderer.create(<TabBarIcon source={iconHome} />).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
