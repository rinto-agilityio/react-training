// Components
import Info from './Info'

// Mocking data
import { users } from '@test/__mocks__/sample-data'

describe('Info component', () => {
  let treeDOM

  beforeEach(() => {
    treeDOM = renderer.create(<Info data={users[0]} />)
  })

  it('Renders correctly', () => {
    expect(treeDOM).toMatchSnapshot()
  })
})
