import AppHeader from './AppHeader'

describe('AppHeader component', () => {
  it('AppHeader renders correctly', () => {
    const treeDOM = renderer.create(<AppHeader />).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
