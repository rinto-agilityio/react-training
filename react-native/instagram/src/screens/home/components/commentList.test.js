import { comments } from '../../../test/__mocks__/sample-data'
import CommentList from './CommentList'

describe('CommentList component', () => {
  it('CommentList renders correctly', () => {
    const treeDOM = renderer
      .create(<CommentList comments={comments} />)
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
