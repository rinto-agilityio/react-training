// Components
import Header from '.'

describe('Components', () => {
  describe('Header', () => {
    it('Login snapshots', () => {
      const primaryComponent = renderer.create(
        <Header type="primary" customStyle={{ flex: 1 }} />
      )
      const secondaryComponent = renderer.create(<Header type="secondary" />)

      expect(primaryComponent).toMatchSnapshot()
      expect(secondaryComponent).toMatchSnapshot()
    })
  })
})
