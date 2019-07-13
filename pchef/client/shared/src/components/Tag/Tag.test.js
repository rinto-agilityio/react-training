// Components
import Tag from '.'

describe('Tag', () => {
  it('Renders correctly modal commponent', () => {
    const component = renderer.create(<Tag />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
