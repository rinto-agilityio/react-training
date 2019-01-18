// Components
import CommentList from './CommentList'

// Mocking data
import { comments } from '@test/__mocks__/sample-data'

describe('CommentList component', () => {
  it('Renders correctly', () => {
    const treeDOM = renderer
      .create(<CommentList comments={comments} />)
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
