// Components
import AccountScreen from './AccountScreen'

// Mocking data
import { users, photos } from '@test/__mocks__/sample-data'

describe('AccountScreen', () => {
  let treeDOM
  const accountData = users[0],
    myPhotos = photos

  beforeEach(() => {
    treeDOM = renderer.create(
      <AccountScreen accountData={accountData} myPhotos={myPhotos} />
    )
  })

  it('Renders correctly', () => {
    expect(treeDOM).toMatchSnapshot()
  })
})
