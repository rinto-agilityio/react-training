// Components
import CommentForm from '.'

describe('CommentForm', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <CommentForm
        avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      />,
    ).toJSON()

    expect(component).toMatchSnapshot()
  })
})
