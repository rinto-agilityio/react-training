// Components
import Comment from '.'

describe('Comment', () => {
  it('renders correctly', () => {
    const comment = renderer.create(
      <Comment
        avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
        name="Andy"
      />,
    ).toJSON()

    expect(comment).toMatchSnapshot()
  })

  it('renders correctly user comment', () => {
    const comment = renderer.create(
      <Comment
        avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
        name="Andy"
        isGetTime
      />,
    ).toJSON()

    expect(comment).toMatchSnapshot()
  })
})
