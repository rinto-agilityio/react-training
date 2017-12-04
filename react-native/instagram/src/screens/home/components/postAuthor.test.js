import { users } from '@test/__mocks__/sample-data'
import PostAuthor from './PostAuthor'

describe('PostAuthor component', () => {
  const user = users[0]

  it('Renders correctly', () => {
    const treeDOM = renderer
      .create(
        <PostAuthor
          profile_pic_url={user.profile_pic_url}
          username={user.username}
        />
      )
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
