import AppHeader from './AppHeader'

describe('AppHeader component', () => {
  it('Renders correctly', () => {
    const treeDOM = renderer.create(<AppHeader />).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
