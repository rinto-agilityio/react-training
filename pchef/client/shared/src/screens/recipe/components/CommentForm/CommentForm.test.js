// Components
import CommentForm from '.'

describe('Comment', () => {
  const props = {
    avatarUri: 'https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg',
  }

  const component = mount(<CommentForm {...props} />)
  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders correctly component with type secondary', () => {
    component.setProps({
      type: 'secondary',
    })

    expect(component).toMatchSnapshot()
  })
})
